import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../service/project.service'
import { TaskService } from '../../service/task.service'
import { Project } from '../../model/project'
import { Task } from '../../model/task'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	listProject: Project[] = [];
	listTaskLow: Task[] = [];
	listTaskMedium: Task[] = [];
	listTaskHigth: Task[] = [];

	constructor(private projectService: ProjectService, private taskService: TaskService) { }

	ngOnInit() {
		this.listProject = this.projectService.getAll();
	}

	onChangeProject(idProject) {
		let listTask = this.taskService.getTasksByProject(idProject);
		this.listTaskLow = listTask.filter(task => task.state == 0);
		this.listTaskMedium = listTask.filter(task => task.state == 1);
		this.listTaskHigth = listTask.filter(task => task.state == 2);
	}

}