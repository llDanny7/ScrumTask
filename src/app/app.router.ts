import { RouterModule } from '@angular/router'
import { FormProjectComponent } from './component/form-project/form-project.component'
import { FormTaskComponent } from './component/form-task/form-task.component'
import { AppComponent } from './app.component'

export var router = RouterModule.forRoot([
	{ path: '', component: FormTaskComponent },
	{ path: 'proyectos', component: FormProjectComponent },
	{ path: 'tareas', component: FormTaskComponent },
])