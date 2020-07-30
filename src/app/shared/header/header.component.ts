import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() titleHeader:string;

  constructor() { }

  ngOnInit() {
  }

}
