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

  alertMsg = {
    nameInput: 'Please, enter a valid name',
    nameInputValueInvalid: 'Please, only letters',
    numberInput: 'Wrong format, numbers only',
    numberInputInvalid: "Cant't be blank",
    numberInputValueInvalid: 'Please, only numbers',
    monthYearInput: 'Too many numbers',
    monthYearInputInvalid: "Cant't be blank",
    cvcInput: 'Too many numbers',
    cvcInputInvalid: "Cant't be blank",
  };

  alert = {
    name: '',
    number: '',
    monthYear: '',
    cvc: '',
  };

  keyCodeNumber: number;
  msgAlertInput: boolean = false;

  fcDataCard(event: any, id: string) {
    this.keyCodeNumber = event.keyCode ? event.keyCode : event.which;

    switch (id) {
      case 'name':
        this.dataUser.name = (<HTMLInputElement>event.target).value;

        // Verificando se há somente letras no input
        if (
          (this.keyCodeNumber >= 65 && this.keyCodeNumber <= 90) ||
          this.keyCodeNumber == 186 ||
          this.keyCodeNumber == 8 ||
          this.keyCodeNumber == 13
        ) {
        } else {
          this.msgAlertInput = true;
          this.alert.name = this.alertMsg.nameInputValueInvalid;
          event.preventDefault();
        }
        this.inputValidation(this.dataUser.name, 'name');
        break;

      case 'number':
        this.dataUser.number = (<HTMLInputElement>event.target).value;

        if (
          !(
            Number(this.keyCodeNumber) >= 97 &&
            Number(this.keyCodeNumber) <= 105
          ) ||
          !(
            Number(this.keyCodeNumber) >= 48 && Number(this.keyCodeNumber) <= 57
          )
        ) {
          this.alert.number = this.alertMsg.numberInputValueInvalid;
          event.preventDefault();
        }
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
      // Verificando o número de caracteres no input
      if (value.length > 20) {
        this.msgAlertInput = true;
        this.alert.name = this.alertMsg.nameInput;
      }
      // Verificando se o input está vazio
      if (!value.length) {
        this.dataUser.name = 'name';
        this.alert.name = this.alertMsg.nameInputValueInvalid;
      }
    }

    if (id == 'number') {
      if (value.length > 16) {
        this.msgAlertInput = true;
        this.alert.number = this.alertMsg.numberInput;
      }
      if (!value.length) {
        this.dataUser.number = '0000 0000 0000 0000';
        this.alert.number = this.alertMsg.numberInputInvalid;
      }
    }

    if (id == 'month' || id == 'year') {
      if (value.length > 2) {
        this.msgAlertInput = true;
        this.alert.monthYear = this.alertMsg.monthYearInputInvalid;
        // A FAZER
      }
      if (!value.length) {
        this.dataUser.monthDate = Number('00');
        this.alert.monthYear = this.alertMsg.monthYearInput;
      }
    }

    if (id == 'cvc') {
      if (value.length > 3) {
        this.msgAlertInput = true;
        this.alert.cvc = this.alertMsg.cvcInputInvalid;
        // A FAZER
      }
      if (!value.length) {
        this.dataUser.cvc = Number('000');
        this.alert.cvc = this.alertMsg.cvcInputInvalid;
      }
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
