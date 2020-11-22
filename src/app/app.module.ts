import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoFormComponent } from './components/todo-form.component';
import { MaterialModule } from './modules/material.module'
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { TasksComponent } from './components/tasks.component';
import { FlexLayoutModule } from '@angular/flex-layout';





@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatMomentDateModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
