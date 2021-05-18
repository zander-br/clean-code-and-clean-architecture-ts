export type Student = {
  name: string;
};

export type EnrollStudentRequest = {
  student: Student;
};

export default class EnrollStudent {
  public execute(enrollStudentRequest: EnrollStudentRequest): void {
    const { student } = enrollStudentRequest;
    if (!student.name.match(/^([A-Za-z]+ )+([A-Za-z])+$/)) {
      throw new Error('Invalid student name');
    }
  }
}
