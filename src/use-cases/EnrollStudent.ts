/* eslint-disable no-param-reassign */
export type Student = {
  name: string;
  cpf: string;
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

    if (!this.validateCpf(student.cpf)) throw new Error('Invalid student cpf');
  }

  private validateCpf(str: string) {
    if (str !== null && str !== undefined) {
      if (str.length >= 11 || str.length <= 14) {
        str = str.replace('.', '');
        str = str.replace('.', '');
        str = str.replace('-', '');
        str = str.replace(' ', '');
        if (!str.split('').every(c => c === str[0])) {
          try {
            let d1;
            let d2;
            let digito1;
            let digito2;
            let resto;
            let digito;
            let nDigResult;
            // eslint-disable-next-line no-multi-assign
            d1 = d2 = 0;
            // eslint-disable-next-line no-multi-assign
            digito1 = digito2 = resto = 0;

            for (let nCount = 1; nCount < str.length - 1; nCount++) {
              digito = parseInt(str.substring(nCount - 1, nCount), 10);
              d1 += (11 - nCount) * digito;
              d2 += (12 - nCount) * digito;
            }

            resto = d1 % 11;

            digito1 = resto < 2 ? (digito1 = 0) : 11 - resto;

            d2 += 2 * digito1;

            resto = d2 % 11;

            if (resto < 2) digito2 = 0;
            else digito2 = 11 - resto;

            const nDigVerific = str.substring(str.length - 2, str.length);
            // eslint-disable-next-line prefer-const
            nDigResult = `${digito1}${digito2}`;
            // eslint-disable-next-line eqeqeq
            return nDigVerific == nDigResult;
          } catch (e) {
            return false;
          }
        } else return false;
      } else return false;
    } else return false;
  }
}
