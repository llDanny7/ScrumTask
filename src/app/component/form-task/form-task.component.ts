import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../service/project.service'
import { TaskService } from '../../service/task.service'
import { Project } from '../../model/project'
import { Task } from '../../model/task'

@Component({
	selector: 'form-task',
	templateUrl: './form-task.component.html',
	styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent implements OnInit {
	task: Task = {};
	staticAlertClosed: bool = true;
	messageResultAdd: string = "";
	// project: string;
	// name: string;
	// description: string;
	// prioridad: string;
	listProject: Project[] = [];
	constructor(private projectService: ProjectService, private taskService: TaskService) { }

	ngOnInit() {
		this.listProject = this.projectService.getAll();
	}

	submit() {
		this.staticAlertClosed = false;
		this.messageResultAdd = this.taskService.add(this.task);
		this.task = {} as Task;
	}

}