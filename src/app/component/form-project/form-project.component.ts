import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../service/project.service'
import { Project } from '../../model/project'

@Component({
	selector: 'form-project',
	templateUrl: './form-project.component.html',
	styleUrls: ['./form-project.component.css']
})
export class FormProjectComponent implements OnInit {
	name: string;
	constructor(private projectService: ProjectService) { }

	ngOnInit() {
	}

	submit() {
		if (this.name != "") {
			let project = {} as Project
			project.name = this.name
			alert(this.projectService.add(project));
		}
	}
}