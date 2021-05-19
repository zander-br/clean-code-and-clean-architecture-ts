import Cpf from '@/entities/enrollment/cpf';

describe('CPF object value', () => {
  describe('validate', () => {
    test('should return false when CPF have equal numbers', () => {
      const cpf = '00000000000';
      expect(Cpf.validate(cpf)).toBe(false);
    });

    test('should return false when CPF is invalid', () => {
      const cpf = '86446422799';
      expect(Cpf.validate(cpf)).toBe(false);
    });

    test('should return true when CPF is valid', () => {
      expect(Cpf.validate('86446422784')).toBe(true);
      expect(Cpf.validate('864.464.227-84')).toBe(true);
    });
  });
});
