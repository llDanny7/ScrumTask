import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProjectService } from './service/project.service';
import { FormProjectComponent } from './component/form-project/form-project.component';

@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [AppComponent, FormProjectComponent],
	bootstrap: [AppComponent],
	providers: [ProjectService]
})
export class AppModule { }
