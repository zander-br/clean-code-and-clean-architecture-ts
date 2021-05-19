const FACTOR_DIGIT_1 = 10;
const FACTOR_DIGIT_2 = 11;
const MAX_DIGITS_1 = 9;
const MAX_DIGITS_2 = 10;

export default class Cpf {
  private constructor(private readonly cpf: string) {
    Object.freeze(this);
  }

  public static create(cpf: string): Cpf {
    if (!this.validate(cpf)) throw new Error('Invalid student cpf');
    const onlyDigits = this.extractDigits(cpf);
    return new Cpf(onlyDigits);
  }

  get value(): string {
    return this.cpf;
  }

  public static validate(cpf = ''): boolean {
    const cpfDigits = this.extractDigits(cpf);
    if (this.isInvalidLength(cpfDigits)) return false;
    if (this.isBlocked(cpfDigits)) return false;
    const digit1 = this.calculateDigit(cpfDigits, FACTOR_DIGIT_1, MAX_DIGITS_1);
    const digit2 = this.calculateDigit(cpfDigits, FACTOR_DIGIT_2, MAX_DIGITS_2);
    const calculateCheckDigit = `${digit1}${digit2}`;
    return this.getCheckDigit(cpfDigits) === calculateCheckDigit;
  }

  private static extractDigits(cpf: string) {
    return cpf.replace(/\D/g, '');
  }

  private static isInvalidLength(cpf: string) {
    return cpf.length !== 11;
  }

  private static isBlocked(cpf: string) {
    const [firstDigit] = cpf;
    return cpf.split('').every(digit => digit === firstDigit);
  }

  private static calculateDigit(cpf: string, factor: number, max: number) {
    let calculateFactor = factor;
    let total = 0;
    for (const digit of this.toDigitArray(cpf).slice(0, max)) {
      total += digit * calculateFactor--;
    }
    return total % 11 < 2 ? 0 : 11 - (total % 11);
  }

  private static toDigitArray(cpf: string) {
    return [...cpf].map(digit => parseInt(digit, 10));
  }

  private static getCheckDigit(cpf: string) {
    return cpf.slice(9);
  }
}
