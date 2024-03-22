import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TasksService {
  private tasks: any

  constructor(
    private httpClient: HttpClient
  ) {
    this.httpClient.get('http://localhost:3000/tasks').subscribe((tasks) => {
      return this.tasks = tasks;
    })
  }

  public getTasks(){
    return this.tasks;
  }

  public addNewTask(newTasks: object) {
    return this.httpClient.post('http://localhost:3000/tasks', newTasks)
    .subscribe((res) => {
      console.log(res);
    });
  }
}
