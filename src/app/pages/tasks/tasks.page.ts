import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TasksService } from 'src/app/services/taks.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {
  user: any;
  tasks: any;
  taskUpdated: any;
  challenges: [];

  constructor(
    public _loadingService: LoadingService,
    public _authService: AuthService,
    public TaskService: TasksService,
  ) { }

  ngOnInit() {
    this.user = this._authService.getUserPersonalInfo();
    this.getTasks();
    this.getChallenges();
  }

  getTasks() {
    this.TaskService.getUserTasks(this.user.username).subscribe(data => {
      this.tasks = data;
    });
  }

  getChallenges() {
    this.TaskService.getUserChallenges(this.user.username).subscribe(data => {
      this.challenges = data;
    });
  }

  setTaskChecked(task) {
    this.taskUpdated = { id_task: task._id, check: true};
    this._loadingService.showLoader('Actualizando huella de carbono..');
    this.TaskService.updateTask(this.taskUpdated, this.user.username).subscribe(data => {
      this.TaskService.getUserTasks(this.user.username).subscribe(data2 => {
        this._loadingService.hideLoader();
        this.tasks = data2;
      });
    });
  }

  setTaskFalse(task) {
    this.taskUpdated = {id_task: task._id, check: false};
    this._loadingService.showLoader('Actualizando huella de carbono..');
    this.TaskService.updateTask(this.taskUpdated, this.user.username).subscribe(data => {
      this.TaskService.getUserTasks(this.user.username).subscribe(data2 => {
        this._loadingService.hideLoader();
        this.tasks = data2;
      });
    });
  }

}
