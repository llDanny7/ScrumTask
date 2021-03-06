import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { router } from './app.router';

import { AppComponent } from './app.component';
import { ProjectService } from './service/project.service';
import { FormProjectComponent } from './component/form-project/form-project.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FormTaskComponent } from './component/form-task/form-task.component';
import { TaskService } from './service/task.service';
import { HomeComponent } from './component/home/home.component';

@NgModule({
	imports: [BrowserModule, FormsModule, NgbModule, router],
	declarations: [AppComponent, FormProjectComponent, NavbarComponent, FormTaskComponent, HomeComponent],
	bootstrap: [AppComponent],
	providers: [ProjectService, TaskService]
})
export class AppModule { }
