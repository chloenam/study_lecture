const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');
const saveBtn = document.getElementById('jsSave');

const INITIAL_COLOR = '#000';
const CANVAS_SIZE = 700;
//canvas의 pixel modifier을 지정해줘야 그림을 그릴 수 있음!!
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

//기본 배경 설정
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
//painting line
ctx.strokeStyle = INITIAL_COLOR;
//fill
ctx.fillStyle = INITIAL_COLOR;
//range
ctx.lineWidth = 2.5;
//fillRect(x,y,w,h)
//ctx.fillRect(50, 20, 100, 49);

let painting = false;
let filling = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  // canvas안에서의 mousemove가 되는 값을 알기위해 offset 값이 필요
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    //path=line
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  //stroke color
  ctx.strokeStyle = color;
  //fill color
  ctx.fillStyle = color;
}

function handleRangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = 'Fill';
  } else {
    filling = true;
    mode.innerText = 'Paint';
  }
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}

function handleCM(event) {
  //우클릭을 했을 시 메뉴가 안나오게 하는 방법
  event.preventDefault();
}

//file saving
function handleSaveClick() {
  const image = canvas.toDataURL(); //defaul = .png
  const link = document.createElement('a');
  link.href = image;
  link.download = 'PaintJS[🎨]';
  link.click();
  //console.log(link);
}

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mouseup', stopPainting);
  canvas.addEventListener('mouseleave', stopPainting);
  canvas.addEventListener('click', handleCanvasClick);
  canvas.addEventListener('contextmenu', handleCM);
}

//console.log(Array.from(color));

Array.from(colors).forEach((color) => color.addEventListener('click', handleColorClick));

if (range) {
  range.addEventListener('input', handleRangeChange);
}

if (mode) {
  mode.addEventListener('click', handleModeClick);
}

if (saveBtn) {
  saveBtn.addEventListener('click', handleSaveClick);
}
