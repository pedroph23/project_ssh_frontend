export class Card {
    constructor (
        public flag?: string,
        public cardholder?: string,
        public numbercard?: string,
        public validity?: string,
        public cvv?: string,
        public address?: string,
        public state?: string,
        public city?: string,
        public cep?: string,
        public country?: string,
        public fk_tb_person?: number
    ) {}
}
