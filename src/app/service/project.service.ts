import { Injectable } from '@angular/core';
import { Project } from '../model/project'

@Injectable()
export class ProjectService {

	constructor() {
		if (localStorage.getItem("Project") == null)
			localStorage.setItem("Project", "[]");
	}

	add(project: Project) {
		let listProject = JSON.parse(localStorage.getItem("Project")) as Project[];
		if (this.existNameProject(project.name, listProject)) {
			return "Ya existe un projecto con este nombre";
		}

		project.id = this.uuidv4();
		listProject.push(project);
		localStorage.setItem("Project", JSON.stringify(listProject));

		return "Se ha creado correctamente el proyecto";
	}

	private existNameProject(name: string, listProject: Project[]) {
		return !listProject.every(project => project.name != name);
	}

	private uuidv4() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	}
}