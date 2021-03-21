import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FileServiceService } from 'src/app/file-service.service';
import { Router } from '@angular/router';
import { InformationServiceService } from 'src/app/information-service.service';
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit, OnDestroy {

  progressBarValue = "0"
  pathPrefix = "../../../assets/"
  paths = ["Process1Off.svg", "Process2Off.svg", "Process3Off.svg"];
  constructor(private fileService:FileServiceService,
    private router:Router, private informationService:InformationServiceService) {}

  ngOnInit(): void {
    //Send File and update progress bar.
    this.progressBarValue = "30";
    this.paths[0] = "Process1.svg";
    for (let i = 30; i < 40; i++){
      this.progressBarValue = i.toString();
    }
    //Once I get the information add to the information service
    //and navgiate to summary.
    this.router.navigate(["/", "dashboard", "summary"]);
  }

  ngOnDestroy() {

  }




  uploadFile() {
    //Once we send the file, update progress bar to 30%.
    //
  }
}
