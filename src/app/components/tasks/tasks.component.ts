import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskService } from 'src/app/service/task.service'; 
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[]=[];
  constructor(private taskService: TaskService) {
    
   }

  ngOnInit(): void {
    //Like promise
    this.taskService.getTask().subscribe((tasks) => {this.tasks = tasks});
  }
  deleteTask(task:Task):void {

    this.taskService.deleteTask(task).subscribe((tasks) => 
    {
      this.tasks = this.tasks.filter(t => t.id !== task.id)
    })

  }

  toggleReminder(task:Task):void {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task:Task) {
    return this.taskService.addTask(task).subscribe((task) => 
      {this.tasks.push(task)});
 
  }



}
