// **문제1) 배열과 객체 만들기**

// - 다음 사진과 같이 **3명의 이름**, **나이**, **성별**에 대한 정보가 존재합니다. 다음의 정보를 배열과 객체를 활용하여 하나의 변수에 담고, 해당 변수를 console.log로 출력하세요.
// - **🍯 hint**: 객체들의 배열로 만들어보세요.

const friends = [
  { name: "철수", age: 19, gender: "남" },
  { name: "짱구", age: 20, gender: "남" },
  { name: "유리", age: 21, gender: "여" },
];

console.log(friends);

// **문제2) 문제1에서 만든 데이터를 html에 보여주기**

// - 문제1에서 만든 객체들의 배열을 이용하여 html에 다음과 같이 보여주세요.
// - **팁:** `forEach`를 활용해보세요.

const friendsList = document.getElementById("friends-list");

friends.forEach((friend) => {
  const friendCard = document.createElement("div");
  friendCard.classList.add("friend-card");
  friendCard.innerHTML = `<strong>이름:</strong> ${friend.name} <br> <strong>나이:</strong> ${friend.age}`;
  friendsList.appendChild(friendCard);
});

// **문제3) find 메소드**

// - 문제1에서 만든 객체들의 배열을 활용하여 성별이 여자인 데이터를 한 명 찾아 콘솔에 출력해보세요.

const femaleFriend = friends.find((friends) => friends.gender === "여");
console.log(femaleFriend);

// **문제4) filter 메소드**

// - 문제1에서 만든 객체들의 배열을 활용하여 성별이 남자인 데이터를 필터링하여 콘솔에 출력해보세요.

const maleFriends = friends.filter((friends) => friends.gender === "남");
console.log(maleFriends);

// **문제5) map 연습 문제**

// - 문제1에서 만든 객체들의 배열을 활용하여 **모든 데이터의 나이에 10을 더한 새로운 배열**을 콘솔에 출력해보세요.
// - 단, 문제1에서 만든 **기존 데이터는 변경되면 안됩니다.**
// - 기존 데이터가 변경되지 않았는지 확인하기 위해 **기존 데이터와 새로운 배열을 모두 콘솔에 출력**해보세요.

const olderFriend = friends.map((friends) => {
  return {
    name: friends.name,
    age: friends.age + 10,
    gender: friends.gender,
  };
});
console.log("-----------");
console.log(friends);
console.log(olderFriend);

// **문제6) sort 연습 문제**

// - 문제1에서 만든 객체들의 배열을 활용하여 **나이순으로 정렬해보세요. (내림차순으로 정렬)**
// - ⚠️ sort는 기존의 데이터를 변경하는 함수입니다. **spread operator로 복사본 생성 후** 진행해보세요.
// - 기존 데이터가 변경되지 않았는지 확인하기 위해 **기존 데이터와 새로운 배열을 모두 콘솔에 출력**해보세요.

const sortFriend = [...friends].sort((a, b) => b.age - a.age);
console.log("-----------");
console.log(sortFriend);
console.log(friends);

// **문제7) destructuring (구조 분해 할당) 문법 활용 예시**

// - 다음의 데이터를 활용하세요.

const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};

// - user 데이터에서 주소를 출력하기 위해선 다음과 같이 작성해야 합니다.

// console.log(user.주소); // "시골"

// - 이때 위와 같이 . (점)을 사용하지 않고, **destructuring (구조 분해 할당)을 활용**하여 **이름, 나이, 주소를 추출**하고 콘솔에 출력해보세요.

const { 이름, 나이, 주소 } = user;
console.log(이름);
console.log(나이);
console.log(주소);
