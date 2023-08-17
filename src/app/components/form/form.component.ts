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
  numberCard: string = '9591 6489 6389 101E';
  nameCard: string = 'felicia leite';
  monthDateCard: number = 99;
  yearDateCard: number = 99;
  cvcCard: number = 999;

  constructor() {}

  ngOnInit(): void {}
}
