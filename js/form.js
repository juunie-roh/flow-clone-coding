const privacyAgree = document.getElementById('privacyAgree');
const privacyAgreeLabel = document.getElementById('privacyAgreeLabel');
const marketingAgree = document.getElementById('marketingAgree');
const marketingAgreeLabel = document.getElementById('marketingAgreeLabel');
const inputs = document.querySelectorAll('input');
const selects = document.querySelectorAll('select');

const formDatas = new Array();

privacyAgreeLabel.addEventListener('click', function() {
  privacyAgreeLabel.classList.toggle('checked');
  privacyAgree.checked = !privacyAgree.checked;
});

marketingAgreeLabel.addEventListener('click', function() {
  marketingAgreeLabel.classList.toggle('checked');
  marketingAgree.checked = !marketingAgree.checked;
});


const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', function(event) {
  event.preventDefault();

  const data = new FormData();
  for (let input of inputs) {
    if (input.type === 'checkbox' || input.type === 'submit') continue;
    data.append(input.id, input.value);
  }

  for (let select of selects) {
    data.append(select.id, select.value);
  }

  // if (!privacyAgree.checked) {
  //   alert("개인정보 활용에 동의를 하셔야합니다.")
  //   return;
  // }

  for (let key of data.keys()) {
    console.log(key, ": ", data.get(key));
  }

  formDatas.push(data);
  console.log(formDatas);
});