import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../service/project.service'
import { Project } from '../../model/project'

@Component({
	selector: 'form-task',
	templateUrl: './form-task.component.html',
	styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent implements OnInit {
	project: string;
	name: string;
	description: string;
	prioridad: string;
	listProject: Project[] = [];
	constructor(private projectService: ProjectService) { }

	ngOnInit() {
		this.listProject = this.projectService.getAll();
	}

	submit() {
		console.log(this.project)
		console.log(this.name)
		console.log(this.description)
		console.log(this.prioridad)
	}

}