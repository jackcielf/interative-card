import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserData } from 'src/app/UserData';

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

  dataUser = {
    number: '0000 0000 0000 000',
    name: 'nome',
    monthDate: '00',
    yearDate: '00',
    cvc: '000',
  };

  alert = {
    numberInvalid: false,
    // monthYearInvalid: false,
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [
        '',
        [
          Validators.compose([Validators.required]),
          Validators.minLength(15),
          Validators.maxLength(40),
        ],
      ],
      number: [
        '',
        [
          Validators.compose([Validators.required]),
          Validators.minLength(16),
          Validators.maxLength(16),
        ],
      ],
      monthDate: [
        '',
        [
          Validators.compose([Validators.required]),
          Validators.minLength(2),
          Validators.maxLength(2),
        ],
      ],
      yearDate: [
        '',
        [
          Validators.compose([Validators.required]),
          Validators.minLength(2),
          Validators.maxLength(2),
        ],
      ],
      cvc: [
        '',
        [
          Validators.compose([Validators.required]),
          Validators.minLength(3),
          Validators.maxLength(3),
        ],
      ],
    });
  }

  // Propriedades do formulário que vamos utilizar para obter os erros
  get fnName() {
    return this.form.get('name');
  }

  get fnCardNumber() {
    return this.form.get('number');
  }

  get fnMonthDate() {
    return this.form.get('monthDate');
  }

  get fnYearDate() {
    return this.form.get('yearDate');
  }

  get fnCvc() {
    return this.form.get('cvc');
  }

  /*
  alert = {
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

  formatNumber(numberValue: string) {
    const value = numberValue.charAt(numberValue.length - 1);

    switch (value.toString()) {
      case '0':
        console.log('num 0');
        return (numberValue += '0');
        break;

      case '1':
        console.log('num 1');
        return (numberValue += '1');
        break;

      case '2':
        console.log('num 2');
        return (numberValue += '2');
        break;

      case '3':
        console.log('num 3');
        return (numberValue += '3');
        break;

      case '4':
        console.log('num 4');
        return (numberValue += '4');
        break;

      case '5':
        console.log('num 5');
        return (numberValue += '5');
        break;

      case '6':
        console.log('num 6');
        return (numberValue += '6');
        break;

      case '7':
        console.log('num 7');
        return (numberValue += '7');
        break;

      case '8':
        console.log('num 8');
        return (numberValue += '8');
        break;

      case '9':
        console.log('num 9');
        return (numberValue += '9');
        break;

      default:
        this.alert.numberInvalid = true;
        return '';
        break;
    }
    // }
    // if () {

    // }
    // console.log('nao caiu na condicao');
    // return numberValue;
  }

  fcDataCard(event: any, id: string) {
    switch (id) {
      case 'name':
        this.dataUser.name = (<HTMLInputElement>event.target).value;
        this.fieldVerify(this.dataUser.name, 'name');
        break;

      case 'number':
        this.dataUser.number = (<HTMLInputElement>event.target).value;
        this.fieldVerify(this.dataUser.number, 'number');
        break;

      case 'month':
        this.dataUser.monthDate = (<HTMLInputElement>event.target).value;
        this.fieldVerify(this.dataUser.monthDate, 'month');
        break;

      case 'year':
        this.dataUser.yearDate = (<HTMLInputElement>event.target).value;
        this.fieldVerify(this.dataUser.yearDate, 'year');
        break;

      case 'cvc':
        this.dataUser.cvc = (<HTMLInputElement>event.target).value;
        this.fieldVerify(this.dataUser.cvc, 'cvc');
        break;

      default:
        break;
    }
  }

  fieldVerify(value: any, id: string) {
    switch (id) {
      case 'name':
        !value.length ? (this.dataUser.name = 'nome') : '';
        break;

      case 'number':
        !value.length ? (this.dataUser.number = '0000 0000 0000 000') : '';
        this.alert.numberInvalid = false;
        break;

      case 'month' || 'year':
        if (!value.length) {
          this.dataUser.monthDate = '00';
          this.dataUser.yearDate = '00';
        }

        const date = new Date();
        const dateToString = date.getFullYear().toString();
        const yearCurrent = dateToString.slice(dateToString.length - 2);

        // if (
        //   Number(this.dataUser.monthDate) >= 12 ||
        //   Number(this.dataUser.yearDate) !== Number(yearCurrent)
        // ) {
        //   this.alert.monthYearInvalid = true;
        //   console.log(
        //     `${
        //       this.dataUser.monthDate
        //     }/${this.dataUser.yearDate.toString()}/${yearCurrent}`
        //   );
        // }
        break;

      case 'cvc':
        !value.length ? (this.dataUser.cvc = '000') : '';
        break;
    }
  }

  submeterForm() {
    const dataForm = this.form.value;
    // console.log('Dados: ', dataForm);

    const userData = new UserData(
      dataForm.name,
      dataForm.cardNumber,
      dataForm.dateMonth,
      dataForm.dateYear,
      dataForm.cvc
    );

    alert(
      `Os dados de ${
        userData.name
      } foram cadastrados com sucesso. \n Dados: ${JSON.stringify(userData)}`
    );

    this.form.reset();
  }

  /*
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
        this.dataUser.yearDate = '00';
      }
    }

    if (id == 'cvc') {
      if (!value.length) {
        this.dataUser.cvc = '000';
      }
    }*/
}
