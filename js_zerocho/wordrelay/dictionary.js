// 가져오는 개념
//button은 객체를 저장한 변수
const btn = document.querySelector("#button");

//중복 제어하기 = 단어장 만들기
const dictionary = [];

// document.querySelector("아이디")는 그 아이디의 태그를 가져온다.
btn.addEventListener("click", () => {
  const wordTag = document.querySelector("#word");
  const inputTag = document.querySelector("#input");
  const errorTag = document.querySelector("#error");
  //input은 value, div나 span,button은 textContent로 가져올수있음
  // .은 ~의 라는 뜻 이라고 생각해주면 좋음
  //word, input은 문자열 저장한 변수
  const word = wordTag.textContent;
  const input = inputTag.value;

  //중복단어 체크하기
  if (dictionary.includes(input)) {
    //중복단어 있음
    errorTag.textContent = "중복입니다";
    inputTag.value = "";
    inputTag.focus();
  } else {
    //중복단어 없음
    //word의 마지막 글자 가져오기
    //한번사용하는 변수들은 그냥 작성해줘도 됨
    /*
    const lastIndex = word.length - 1;
    const lastWord = word[lastIndex];
    //input의 첫글자를 가져오는 것
    const firstInput = input[0];
    */
    // ===은 같다라는 뜻
    if (word[word.length - 1] === input[0]) {
      //true
      //input 글자를 제시어로 가져오기
      wordTag.textContent = input;
      //error칸에 텍스트 없앰
      errorTag.textContent = "";
      //input칸 텍스트 리셋
      inputTag.value = "";
      //input칸 focus / focus는 함수, 동작한느 것
      inputTag.focus();
      //단어장에 단어 추가
      dictionary.push(input);
    } else {
      //false
      //error에 텍스트 작성
      errorTag.textContent = "땡!";
      //input칸 텍스트 리셋
      inputTag.value = "";
      //input칸 focus / focus는 함수, 동작한느 것
      inputTag.focus();
    }
  }
});
