import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication-service.service';
import { FileServiceService } from 'src/app/file-service.service';

@Component({
  selector: 'app-maindashboard',
  templateUrl: './maindashboard.component.html',
  styleUrls: ['./maindashboard.component.scss'],
})
export class MaindashboardComponent implements OnInit {
  name;
  fileToUpload:File = null;
  constructor(private authService: AuthenticationService,
    private router:Router, private fileService:FileServiceService) {}

  ngOnInit(): void {
    this.name = this.authService.getName();
  }

  handleFileUpload(files:FileList) {
    this.fileToUpload = files.item(0);
    this.fileService.setFile(this.fileToUpload);
    //Then go to loading
    this.router.navigate(['/','dashboard', 'loading']);
  }

}
