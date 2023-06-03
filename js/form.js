const privacyAgree = document.getElementById('privacyAgree');
const privacyAgreeLabel = document.getElementById('privacyAgreeLabel');
const marketingAgree = document.getElementById('marketingAgree');
const marketingAgreeLabel = document.getElementById('marketingAgreeLabel');
const inputs = document.querySelectorAll('input');
const selects = document.querySelectorAll('select');

const formDatas = new Array();

let privacyChecked = false;
let marketingChecked = false;

privacyAgreeLabel.addEventListener('click', function() {
  privacyAgreeLabel.classList.toggle('checked');
  privacyAgree.checked = !privacyAgree.checked;
  privacyChecked = privacyAgree.checked;
});

marketingAgreeLabel.addEventListener('click', function() {
  marketingAgreeLabel.classList.toggle('checked');
  marketingAgree.checked = !marketingAgree.checked;
  marketingChecked = marketingAgree.checked;
});

const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', function(event) {
  event.preventDefault();

  const data = new FormData();

  for (let input of inputs) {
    if (input.type === 'checkbox' || input.type === 'submit') continue;
    // Validation of inputs
    if ( !input.value ) { alert( `${input.placeholder}을(를) 입력해주세요.`); return; }
    data.append(input.id, input.value);
  }

  for (let select of selects) {
    // Validation of select inputs
    if ( select.value === "" ) {
      alert( `${select.querySelector( 'option' ).innerText}` );
      return;
    }
    data.append(select.id, select.value);
  }

  // Validation
  if ( !privacyChecked ) {
    alert("개인정보 활용에 동의를 하셔야합니다.")
    return;
  }

  if ( !marketingChecked ) {
    alert( "마케팅 수집 이용에 동의하셔야 합니다." );
    return;
  }

  for (let key of data.keys()) {
    console.log(key, ": ", data.get(key));
  }

  formDatas.push(data);
  console.log(formDatas);
  
});