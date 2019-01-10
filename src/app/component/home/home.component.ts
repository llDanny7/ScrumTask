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
	idProject: string;
	listProject: Project[] = [];
	listTaskLow: Task[] = [];
	listTaskMedium: Task[] = [];
	listTaskHigth: Task[] = [];

	constructor(private projectService: ProjectService, private taskService: TaskService) { }

	ngOnInit() {
		this.listProject = this.projectService.getAll();
	}

	onChangeProject(idProject) {
		this.idProject = idProject;
		this.realodListTasks();
	}

	changeState(task) {
		this.taskService.updateState(task);
		this.realodListTasks();
	}

	deleteTask(idTask: string) {
		this.taskService.delete(idTask);
		this.realodListTasks();
	}

	private realodListTasks() {
		let listTask = this.taskService.getTasksByProject(this.idProject);
		this.listTaskLow = listTask.filter(task => task.state == 0);
		this.listTaskMedium = listTask.filter(task => task.state == 1);
		this.listTaskHigth = listTask.filter(task => task.state == 2);
	}
}