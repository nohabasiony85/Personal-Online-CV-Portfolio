export class Profile {

  id: number;
  email: string;
  gender: string;
  phone: string;
  firstName: string;
  lastName: string;
  WorkExperiances: WorkExperiance[];

  constructor(values: Object = {}) {
    //Constructor initialization
    Object.assign(this, values);
  }

}


export class WorkExperiance {

  company: string;
  title: string;
  expYears: number;
  roles: string;

}
