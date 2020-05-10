const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];
let space = []

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const div = btn.parentNode;
  toDoList.removeChild(li);
  toDoList.remove(div);
  const cleanli = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  const cleandiv = space.filter(function(div) {
    return div.id !== parseInt(div.id);
  });
  toDos = cleanli;
  space = cleandiv
  saveToDos();
  savediv();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function savediv(){
  localStorage.setItem(TODOS_LS, JSON.stringify(space));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const div = document.createElement("div");
  const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  div.id = newId;
  div.classList.add("space");
  toDoList.appendChild(div);
  const toDoObj = {
    text: text,
    id: newId
  };
  const setDiv = {
    id: newId
  };
  toDos.push(toDoObj);
  space.push(setDiv);
  saveToDos();
  savediv();
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
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
