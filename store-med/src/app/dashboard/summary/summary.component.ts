import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { InformationServiceService } from 'src/app/information-service.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SummaryComponent implements OnInit {
  text;
  entities;
  definitions;
  title = null;
  clicked = false;
  definitionHeight;
  definitionWidth;
  constructor(private informationService: InformationServiceService) {}

  ngOnInit(): void {
       this.informationService.processEntitiesAndDefinition();
       this.text = this.informationService.getProcessedString();
       this.entities = this.informationService.getTestEntities();
       this.definitions = this.informationService.getDefinitions();
       console.log(this.definitions);
       this.clicked = true;
  }

  termClicked(event) {
    this.clicked = true;

    if (event.path[0].nodeName == "P") {
      return ;
    }
    const prevTitle = this.title;
    this.title = event.srcElement.className;
    this.definitionHeight = event["offsetY"] + 15;
    this.definitionWidth = event["offsetX"] + -15;
    if ((prevTitle == this.title) || !this.clicked) {
      this.clicked = !this.clicked;
    } else {
      this.clicked = true;
    }
  }
}
