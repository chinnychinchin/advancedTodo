import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    console.log('I am initialised')
    const propertyNamesArray = Object.getOwnPropertyNames(localStorage); //returns an array with each element a property name
    propertyNamesArray.map(property => { this.tasks.push(JSON.parse(localStorage.getItem(property))) }) 

  }

  title = 'advancedTodo';

  tasks = [];

  updateTasks($event) {
    this.tasks.push($event);
    localStorage.setItem($event.taskId,JSON.stringify($event));
  }

  changeTaskStatus($event){
    const index = this.tasks.findIndex(task => task.taskId == $event.id);
    this.tasks[index].done = $event.checked;
    localStorage.setItem($event.id,JSON.stringify(this.tasks[index]))
  }

}
