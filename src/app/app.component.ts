import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'advancedTodo';

  tasks = [];

  updateTasks($event) {
    this.tasks.push($event);
    
  }

  changeTaskStatus($event){
    const index = this.tasks.findIndex(task => task.taskId == $event.id);
    this.tasks[index].done = $event.checked;
  }

}
