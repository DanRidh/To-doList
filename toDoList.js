let input = document.getElementById("userInput");
let btn = document.getElementById("addTaskButton");
let taskList = document.getElementById("taskList");


//checks if input is at least 3 characters long if not can't submit
let validInput = () => input.value.length < 3 ? btn.disabled = true : btn.disabled = false;


//appends a new li element to the ul
let addTask = () => {
    newTask = document.createElement("li");
    newTask.innerText = input.value;
    taskList.appendChild(newTask);
    input.value = "";
    btn.disabled = true;
}


//removes clicked element selected
let removeTask = (e) => {
    e.target.remove();
}
taskList.addEventListener('click', removeTask, false);


//makes the input trigger the addTaskButton if user presses enter
let onEnter = (e) => {
    e.preventDefault();
    if(e.keyCode === 13){
        btn.click()
    }
}
input.addEventListener('keyup', onEnter, false);
