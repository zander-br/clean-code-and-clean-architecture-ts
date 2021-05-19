import Enrollment from '@/entities/enrollment/enrollment';
import { StudentData } from '@/entities/enrollment/student';

export type EnrollStudentRequest = {
  student: StudentData;
};

export default class EnrollStudent {
  private readonly enrollments: Enrollment[] = [];

  public execute(enrollStudentRequest: EnrollStudentRequest): void {
    const { student } = enrollStudentRequest;
    const enrollmentExists = this.enrollments.find(enrollment =>
      enrollment.student.cpf.isEqual(student.cpf),
    );
    if (enrollmentExists) {
      throw new Error('Enrollment with duplicated student is not allowed');
    }
    this.enrollments.push(Enrollment.create(enrollStudentRequest));
  }
}
