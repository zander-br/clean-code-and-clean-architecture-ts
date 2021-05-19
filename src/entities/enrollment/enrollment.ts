import Student, { StudentData } from './student';

export type EnrollmentData = {
  student: StudentData;
};

export default class Enrollment {
  private constructor(readonly student: Student) {}

  public static create(enrollmentData: EnrollmentData): Enrollment {
    const student = Student.create(enrollmentData.student);
    return new Enrollment(student);
  }
}
