import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication-service.service';

@Component({
  selector: 'app-maindashboard',
  templateUrl: './maindashboard.component.html',
  styleUrls: ['./maindashboard.component.scss'],
})
export class MaindashboardComponent implements OnInit {
  name;
  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.name = this.authService.getName();
  }

  openFileUpload() {}
}
