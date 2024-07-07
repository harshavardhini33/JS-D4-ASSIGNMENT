const taskText = document.getElementById("taskName");
const taskList= document.getElementById("taskEntered");
const addButton = document.getElementById("addBtn");
const filterButton = document.getElementById("filterBtn");
let tasks=[];
function addTask(){
    const taskInput = taskText.value.trim();
    if (taskInput!=""){
        tasks.push({text: taskInput});
        taskText.innerHTML= "";
        displayTask();
    }
}

function displayTask(){
    taskList.innerHTML="";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked": ""}>
        <label for="task-${index}">${task.text}</label>
        <button id="deleteButton" onclick="deleteTask(${index})">Delete</button><br><br>`;
        li.querySelector("input").addEventListener("change", () => ToggleTask(index));
        taskList.appendChild(li);
    });
}

function ToggleTask(index){
    tasks[index].completed = !tasks[index].completed;
    displayTask();
}
function filterTask(){
    tasks= tasks.filter(task => !task.completed);
    displayTask();
}
function deleteTask(index){
    tasks.splice(index,1);
    displayTask();
}

addButton.addEventListener("click",addTask);
filterButton.addEventListener("click",filterTask);
