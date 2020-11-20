import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  @Output() updateTasks = new EventEmitter();
  todoForm = this.fb.group({
    description: ['', Validators.required],
    priority: ['', Validators.required],
    due: ['', Validators.required] 
  })

  minDate: Date;

  constructor(private fb: FormBuilder) { 
    this.minDate = new Date();
    console.log(this.todoForm)
  }

  ngOnInit(): void {
  
  }

  addTodo(formDirective) {
    let taskId = uuidv4();
    let singleTask = this.todoForm.value;
    //add key and status
    singleTask.taskId = taskId;
    singleTask.done = false;
    this.updateTasks.next(singleTask);
    this.todoForm.reset();
    //Set errors of each individual control in the todoForm back to null
    formDirective.resetForm();
  }
}
