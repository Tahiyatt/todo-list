
const task_info_input = document.querySelector("#task-input");
const task_date_input = document.querySelector("#input-task-date");
const submitBtn = document.querySelector("#add-task");

const presetValues =[
    {
        task_info: "Study React",
        task_date: "2026-06-15"
    },
    {
        task_info: "Finish Project",
        task_date: "2026-06-20"
    },
    {
        task_info: "Buy Groceries",
        task_date: "2026-06-22"
    },
    {
        task_info: "Solve World Hunger",
        task_date: "2026-06-25"
    }
]

let listStorage = JSON.parse(localStorage.getItem("data"));

if (!listStorage) {
    listStorage = [...presetValues];
    localStorage.setItem("data", JSON.stringify(listStorage));
}
console.log(listStorage);
console.log(listStorage.length);

console.log("Updating list...");
updateListContianer();
console.log("Finished updating.");

submitBtn.addEventListener("click", (event)=>{

    event.preventDefault()
    if (task_info_input.value==="")
        console.log("task info is \"\"");

    if (task_date_input.value==="")
        console.log("task date is \"\"");
    if(task_info_input.value==="" || task_date_input.value===""){
        alert("Please fill out both task info and task completion date");
        return;
    }

    // localstorage add item
    const taskObj ={
        task_info: task_info_input.value,
        task_date: task_date_input.value,
        completed: false
    };

    listStorage.push(taskObj);
    localStorage.setItem("data", JSON.stringify(listStorage));


    console.log("inside submit\n",listStorage);
    //update page
    updateListContianer()

        
    console.log("Task Info:" + task_info_input.value);
    console.log("Task Date:" + task_date_input.value);
})


function updateListContianer() {
    console.log("before for each");
    const list = document.querySelector("#list");
    list.innerHTML = "";
    listStorage.forEach((task, index) => {
          console.log("task_info and task_date pre- intial");
    let task_info =task.task_info;
    let task_date=task.task_date;

    console.log("task_info and task_date successfully intialized");
    const list =  document.querySelector("#list");
    const bulletPoint = document.createElement("li");
    const checkBox = document.createElement("input");
    checkBox.type ="checkbox";
    checkBox.checked = task.completed;

    
    checkBox.addEventListener("change", ()=>{
        task.completed = checkBox.checked;

        localStorage.setItem("data", JSON.stringify(listStorage));
    })

    const taskInfo = document.createElement("span");
    taskInfo.classList.add("task-name");
    taskInfo.textContent = task_info; //importatn
    const taskDate = document.createElement("span");
    taskDate.classList.add("task-date");

    const rawDateInfo= task_date.split("-"); //importatn
    const year= rawDateInfo[0];
    const month= rawDateInfo[1];
    const day = rawDateInfo[2];
    const parsedDate = `${rawDateInfo[1]}-${rawDateInfo[2]}-${rawDateInfo[0]}`;

    taskDate.textContent =parsedDate;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.dataset.index = index;
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa", "fa-trash");

    deleteButton.append(deleteIcon);

    list.append(bulletPoint);
    bulletPoint.append(checkBox);
    bulletPoint.append(taskInfo);
    bulletPoint.append(taskDate);
    bulletPoint.append(deleteButton)
    });
   
    
}


const list = document.querySelector("#list");
// list.innerHTML = "";

list.addEventListener("click", (event) => {
    const deleteBtn = event.target.closest(".delete-btn");

    if (!deleteBtn) return;
    const index= deleteBtn.dataset.index;
    listStorage.splice(index,1);
    localStorage.setItem("data", JSON.stringify(listStorage));
    // deleteBtn.parentElement.remove();
    updateListContianer();

    
});


