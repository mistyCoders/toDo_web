const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOLIST_LS = 'toDoList';

let toDoArray = [];

function saveToDoArray() {
    localStorage.setItem(TODOLIST_LS, JSON.stringify(toDoArray));
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}



function loadToDoList() {
    const loadedToDoList = localStorage.getItem(TODOLIST_LS);
    if(loadedToDoList !== null) {
        const parsedToDoList = JSON.parse(loadedToDoList);
        parsedToDoList.forEach( function (toDo) {
            paintToDo(toDo.text);
        });
    }
}

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDoArray = toDoArray.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    console.log(cleanToDoArray);
    toDoArray = cleanToDoArray;
    saveToDoArray();
}


function paintToDo(text) {
    
    const li = document.createElement('li');
    const delBtn = document.createElement("input");
    const span = document.createElement("span");
    const newId = toDoArray.length + 1;


    
    delBtn.classList.add("delBtn");
    delBtn.value=` ${text}`;
    delBtn.addEventListener("click", deleteToDo);
    
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        text : text,
        id : newId
    }

    toDoArray.push(toDoObj);
    saveToDoArray();
}

function init() {
    loadToDoList();
    toDoForm.addEventListener("submit",handleToDoSubmit);    
}

init();