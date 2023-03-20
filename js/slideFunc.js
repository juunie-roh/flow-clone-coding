const slideList = document.getElementById("slideList").children;
const slideNum1 = document.getElementById("slideNum1");
const slideNum2 = document.getElementById("slideNum2");
const functionBg = document.getElementsByClassName("container__functions")[0];

const bgUrlList = [
  "./images/main/main-function1.png",
  "./images/main/main-function2.png",
  "./images/main/main-function3.png",
  "./images/main/main-function4.png",
  "./images/main/main-function5.png",
];

for (let i in slideList) {
  if (typeof (slideList[i]) === "object") {
    slideList[i].addEventListener('click', function () {
      for (let li of slideList) {
        li.classList.remove('active');
      }
      slideList[i].classList.add('active');
      functionBg.style.backgroundImage = `url(${bgUrlList[i]})`;
      slideNum1.innerText = parseInt(i) + 1;
      if (i === '4') {
        slideNum2.innerText = 1;
      } else {
        slideNum2.innerText = parseInt(i) + 2;
      }
    })
  }
}