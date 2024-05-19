// 1. setInterval을 이용하여 1초에 1씩 카운트되게 만든 후
// 2. 카운트가 5가 되면 “종료”라는 콘솔로그가 출력되게 만들보세요
// 3. 단, clearInterval을 통해 카운트 5가 되면 현재 setInterval 함수를 종료해야 합니다.

// const timer = document.getElementById("counter");

// setInterval(function () {
//   if (timer < 5) {
//     timer = timer + 1;
//   }
// }, 1000);

// setTimeout(() => {
//   clearInterval(timer); // 타이머를 멈추는 데 사용됩니다.
//   console.log("종료");
// }, 5000);

// let counter = 0; // 카운터 변수를 추가합니다.

// const timer = setInterval(function () {
//   if (counter < 5) {
//     counter = counter + 1; // 카운터를 증가시킵니다.
//     document.getElementById("counter").innerHTML = counter; // 카운터를 화면에 출력합니다.
//     if (counter === 5) {
//       clearInterval(timer);
//       console.log("종료");
//     } // 타이머를 멈춥니다.
//   }
// }, 1000);
// --------------------------시행착오-------------------------------

let counter = 0;

const timer = setInterval(function () {
  counter = counter + 1;
  document.getElementById("counter").innerHTML = counter;
  if (counter === 5) {
    clearInterval(timer);
    console.log("종료");
  }
}, 1000);
