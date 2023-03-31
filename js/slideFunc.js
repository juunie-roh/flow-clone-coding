const slideList = document.querySelectorAll("#slideList li");
const slideNum1 = document.getElementById("slideNum1");
const slideNum2 = document.getElementById("slideNum2");
const containerFunctions = document.querySelector(".container__functions");

const bgUrlList = [
  "./images/main/main-function1.png",
  "./images/main/main-function2.png",
  "./images/main/main-function3.png",
  "./images/main/main-function4.png",
  "./images/main/main-function5.png",
];

function slideTimeHandler() {
  const currentList = document.querySelector("#slideList li.active");

  let nextList;
  if (currentList === slideList[slideList.length - 1]) {
    nextList = slideList[0];
  } else {
    nextList = currentList.nextElementSibling;
  }
  
  currentList.classList.remove('active');
  nextList.classList.add('active');
  
  if (slideNum1.innerText === '5') {
    slideNum1.innerText = '1';
    slideNum2.innerText = parseInt(slideNum2.innerText) + 1;
  } else if (slideNum1.innerText === '4') {
    slideNum1.innerText = parseInt(slideNum1.innerText) + 1;
    slideNum2.innerText = '1';
  } else {
    slideNum1.innerText = parseInt(slideNum1.innerText) + 1;
    slideNum2.innerText = parseInt(slideNum2.innerText) + 1;
  }
  
  containerFunctions.style.backgroundImage = `url(${bgUrlList[parseInt(slideNum1.innerText) - 1]})`;
}

const slideTimer = setInterval(function() {
  const currentList = document.querySelector("#slideList li.active");

  let nextList;
  if (currentList === slideList[slideList.length - 1]) {
    nextList = slideList[0];
  } else {
    nextList = currentList.nextElementSibling;
  }
  
  currentList.classList.remove('active');
  nextList.classList.add('active');
  
  if (slideNum1.innerText === '5') {
    slideNum1.innerText = '1';
    slideNum2.innerText = parseInt(slideNum2.innerText) + 1;
  } else if (slideNum1.innerText === '4') {
    slideNum1.innerText = parseInt(slideNum1.innerText) + 1;
    slideNum2.innerText = '1';
  } else {
    slideNum1.innerText = parseInt(slideNum1.innerText) + 1;
    slideNum2.innerText = parseInt(slideNum2.innerText) + 1;
  }
  
  containerFunctions.style.backgroundImage = `url(${bgUrlList[parseInt(slideNum1.innerText) - 1]})`;
}, 1000);

slideList.forEach(function(list, index) {
  list.addEventListener('click', function() {
    for (let li of slideList) {
      li.classList.remove('active');
    }
    list.classList.add('active');
    containerFunctions.style.backgroundImage = `url(${bgUrlList[index]})`;
    slideNum1.innerText = parseInt(index) + 1;
    if (index === 4) {
      slideNum2.innerText = 1;
    } else {
      slideNum2.innerText = parseInt(index) + 2;
    }
  })
});