window.addEventListener("scroll", function () {
  console.log(window.scrollY);
});

console.log("----------");

for (i = 1; i <= 10; i++) {
  console.log(i);
}

// 1. 1부터 20까지 숫자 중 짝수만 출력하도록 코드를 작성해보세요.
//     - **second.js** 파일의 하단에 코드를 작성하세요. (기존 코드 삭제 X)

for (i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 3초 후에 “**3초 후에 출력되는 텍스트입니다.**” 라는 콘솔로그가 출력되도록 코드를 작성해보세요.
//     - `setTimeout`을 활용하세요

setTimeout(function () {
  console.log("3초후에 출력되는 텍스트 입니다.");
}, 3000);
