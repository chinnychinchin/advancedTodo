import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todoForm = this.fb.group({
    description: ['', Validators.required],
    priority: ['', Validators.required],
    due: ['', Validators.required] 
  })

  todoArray: FormArray = this.fb.array([
    
  ])

  todos;

  minDate: Date;

  constructor(private fb: FormBuilder) { 
    this.minDate = new Date();
    console.log(this.todoForm)
    this.todos = [];
  }

  ngOnInit(): void {
  }

  addTodo() {
    console.log(this.todoForm.value)
    this.todos.push(this.todoForm.value)
    this.todoForm.reset();
    this.todoArray.push(this.fb.control(''))
    
  }
}
