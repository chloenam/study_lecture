// 가져오는 개념
//button은 객체를 저장한 변수
const btn = document.querySelector("#button");

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
  } else {
    //false
    //error에 텍스트 작성
    errorTag.textContent = "땡!";
    //input칸 텍스트 리셋
    inputTag.value = "";
    //input칸 focus / focus는 함수, 동작한느 것
    inputTag.focus();
  }
});

/*

''
""
`` = backtick ⭐

ex)
'abcde'[0] // 'a'
'가나다라마'[3] // '라'
'문자열'.length //3
문자열 & 객체
string
number
boolean
object
null
undefined
symbol
*/
