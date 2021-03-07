// console.log("hello world");
// document.write("hello world");

//button에 clickevent
document.querySelector("#click").addEventListener("click", () => {
  //변수선언(저장), 효율적으로 사용할수 있도록 하기
  const first = document.querySelector("#first").value;
  const second = document.querySelector("#second").value;
  const result = document.querySelector("#result");

  //a,b값 찾기
  if (first) {
    //yes
    if (second) {
      //yes
      const play = first * second;
      result.textContent = play;
    } else {
      //no
      result.textContent = "두번째 값 입력해주세요";
    }
  } else {
    //no
    result.textContent = "첫번째 값 입력해주세요";
  }
});
