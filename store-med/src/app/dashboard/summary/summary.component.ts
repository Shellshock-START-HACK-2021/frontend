import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private informationService: InformationServiceService,
    private router: Router) {}

  ngOnInit(): void {
       this.informationService.processEntitiesAndDefinition();
       this.text = this.informationService.getProcessedString();
       this.entities = this.informationService.getTestEntities();
       this.definitions = this.informationService.getDefinitions();
  }

  toLoading() {
    this.router.navigateByUrl('/dashboard/loading');
  }

  toDashboard() {
    this.router.navigate(['/', 'dashboard']);
  }

  termClicked(event) {
    if (event.path[0].nodeName == "P") {
      return ;
    }
    const prevTitle = this.title;
    this.title = event.srcElement.className;
    this.definitionHeight = event["offsetY"] + 15;
    this.definitionWidth = event['offsetX'] - 15;
    if ((prevTitle == this.title) || !this.clicked) {
      this.clicked = !this.clicked;
    } else {
      this.clicked = true;
    }
  }
}
