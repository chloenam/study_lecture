// 가져오는 개념
//button은 객체를 저장한 변수
const btn = document.querySelector("#button");

// document.querySelector("아이디")는 그 아이디의 태그를 가져온다.
btn.addEventListener("click", () => {
  //input은 value, div나 span,button은 textContent로 가져올수있음
  // .은 ~의 라는 뜻 이라고 생각해주면 좋음
  //word, input은 문자열 저장한 변수
  const word = document.querySelector("#word").textContent;
  const input = document.querySelector("#input").value;

  //word의 마지막 글자 가져오기
  const lastIndex = word.length - 1;
  const lastWord = word[lastIndex];
  //input의 첫글자를 가져오는 것
  const firstInput = input[0];

});
