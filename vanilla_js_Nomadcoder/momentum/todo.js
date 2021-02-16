const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

//array
let toDos = [];

function deleteTodo(event) {
  //어떤 todo list가 지워지는지 확인
  //console.log(event.target.parentNode);
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  //clean todo = newtodo
  //filter은 true인 값을 가지고 새로운 array를 만듦
  const cleanToDos = toDos.filter(function (toDo) {
    //li.id가 string이기때문에 숫자로 변형해줌
    //console.log(cleanToDos)로 확인
    return toDo.id !== parseInt(li.id);
  });
  //toDos가 const라면 이 함수는 쓸 수 없으므로 let으로 변경해줘야함
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  //js의 object를 string으로
  //JSON = Java Script Object Notation
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteTodo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  //todo object에 순서를 주는 것
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    //string을 object로 바꿔줌
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
