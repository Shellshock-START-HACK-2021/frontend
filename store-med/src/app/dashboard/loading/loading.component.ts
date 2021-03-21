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
  progressBarValue = '0';
  pathPrefix = '../../../assets/';
  paths = ['Process1Off.svg', 'Process2Off.svg', 'Process3Off.svg'];
  showLock = false;
  constructor(
    private fileService: FileServiceService,
    private router: Router,
    private informationService: InformationServiceService
  ) {}



  ngOnInit(): void {
    //Send File and update progress bar.
    this.progressBarValue = '30';
    this.paths[0] = 'Process1.svg';
    //Wait for server to send back analysis.
    this.paths[1] = 'Process2.svg';
    this.progressBarValue = '60';
    // Finalize information.
    this.paths[2] = 'Process3.svg';
    this.progressBarValue = '100';
    this.showLock = true;
  }

  navigate() {
    this.router.navigate(['/', 'dashboard', 'summary']);
  }


  ngOnDestroy() {}

  uploadFile() {

  }
}
