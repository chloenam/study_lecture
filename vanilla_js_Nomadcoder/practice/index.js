//대부분의 변수를 줄때는 const 사용, 꼭 필요할때만 let 사용
//DATA TYPE
/*String, text, 문자
const what = 'chloe';

console.log(what);


//Boolean-> True or False (is not text)
const wat = true;


//Number
const wat = 666;


//Float
const wat = 55.1;


//Camel case-> 스페이스가 필요햘때 그다음에 올 단어 첫번째를 대문자로 적기

//변수들을 정렬하는 방법

//1.Array [] -> 숫자는 항상 0부터 시작함, 리스트형식
const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

console.log(daysOfWeek[2]);

//2.Object {} ->각 value에 이름을 줄 수 있음, object 안에 array를 넣을 수 있음
const info = {
  name: 'chloe',
  age: '22',
  gender: 'female',
  isHandsome: 'true',
  favMovie: ['LOTR', 'Along the gods', 'Oldboy'],
  favFood: [
    {
      name: 'kimchi',
      fatty: false,
    },
    {
      name: 'cheese burger',
      fatty: true,
    },
  ],
};

console.log(info);

//function
function sayHello(name, age) {
  console.log('hello!', name, ' you have ', age, ' years old! ');
}

sayHello('chloe', 25);

//DOM(document Object model)
//console.log(document.getElementById); ->same thing

//selector->id
const title = document.getElementById("title");

//selector -> id가 title인 것
const title = document.querySelector("#title");

title.innerHTML = "Hi From JS";
title.style.color = "red";
document.title = "hello world";

console.log(title);

//Events, Event handlers

const title = document.querySelector("#title");
window가 resize될때마다 event가 나타남

function handleResize(event) {
  console.log(event);
}

window.addEventListener("resize", handleResize);

const title = document.querySelector("#title");

function handleClick() {
  title.style.color = "gold";
}

title.addEventListener("click", handleClick);


//If, else, and, or

if(condition-true){
    block
} else{
    block
}

//if, else
if (10 === 5) {
  console.log("hi");
} else {
  console.log("ho");
}

//&& = and 는 두 조건 모두 충족시킬 때라는 뜻.
//true && true = true;
//false && true = false;
//true && false = false;
//false && false = false;

if (20 > 5 && "nico" === "nico") {
  console.log("yes");
} else {
  console.log("no");
}


// || = or 은 하나 또는 다른것이 참 일때라는 뜻.
//true || true = true;
//false || true = true;
//true || false = true;
//false || false = false;

if (10 > 5 || "nico" === "nice") {
  console.log("yes");
} else {
  console.log("no");
}



//prompt는 요즘은 사요하지 않음. but 예시를 위해 썼음.
const age = prompt("how old are you?");

if (age > 19) {
  console.log("go on");
} else {
  console.log("go away");
}



//DOM If else

const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "rgb(48, 92, 80)";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}

init();
*/

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  /*const hasClass = title.classList.contains(CLICKED_CLASS);
  if (hasClass) {
    title.classList.remove(CLICKED_CLASS);
  } else {
    title.classList.add(CLICKED_CLASS);
  }*/
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}

init();
