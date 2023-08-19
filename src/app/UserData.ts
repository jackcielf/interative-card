export class UserData {
  constructor(
    name: string,
    cardNumber: number,
    dateMonth: number,
    dateYear: number,
    cvc: number
  ) {
    this.name = name;
    this.cardNumber = Number(cardNumber);
    this.dateMonth = Number(dateMonth);
    this.dateYear = Number(dateYear);
    this.cvc = Number(cvc);
  }

  name: string;
  cardNumber: number;
  dateMonth: number;
  dateYear: number;
  cvc: number;
}
