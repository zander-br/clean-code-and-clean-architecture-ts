import EnrollStudent from '@/use-cases/enrollStudent';

describe('EnrollStudent', () => {
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
