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
		if (this.existNameTask(task.name, listTask)) {
			return "Ya existe una tarea con este nombre";
		}

		task.id = this.uuidv4();
		listTask.push(task);
		localStorage.setItem("Task", JSON.stringify(listTask));

		return "Se ha creado correctamente la tarea ";
	}

	private existNameTask(name: string, listTask: Task[]) {
		return !listTask.every(task => task.name != name);
	}

	private uuidv4() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	}
}