import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { AuthService } from 'src/app/services/auth.service';
import { MedalsService } from 'src/app/services/medals.service';


@Component({
  selector: 'app-achivements',
  templateUrl: './achivements.page.html',
  styleUrls: ['./achivements.page.scss'],
})


export class AchivementsPage implements OnInit {
  user: any;
  medals: any;
  taskUpdated: any;

  constructor(
    public _loadingService: LoadingService,
    public _authService: AuthService,
    public medalsService: MedalsService,
  ) { }

  ngOnInit() {
    this.user = this._authService.getUserPersonalInfo();
    this.getMedals();
  }
  
  getMedals(){
    this.medalsService.getUserMedals(this.user.username).subscribe(data => {
      this.medals = data;
    });
  }

}
