import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask:boolean = false;
  private subject = new Subject<any>();
  constructor() { }

  toggleAddTask() {
    console.log("hola2");
    this.showAddTask= !this.showAddTask;
    this.subject.next(this.showAddTask);
  }
  onToggle() {
    return this.subject.asObservable();

  }
}