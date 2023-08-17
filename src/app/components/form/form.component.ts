import { isEmptyExpression } from '@angular/compiler';
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

  dataUser = {
    number: '0000 0000 0000 0000',
    name: 'nome',
    monthDate: 12,
    yearDate: 23,
    cvc: 222,
  };

  alert = {
    nameInput: 'Please, enter a valid name',
    numberInput: 'Wrong format, numbers only',
    monthYearInput: "Cant't be blank",
    monthYearInvalid: 'Too many numbers',
    cvcInput: "Cant't be blank",
  };

  keyCodeNumber: number;
  msgAlertInput: boolean;
  msgAlertName: string;
  msgAlertNumber: string;
  msgAlertDayYear: string;
  msgAlertCvc: string;

  fcDataCard(event: any, id: string) {
    switch (id) {
      case 'name':
        this.dataUser.name = (<HTMLInputElement>event.target).value;
        this.inputValidation(this.dataUser.name, 'name');
        break;

      case 'number':
        this.dataUser.number = (<HTMLInputElement>event.target).value;
        this.inputValidation(this.dataUser.number, 'number');
        break;
      case 'month':
        this.dataUser.monthDate = Number(
          (<HTMLInputElement>event.target).value
        );
        this.inputValidation(this.dataUser.monthDate.toString(), 'month');
        break;

      case 'year':
        this.dataUser.yearDate = Number((<HTMLInputElement>event.target).value);
        this.inputValidation(this.dataUser.yearDate.toString(), 'year');
        break;

      case 'cvc':
        this.dataUser.cvc = Number((<HTMLInputElement>event.target).value);
        this.inputValidation(this.dataUser.cvc.toString(), 'cvc');
        break;

      default:
        break;
    }
  }

  inputValidation(value: any, id: string) {
    if (id == 'name') {
      if (value.length > 25) {
        this.msgAlertInput = true;
        this.msgAlertName = this.alert.nameInput;
      } else {
        this.msgAlertInput = true;
      }

      if (!value.length) {
        this.dataUser.name = 'name';
        this.msgAlertName = this.alert.nameInput;
      }
    } else if (id == 'number') {
      if (value.length > 16) {
        this.msgAlertInput = true;
        this.msgAlertName = this.alert.numberInput;
      }
      if (!value.length) {
        this.dataUser.number = '0000 0000 0000 0000';
      }
    } else if (id == 'month') {
      if (value.length > 2) {
        this.msgAlertInput = true;
        this.msgAlertDayYear = this.alert.monthYearInvalid;
        // A FAZER
      } else {
        this.msgAlertInput = true;
      }
      if (!value.length) {
        this.dataUser.monthDate = Number('00');
        this.msgAlertDayYear = this.alert.monthYearInput;
      }
    } else if (id == 'year') {
      if (value.length > 2) {
        this.msgAlertInput = true;
        this.msgAlertDayYear = this.alert.monthYearInput;
        // A FAZER
      }
      if (!value.length) {
        this.dataUser.yearDate = Number('00');
      }
    } else if (id == 'cvc') {
      if (value.length > 3) {
        this.msgAlertInput = true;
        this.msgAlertCvc = this.alert.cvcInput;
        // A FAZER
      }
      if (!value.length) {
        this.dataUser.cvc = Number('000');
      }
    }
  }

  /*
  msgAlertInput: boolean;
  numberCardValue: string = ;
  nameCardValue: string = ;
  monthDateCardValue: number = 99;
  yearDateCardValue: number = 99;
  cvcCardValue: number = 999;

  keyCodeNumber: number;

  fcNumberCard(event: any) {
    this.dataUser.number = (<HTMLInputElement>event.target).value;

    if (!this.numberCardValue) {
      this.numberCardValue = '0000 0000 0000 000E';
    }
  }

  fcNameCard(event: any) {
    this.keyCodeNumber = event.keyCode ? event.keyCode : event.which;

    if (
      (Number(this.keyCodeNumber) >= 97 && Number(this.keyCodeNumber) <= 105) ||
      (Number(this.keyCodeNumber) >= 48 && Number(this.keyCodeNumber) <= 57)
    ) {
      // event.preventDefault();
      // if (!isNaN(String.fromCharCode(event.keyCode))) return true; else return false;
    } else {
      this.nameCardValue = event.target.value;

      if (!this.nameCardValue) {
        this.nameCardValue = 'nome';
      }
    }
  }
*/
  constructor() {}

  ngOnInit(): void {}
}
