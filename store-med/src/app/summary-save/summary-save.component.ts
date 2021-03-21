import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InformationServiceService } from '../information-service.service';

@Component({
  selector: 'app-summary-save',
  templateUrl: './summary-save.component.html',
  styleUrls: ['./summary-save.component.scss']
})
export class SummarySaveComponent implements OnInit {
  text;
  entities;
  definitions;
  title = null;
  clicked = false;
  definitionHeight;
  definitionWidth;
  constructor(private informationService:InformationServiceService,
    private router:Router) { }

  ngOnInit(): void {
    this.informationService.processEntitiesAndDefinition();
    this.text = this.informationService.getProcessedString();
    this.entities = this.informationService.getTestEntities();
    this.definitions = this.informationService.getDefinitions();
  }


  termClicked(event) {
    console.log(event);
    if (event.path[0].nodeName == "P") {
      return ;
    }
    const prevTitle = this.title;
    this.title = event.srcElement.className;
    this.definitionHeight = event["offsetY"] + 15;
    console.log(this.definitionHeight);
    this.definitionWidth = event["offsetX"] + -15;
    if ((prevTitle == this.title) || !this.clicked) {
      this.clicked = !this.clicked;
    } else {
      this.clicked = true;
    }
  }

  route() {
    this.router.navigate(['/', 'dashboard']);
  }

}
