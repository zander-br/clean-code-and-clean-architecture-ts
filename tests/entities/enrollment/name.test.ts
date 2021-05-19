import Name from '@/entities/enrollment/name';

describe('Name object value', () => {
  test('should throw error when invalid student name', () => {
    const name = 'Ana';
    expect(() => Name.create(name)).toThrow(new Error('Invalid student name'));
  });

  test('should create name object value with valid name', () => {
    const name = Name.create('Ana Silva');
    expect(name.value).toEqual('Ana Silva');
  });
});
