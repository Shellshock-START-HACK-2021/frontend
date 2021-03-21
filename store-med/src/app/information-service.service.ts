import { isEmptyExpression } from '@angular/compiler';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class InformationServiceService {
  entities;
  test_OCR = [
    'MG US Breast Limited RIGHT [159665159] (continued]',
    'IMPRESSION:',
    'Area in the right breast is probably benign. Targeted area of the right breast',
    'demonstrates probably benign findings consistent with probable complicated',
    'cysts/ fibrocystic changes.',
    'In retrospect the areas of enhancement to the medial right breast do not appear',
    'to stand out significantly from scattered foci of enhancement seen bilaterally',
    "and are most likely consistent with the patient's background parenchymal",
    'enhancement given sonographic findings. The patient was given the option to',
    'have MRI guided biopsy of the previously noted two areas of non-mass enhancement',
    'in the right breast at 2:00-3:00 region. However, she preferred to have a 6',
    'month followup contrast-enhanced breast MRI,',
    'Although the focal asymmetry identified on the mammogram from 9/30/16 does not',
    'significantly enhance or have other suspicious features, a 6 month followup',
    'diagnostic right breast mammogram including CC. MLO and spot compression views',
    'with tomosynthesis remain recommended.',
    "The patient's surgeon Dr. Kesmodel was e-mailed these findings at the time of",
    'dictation.',
    '2nd Look US',
    'A unilateral diagnostic mammogram is recommended in 6 months.',
    'Follow up MRI is recommended in 6 months',
    'The results and recommendation were discussed with the patient and they were',
    'provided a written summary.',
    'BI-RADS ASSESSMENT:',
    'BI-RADS Code 3: Probably Benign Finding.',
    'Initial short term follow-up imaging recommended at interval designated above.',
  ];

  test_entities = [
    { id: '0', entities: [] },
    {
      id: '2',
      entities: [
        {
          entity_text: 'benign',
          entity_type: 'SYMPTOM_OR_SIGN',
          definitions: [
            'gentle and kindly',
            '(of a disease) not harmful in effect',
          ],
          entity_offset: 37,
          entity_length: 6,
          id: '2',
        },
      ],
    },
    {
      id: '3',
      entities: [
        {
          entity_text: 'benign',
          entity_type: 'SYMPTOM_OR_SIGN',
          definitions: [
            'gentle and kindly',
            '(of a disease) not harmful in effect',
          ],
          entity_offset: 22,
          entity_length: 6,
          id: '0',
        },
      ],
    },
    {
      id: '4',
      entities: [
        {
          entity_text: 'cysts/',
          entity_type: 'SYMPTOM_OR_SIGN',
          definitions: [
            'a thin-walled hollow organ or cavity in an animal or plant, containing a liquid secretion; a sac, vesicle, or bladder.',
            'a membranous sac or cavity of abnormal character in the body, containing fluid.',
            'a tough protective capsule enclosing the larva of a parasitic worm or the resting stage of an organism.',
          ],
          entity_offset: 0,
          entity_length: 6,
          id: '0',
        },
        {
          entity_text: 'fibrocystic changes',
          entity_type: 'SYMPTOM_OR_SIGN',
          definitions: {},
          entity_offset: 7,
          entity_length: 19,
          id: '1',
        },
      ],
    },
    {
      id: '5',
      entities: [
        {
          entity_text: 'enhancement',
          entity_type: 'SYMPTOM_OR_SIGN',
          definitions: [
            'an increase or improvement in quality, value, or extent',
          ],
          entity_offset: 27,
          entity_length: 11,
          id: '0',
        },
      ],
    },
    {
      id: '6',
      entities: [
        {
          entity_text: 'foci of enhancement',
          entity_type: 'SYMPTOM_OR_SIGN',
          definitions: {},
          entity_offset: 42,
          entity_length: 19,
          id: '1',
        },
      ],
    },
    {
      id: '7',
      entities: [
        {
          entity_text: 'parenchymal',
          entity_type: 'SYMPTOM_OR_SIGN',
          definitions: [
            'relating to or affecting the functional tissue of an organ',
          ],
          entity_offset: 61,
          entity_length: 11,
          id: '0',
        },
      ],
    },
    { id: '8', entities: [] },
    {
      id: '9',
      entities: [
        {
          entity_text: 'non-mass enhancement',
          entity_type: 'SYMPTOM_OR_SIGN',
          definitions: {},
          entity_offset: 60,
          entity_length: 20,
          id: '1',
        },
      ],
    },
    { id: '10', entities: [] },
    { id: '11', entities: [] },
    {
      id: '12',
      entities: [
        {
          entity_text: 'focal asymmetry',
          entity_type: 'SYMPTOM_OR_SIGN',
          definitions: {},
          entity_offset: 13,
          entity_length: 15,
          id: '0',
        },
      ],
    },
    { id: '13', entities: [] },
    { id: '14', entities: [] },
    { id: '15', entities: [] },
    { id: '18', entities: [] },
    { id: '19', entities: [] },
    { id: '20', entities: [] },
    { id: '23', entities: [] },
    { id: '24', entities: [] },
    { id: '25', entities: [] },
  ];

  definitions = {};

  processedText;
  text_array = [];

  processEntitiesAndDefinition() {
    for (let i = 0; i < this.test_entities.length; i++) {
      let entity_array = this.test_entities[i]['entities'];
      if (entity_array.length == 0) {
        this.text_array[i] = this.test_OCR[i];
        continue;
      }
      let id = parseInt(this.test_entities[i]['id']);
      let text = this.test_OCR[id];
      const isEmpty = (object) => {
        for (let key in object) {
          if (object.hasOwnProperty(key)) {
            return false;
          }
        }
        return true;
      };
      let entityText = entity_array[0]['entity_text'];
      if (isEmpty(entity_array[0].definitions)) {
        this.definitions[entityText] = [
          'Unable to find definition for that word at this time.',
        ];
      } else {
        this.definitions[entityText] = entity_array[0].definitions;
      }
      let offset = entity_array[0]['entity_offset'];
      let length = entity_array[0]['entity_length'] + offset;
      let new_text =
        text.slice(0, offset) +
        `<a class="${entityText}">` +
        text.slice(offset, length) +
        '</a>';
      for (let j = 1; j < entity_array.length; j++) {
        let temp = entity_array[j]['entity_offset'];
        let adjacent_offset = entity_array[j]['entity_offset'];
        let adjacent_length =
          entity_array[j]['entity_length'] + adjacent_offset;
        let entityText = entity_array[j]['entity_text'];
        new_text =
          new_text +
          `<a class="${entityText}">` +
          text.slice(adjacent_offset, adjacent_length) +
          '</a>';

        if (isEmpty(entity_array[j].definitions)) {
          this.definitions[entityText] = [
            'Unable to find definition for that word at this time.',
          ];
        } else {
          this.definitions[entityText] = entity_array[j].definitions;
        }
        if (j == entity_array.length - 1) {
          new_text = new_text + text.slice(adjacent_length, text.length);
        }
      }
      this.text_array.push(new_text);
    }
    console.log(this.definitions);
  }

  getProcessedString() {
    let processed = this.text_array[0] + '<br>';
    for (let i = 1; i < this.text_array.length; i++) {
      processed = processed + ' ' + this.text_array[i];
    }
    return processed;
  }

  constructor() {}

  setEntities(entities) {
    this.entities = entities;
  }

  getTestEntities() {
    return this.test_entities;
  }

  getDefinitions() {
    return this.definitions;
  }

  getTestOCR() {
    return this.text_array;
  }

  getEntities() {
    return this.entities;
  }
}
