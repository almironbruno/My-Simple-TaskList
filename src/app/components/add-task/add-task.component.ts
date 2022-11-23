import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { text } from '@fortawesome/fontawesome-svg-core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/service/ui.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask :EventEmitter<Task> =new EventEmitter(); 

  text:string = "";
  day:string = "";
  reminder:boolean = false;
  showAddTask:boolean=false;
  subscription?:Subscription;

  constructor(
    private uiservice:UiService
    ) {
    this.subscription=this.uiservice.onToggle().subscribe( value => this.showAddTask = value);
   }

  ngOnInit(): void {
  }
  onSubmit():void {
    if(this.text.length === 0)
    {
      alert("Please add a Task");
      return;
    }
    const{text,day,reminder}=this;
    const newTask = { text, day, reminder }

    this.onAddTask.emit(newTask);
  }
  
}
