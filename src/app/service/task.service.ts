import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Task } from 'src/app/Task';
import { TASK } from 'src/app/mock-tasks';
import { Observable,of } from 'rxjs';
import { TasksComponent } from '../components/tasks/tasks.component';

const httpOption = {
  //Informs BackEnd that it will receive a json
  headers: new HttpHeaders({'Content-Type':'application/json'})
}

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
  deleteTask(task:Task): Observable<Task> {
    const url:string= `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
  updateTaskReminder(task:Task):Observable<Task> { 
    const url:string= `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url,task,httpOption);
  }
  addTask(task:Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOption);

  }

}
