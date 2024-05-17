console.log(닉네임);
var 닉네임 = "캥거루근육단단";
console.log(닉네임);

function hi() {
  console.log("안녕하세요");
}

hi();

const hello = () => {
  console.log("반갑습니다");
};

hello();

function name(parameter) {
  console.log(`${parameter}님, 안녕하세요`);
}

name("유상");

function x(a, b) {
  console.log(a * b);
}

x(2, 3);

function n() {
  return 2;
}

const sideBar = document.querySelector(".side-bar");
const sideBarBtn = document.querySelector(".side-bar-btn");

sideBarBtn.addEventListener("click", function () {
  if (sideBar.classList.contains("active")) {
    sideBar.classList.remove("active");
    sideBarBtn.textContent = "열기";
  } else {
    sideBar.classList.add("active");
    sideBarBtn.textContent = "닫기";
  }
});
