import { Injectable } from '@angular/core';
import { Task } from '../model/task'

@Injectable()
export class TaskService {

	constructor() {
		if (localStorage.getItem("Task") == null)
			localStorage.setItem("Task", "[]");
	}

	getTasksByProject(idProject: string) {
		let listTask = JSON.parse(localStorage.getItem("Task")) as Task[];
		return listTask.filter(task => task.idProject == idProject);
	}

	getAll() {
		let listTask = JSON.parse(localStorage.getItem("Task")) as Task[];
		return listTask;
	}

	add(task: Task) {
		let listTask = JSON.parse(localStorage.getItem("Task")) as Task[];
		if (this.existNameTask(task.name, task.idProject, listTask)) {
			return "Ya existe una tarea con este nombre";
		}

		task.id = this.uuidv4();
		console.log(listTask.length)
		listTask.push(task);
		console.log(listTask.length)
		localStorage.setItem("Task", JSON.stringify(listTask));

		return "Se ha creado correctamente la tarea ";
	}

	updateState(task: Task) {
		task.state += 1;
		if (task.state > 2)
			task.state = 2;
		let listTask = JSON.parse(localStorage.getItem("Task")) as Task[];
		let indexTask = listTask.map(task => task.id).indexOf(task.id);

		listTask[indexTask] = task;
		localStorage.setItem("Task", JSON.stringify(listTask));
	}

	delete(idTask: string) {
		let listTask = JSON.parse(localStorage.getItem("Task")) as Task[];
		let indexTask = listTask.map(task => task.id).indexOf(idTask);

		listTask.splice(indexTask, 1);
		localStorage.setItem("Task", JSON.stringify(listTask));
	}
	private existNameTask(name: string, idProject: string, listTask: Task[]) {
		let listProject = listTask.filter(task => task.idProject == idProject);
		return !listProject.every(task => task.name != name);
	}

	private uuidv4() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	}
}