import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASK } from 'src/app/mock-tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  @Input() task:Task = TASK[0];
  fatimes=faTimes;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(task:Task):void {
    this.onDeleteTask.emit(task);
  }
  onToggle(task:Task):void {
    this.onToggleReminder.emit(task);
  }

}
