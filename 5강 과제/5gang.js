// **<지난 시간 문제>**

// **문제8) 로컬스토리지 사용하기**

// - **문제7**의 `user` 데이터를 활용하세요. (반복해서 생성할 필요 없습니다)

const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};

// 1. user 데이터를 로컬스토리지에 저장하세요. 이때 로컬 스토리지의 `key`는 `user`로 저장합니다. 단, `value`에 `[object Object]` 처럼 저장되면 안됩니다.
// 2. 로컬 스토리지에 저장된 데이터(`user`)를 조회한 후 콘솔에 출력해보세요. 단, 문자열이 아니라 객체로 출력되어야 합니다.
// 3. 조회한 로컬 스토리지 데이터의 나이를 30으로 변경 후 다시 로컬 스토리지에 저장해보세요.
// 4. 조회한 로컬 스토리지의 데이터(`user`)를 삭제하는 코드를 작성하는 코드를 작성해보세요. 그리고 다시 `user` 데이터 조회 후 `null`이 출력되는지 확인하세요.

localStorage.setItem("user", JSON.stringify(user)); //1
console.log(user); //2

localStorage.getItem(user); //3
let newUser = JSON.parse(localStorage.getItem("user"));
user.나이 = 30;
localStorage.setItem("user", JSON.stringify(user));

localStorage.removeItem("user"); //4
let removeUser = localStorage.getItem("user");
console.log(removeUser);

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data));
