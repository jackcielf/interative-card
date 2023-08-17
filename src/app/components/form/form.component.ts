import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  bgLeft: string = '../../../assets/images/bg-main-desktop.png';
  cardFront: string = '../../../assets/images/bg-card-front.png';
  cardBack: string = '../../../assets/images/bg-card-back.png';
  cardLogo: string = '../../../assets/images/card-logo.svg';

  msgAlertInput: boolean;
  numberCardValue: string;
  nameCardValue: string = 'felicia leite';
  monthDateCardValue: number = 99;
  yearDateCardValue: number = 99;
  cvcCardValue: number = 999;

  fcNumberCard(event: any) {
    this.numberCardValue = (<HTMLInputElement>event.target).value;

    if (!this.numberCardValue) {
      this.numberCardValue = '0000 0000 0000 000E';
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
