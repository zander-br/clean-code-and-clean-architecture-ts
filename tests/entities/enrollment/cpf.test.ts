import Cpf from '@/entities/enrollment/cpf';

describe('CPF object value', () => {
  test('should return false when call validate with CPF empty', () => {
    expect(Cpf.validate('')).toBe(false);
  });

  test('should return false when call validate with CPF have equal numbers', () => {
    const cpf = '00000000000';
    expect(Cpf.validate(cpf)).toBe(false);
  });

  test('should return false when call validate with CPF is invalid', () => {
    const cpf = '86446422799';
    expect(Cpf.validate(cpf)).toBe(false);
  });

  test('should return true when call validate with CPF is valid', () => {
    expect(Cpf.validate('86446422784')).toBe(true);
    expect(Cpf.validate('864.464.227-84')).toBe(true);
  });

  test('should throw error when invalid student CPF', () => {
    const cpf = '123.456.789-99';
    expect(() => Cpf.create(cpf)).toThrow(new Error('Invalid student cpf'));
  });

  test('should create CPF object value with valid CPF', () => {
    const cpf = Cpf.create('832.081.519-34');
    expect(cpf.value).toEqual('83208151934');
  });
});
