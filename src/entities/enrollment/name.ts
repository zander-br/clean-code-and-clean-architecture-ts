export default class Name {
  private constructor(private readonly name: string) {
    Object.freeze(this);
  }

  static create(name: string): Name {
    if (!this.validate(name)) throw new Error('Invalid student name');
    return new Name(name);
  }

  static validate(name: string): boolean {
    return !!name.match(/^([A-Za-z]+ )+([A-Za-z])+$/);
  }
}
