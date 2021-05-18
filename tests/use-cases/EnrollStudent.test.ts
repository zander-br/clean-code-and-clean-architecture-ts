import EnrollStudent from '@/use-cases/EnrollStudent';

describe('EnrollStudent', () => {
  test('should not enroll without valid student name', () => {
    const enrollmentRequest = {
      student: {
        name: 'Ana',
        cpf: '832.081.519-34',
      },
    };
    const enrollStudent = new EnrollStudent();
    expect(() => enrollStudent.execute(enrollmentRequest)).toThrow(
      new Error('Invalid student name'),
    );
  });

  test('should not enroll without valid student cpf', () => {
    const enrollmentRequest = {
      student: {
        name: 'Ana Silva',
        cpf: '123.456.789-99',
      },
    };
    const enrollStudent = new EnrollStudent();
    expect(() => enrollStudent.execute(enrollmentRequest)).toThrow(
      new Error('Invalid student cpf'),
    );
  });

  test('should not enroll duplicated student', () => {
    const enrollmentRequest = {
      student: {
        name: 'Ana Silva',
        cpf: '832.081.519-34',
      },
    };
    const enrollStudent = new EnrollStudent();
    enrollStudent.execute(enrollmentRequest);
    expect(() => enrollStudent.execute(enrollmentRequest)).toThrow(
      new Error('Enrollment with duplicated student is not allowed'),
    );
  });
});
