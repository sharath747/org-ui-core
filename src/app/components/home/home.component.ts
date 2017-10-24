import { Component, OnInit, NgModule } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@NgModule({
  imports: [ButtonsModule.forRoot()]
})

export class HomeComponent implements OnInit {
  public singleModel: string = '1';
  constructor() { }

  ngOnInit() {
  }

}
