import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <p>
      loading works!
    </p>
  `,
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
