var taskList = [];

function addTask(){
	var newTask = document.getElementById("newTask");
	taskList.push(newTask.value);
	newTask.value = "";
	newTask.select();
	displayTasks();
	saveTasks();
}
function editTask(itemToEdit){
	var tempArray = [];
	for(var i=0;i<taskList.length;i++){
		if(itemToEdit !== i){ tempArray.push(taskList[i]); 
		}
		else{
			var newTask = prompt("Edit your task", taskList[i]);
			tempArray.push(newTask); 
		}
	}
		taskList = tempArray();
		displayTasks();
	saveTasks();
	
}

function removeTask(itemToRemove){
	var tempArray = [];
	for(var i=0;i<taskList.length;i++){
		if(itemToRemove !== i){ tempArray.push(taskList[i]); }
	}
	taskList = tempArray;
	displayTasks();
	saveTasks();
}

function editTask(itemToEdit){
	var tempArray = [];
	for(var i=0;i<taskList.length;i++){
		if(itemToEdit !== i){ 
			tempArray.push(taskList[i]); 
		} else {
			var newTask = prompt("Edit your task", taskList[i]);
			tempArray.push(newTask);
		}
	}
	taskList = tempArray;
	displayTasks();
	saveTasks();
}

function displayTasks(){
	var listLocation = document.getElementById("listTask");
	listLocation.innerHTML = "";
	for(var i=0;i<taskList.length;i++){
		listLocation.innerHTML += 
			'<li class="list-group-item">' + taskList[i] + 
			'<div class="btn-group btn-group-xs pull-right">' +
				'<button onclick="removeTask(' + i + ')" class="btn btn-success delete" type="buton">' +
				'<span class="glyphicon glyphicon-ok"></span> ' +
					'Done' +
				'</button>' +
				'<button onclick="editTask(' + i + ')" class="btn btn-warning edit" type="buton">' +
				'<span class="glyphicon glyphicon-pencil"></span> ' +
					'Edit' +
				'</button>' +
			'</div></li>';
	}
}

function saveTasks(){
	localStorage.ourTaskList = JSON.stringify(taskList);
}

function getTasks(){
	if(localStorage.ourTaskList){
		taskList = JSON.parse(localStorage.ourTaskList);
		displayTasks();
	}
}