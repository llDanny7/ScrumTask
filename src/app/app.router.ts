import { RouterModule } from '@angular/router'
import { FormProjectComponent } from './component/form-project/form-project.component'
import { FormTaskComponent } from './component/form-task/form-task.component'
import { HomeComponent } from './component/home/home.component'
import { AppComponent } from './app.component'

export var router = RouterModule.forRoot([
	{ path: '', component: HomeComponent },
	{ path: 'proyectos', component: FormProjectComponent },
	{ path: 'tareas', component: FormTaskComponent },
])