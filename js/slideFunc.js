const slideList = document.getElementById("slideList").children;
const slideNum1 = document.getElementById("slideNum1");
const slideNum2 = document.getElementById("slideNum2");

for (const i in slideList) {
  if (typeof(slideList[i]) === "object") {
    slideList[i].addEventListener('click', function() {
      for (const li of slideList) {
        li.classList.remove('active');
      }

      slideList[i].classList.add('active');
      slideNum1.innerText = parseInt(i) + 1;
      if (i === '4') {
        slideNum2.innerText = 1;
      } else {
        slideNum2.innerText = parseInt(i) + 2;
      }
    })
  }
}