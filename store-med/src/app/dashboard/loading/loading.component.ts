import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  @ViewChild('modalButton') modalToggle: ElementRef<HTMLElement>;

  constructor() {}

  ngOnInit(): void {}

  clickMe() {
    this.modalToggle.nativeElement.click();
  }
}
