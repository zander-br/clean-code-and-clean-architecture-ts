import EnrollStudent from '@/use-cases/EnrollStudent';

describe('EnrollStudent', () => {
  test('should not enroll without valid student name', () => {
    const enrollmentRequest = {
      student: {
        name: 'Ana',
      },
    };

    const enrollStudent = new EnrollStudent();
    expect(() => enrollStudent.execute(enrollmentRequest)).toThrow(
      new Error('Invalid student name'),
    );
  });
});
