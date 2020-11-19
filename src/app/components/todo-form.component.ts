import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todoForm = this.fb.group({
    description: [''],
    priority: [''],
    due: [''] 
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  addTodo() {
    console.log("todo submitted")
  }
}
