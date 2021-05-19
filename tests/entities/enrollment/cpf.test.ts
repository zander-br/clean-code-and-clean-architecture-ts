import Cpf from '@/entities/enrollment/cpf';

describe('CPF object value', () => {
  describe('validate', () => {
    test('should return false when cpf have equal numbers', () => {
      const cpf = '00000000000';
      expect(Cpf.validate(cpf)).toBe(false);
    });

    test('should return false when cpf is invalid', () => {
      const cpf = '86446422799';
      expect(Cpf.validate(cpf)).toBe(false);
    });
  });
});
