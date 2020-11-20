import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  @Input() tasks;
  @Output() changeTaskStatus = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  updateStatus($event) {
    this.changeTaskStatus.next($event.source)
  }
}
