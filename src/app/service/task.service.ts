import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import { Task } from 'src/app/Task';
import { TASK } from 'src/app/mock-tasks';
import { Observable,of } from 'rxjs';
import { TasksComponent } from '../components/tasks/tasks.component';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl:string ="http://localhost:5000/tasks"
  constructor(
    private http:HttpClient
  ) { }
  getTask(): Observable<Task[]>
  {
    //const tasks = of(TASK);
    //return tasks;
    return this.http.get<Task[]>(this.apiUrl);
  }
}
