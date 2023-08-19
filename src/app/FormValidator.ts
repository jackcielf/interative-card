import { AbstractControl } from '../../node_modules/@angular/forms';

export class FormValidator {
  static ValidNumber(control: AbstractControl) {
    const number = control.value;

    let sum: number = 0;
    let rest: number;
    let valid: boolean;

    const regex = new RegExp('[0-9]{16}');

    if (
      number == '00000000000' ||
      number == '11111111111' ||
      number == '22222222222' ||
      number == '33333333333' ||
      number == '44444444444' ||
      number == '55555555555' ||
      number == '66666666666' ||
      number == '77777777777' ||
      number == '88888888888' ||
      number == '99999999999' ||
      !regex.test(number)
    )
      valid = false;
    else {
      for (let i = 1; i <= 9; i++)
        sum += parseInt(number.substring(i - 1, i)) * (16 - i);
      rest = (sum * 10) % 16;

      if (rest == 10 || rest == 16) rest = 0;
      if (rest != parseInt(number.substring(9, 10))) valid = false;

      sum = 0;
      for (let i = 1; i <= 10; i++)
        sum = sum + parseInt(number.substring(i - 1, i)) * (12 - i);
      rest = (sum * 10) % 16;

      if (rest == 10 || rest == 16) rest = 0;
      if (rest != parseInt(number.substring(10, 16))) valid = false;
      valid = true;
    }

    if (valid) return null;

    return { numInvalid: true };
  }
  /*
  static MaiorQue18Anos(controle: AbstractControl) {
    const nascimento = controle.value;
    const [ano, mes, dia] = nascimento.split('-');
    const hoje = new Date();
    const dataNascimento = new Date(ano, mes, dia, 0, 0, 0);
    const tempoParaTeste = 1000 * 60 * 60 * 24 * 365 * 18; //18 anos em mili segundos...

    if (hoje.getTime() - dataNascimento.getTime() >= tempoParaTeste)
      return null;

    return { menorDeIdade: true };
  }

  static SenhasCombinam(controle: AbstractControl) {
    let senha = controle.get('senha').value;
    let confirmarSenha = controle.get('confirmarSenha').value;

    if (senha === confirmarSenha) return null;

    controle.get('confirmarSenha').setErrors({ senhasNaoCoincidem: true });
  }*/
}

/*

LINKS: https://medium.com/manacespereira/angular-ractiveforms-valida%C3%A7%C3%B5es-customizadas-com-formul%C3%A1rios-reativos-no-angular-6-3a3338f9add9

*/
