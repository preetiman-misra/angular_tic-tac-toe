import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton status="primary" *ngIf="!value"> {{ value }} </button>
    <button nbButton hero status="success" *ngIf="value == 'X'"> {{ value }} </button>
    <button nbButton hero status="info" *ngIf="value == 'O'"> {{ value }} </button>
  `,
  styles: [
    'button {width: 100%; height: 100%; font-size: 5em !important;}',
    '@media screen and (max-width: 768px) { button { font-size: 3rem !important; } }'
  ]
})
export class SquareComponent {

  @Input() value : 'X' | 'O';

}
