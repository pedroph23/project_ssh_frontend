export class CardValidateUtil {
  constructor() {}

  validate(card: any) {
    return this.flag(card) && this.numbercard(card) && this.cvv(card) && this.cep(card);
  }

  flag(card: any) {
    switch (card.flag) {
      case 'visa':
        return true;

      case 'mastercard':
        return true;

      case 'elo':
        return true;

      default:
        return false;
    }
  }

  numbercard(card: any) {

    if (!card.numbercard) {
     return false;
    }

    switch (card.flag) {

      case 'visa':
        return /^4[0-9]{12}(?:[0-9]{3})/.test(card.numbercard.replace(/\s/g, ''));

      case 'mastercard':
        return /^5[1-5][0-9]{14}/.test(card.numbercard.replace(/\s/g, ''));

      case 'elo':
        return /^((((636368)|(438935)|(504175)|(451416)|(636297))d{0,10})|((5067)|(4576)|(4011))d{0,12})$/.test(
          card.numbercard.replace(/\s/g, '')
        );

      default:
        return false;
    }
  }

  cvv(card: any) {
    return /^[0-9]{3,4}$/.test(card.cvv);
  }

  cep(card: any) {
    return /^[0-9]{2}[0-9]{3}[0-9]{3}$/.test(card.cep);
  }
}
