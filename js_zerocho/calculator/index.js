const numberInput = document.querySelector("#input");
const clearBtn = document.querySelector("#clear");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const divideBtn = document.querySelector("#divide");
const multiplyBtn = document.querySelector("#multiply");
const calculateBtn = document.querySelector("#calculate");
const resultInput = document.querySelector("#result");

//고정값이 아닌 바뀌는 값이므로 let으로 선언
let temp;
let operator;

//원래는 중복을 하면안되지만 지금 현재는 이렇게 한 후 다음에 해결 할 예정
plusBtn.addEventListener("click", () => {
  if (temp) {
    operator = "+";
    numberInput.value = null;
  } else {
    if (numberInput.value) {
      //'5' -> 5
      temp = Number(numberInput.value);
      //연산자는 변수에 넣지 못하므로 문자열로 해줌
      operator = "+";
      numberInput.value = null;
    }
  }
  //무시인 경우엔 else 작성안해도 됨
  //else {}
});

