import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { IsNumberValidator } from 'src/app/IsNumberValidator';

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

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      number: ['', [Validators.required, Validators.maxLength(16)]],
      monthDate: ['', [Validators.required, Validators.maxLength(2)]],
      yearDate: ['', [Validators.required, Validators.maxLength(2)]],
      cvc: ['', [Validators.required, Validators.maxLength(3)]],
    });
  }

  dataUser = {
    number: '0000 0000 0000 0000',
    name: 'nome',
    monthDate: '00',
    yearDate: '00',
    cvc: '000',
  };
/*
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

  msgAlertInput: boolean = false;
  */
  // keyCodeNumber: number;

  fcDataCard(event: any, id: string) {
    // this.keyCodeNumber = event.keyCode ? event.keyCode : event.which;

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
        this.dataUser.monthDate = (<HTMLInputElement>event.target).value
        this.inputValidation(this.dataUser.monthDate.toString(), 'month');
        break;

      case 'year':
        this.dataUser.yearDate = (<HTMLInputElement>event.target).value;
        this.inputValidation(this.dataUser.yearDate.toString(), 'year');
        break;

      case 'cvc':
        this.dataUser.cvc = (<HTMLInputElement>event.target).value;
        this.inputValidation(this.dataUser.cvc.toString(), 'cvc');
        break;

      default:
        break;
    }
  }


  inputValidation(value: any, id: string) {
    if (id == 'name') {
      // Verificando se o input está vazio
      if (!value.length) {
        this.dataUser.name = 'name';
      }
    }

    if (id == 'number') {
      if (!value.length) {
        this.dataUser.number = '0000 0000 0000 0000';
      }
    }

    if (id == 'month' || id == 'year') {
      if (!value.length) {
        this.dataUser.monthDate = '00';
      }
    }

    if (id == 'cvc') {
      if (!value.length) {
        this.dataUser.cvc = '000';
      }
    }
  }
  
}
