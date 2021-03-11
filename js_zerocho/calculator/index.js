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

minusBtn.addEventListener("click", () => {
  if (temp) {
    operator = "-";
    numberInput.value = null;
  } else {
    if (numberInput.value) {
      //'5' -> 5
      temp = Number(numberInput.value);
      operator = "-";
      numberInput.value = null;
    }
  }
});

divideBtn.addEventListener("click", () => {
  if (temp) {
    operator = "/";
    numberInput.value = null;
  } else {
    if (numberInput.value) {
      //'5' -> 5
      temp = Number(numberInput.value);
      operator = "/";
      numberInput.value = null;
    }
  }
});

multiplyBtn.addEventListener("click", () => {
  if (temp) {
    operator = "*";
    numberInput.value = null;
  } else {
    if (numberInput.value) {
      //'5' -> 5
      temp = Number(numberInput.value);
      operator = "*";
      numberInput.value = null;
    }
  }
});

//clear
clearBtn.addEventListener("click", () => {
  numberInput.value = null;
  resultInput.value = null;
  //값 초기화 = null or undefined
  temp = null;
  operator = null;
});

//들여쓰기 3번이면 다시생각해봐라...
calculateBtn.addEventListener("click", () => {
  console.log(operator, temp, numberInput.value);
  if (operator) {
    if (numberInput.value) {
      //문자열 + 숫자 = 문자열⭐(+만 이렇게 됨! 중요! 조심!)
      // -*/는 문자열이있어도 숫자로 인식.
      if (operator === "+") {
        resultInput.value = temp + Number(numberInput.value);
      } else if (operator === "-") {
        resultInput.value = temp - Number(numberInput.value);
      } else if (operator === "/") {
        resultInput.value = temp / Number(numberInput.value);
      } else if (operator === "*") {
        resultInput.value = temp * Number(numberInput.value);
      }
      //연속 계산 가능하도록
      //이거는 중복 제거일때 밑으로 빼주기
      temp = Number(resultInput.value);
    }
  } else {
    if (numberInput.value) {
      resultInput.value = temp;
    }
  }
});
