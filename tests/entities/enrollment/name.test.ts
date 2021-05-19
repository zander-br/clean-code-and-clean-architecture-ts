import Name from '@/entities/enrollment/name';

describe('Name object value', () => {
  test('should throw error when invalid student name', () => {
    const name = 'Ana';
    expect(() => Name.create(name)).toThrow(new Error('Invalid student name'));
  });
});
