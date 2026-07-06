
const task_info_input = document.querySelector("#task-input");
const task_date_input = document.querySelector("#input-task-date");
const submitBtn = document.querySelector("#add-task");


submitBtn.addEventListener("click", (event)=>{

    event.preventDefault()
    if (task_info_input.value==="")
        console.log("task info is \"\"");

    if (task_date_input.value==="")
        console.log("task date is \"\"");
    if(task_info_input.value==="" | task_date_input.value===""){
        alert("Please fill out both task info and task completion date");
        return;
    }

    const list =  document.querySelector("#list");
    const bulletPoint = document.createElement("li");
    const checkBox = document.createElement("input");
    checkBox.type ="checkbox";
    const taskInfo = document.createElement("span");
    taskInfo.classList.add("task-name");
    taskInfo.textContent = task_info_input.value;
    const taskDate = document.createElement("span");
    taskDate.classList.add("task-date");

    const rawDateInfo= task_date_input.value.split("-");
    const year= rawDateInfo[0];
    const month= rawDateInfo[1];
    const day = rawDateInfo[2];
    const parsedDate = `${rawDateInfo[1]}-${rawDateInfo[2]}-${rawDateInfo[0]}`;

    taskDate.textContent =parsedDate;

    list.append(bulletPoint);
    bulletPoint.append(checkBox);
    bulletPoint.append(taskInfo);
    bulletPoint.append(taskDate);
    
        
    console.log("Task Info:" + task_info_input.value);
    console.log("Task Date:" + task_date_input.value);
})