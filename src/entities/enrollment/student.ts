import Cpf from './cpf';
import Name from './name';

export type StudentData = {
  name: string;
  cpf: string;
};

export default class Student {
  private constructor(readonly name: Name, readonly cpf: Cpf) {}

  public static create(studentData: StudentData): Student {
    const name = Name.create(studentData.name);
    const cpf = Cpf.create(studentData.cpf);
    return new Student(name, cpf);
  }
}
