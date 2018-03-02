export interface IEmployee {
  Id: number;
  Title: string;
}

export class Employee implements IEmployee {
  Id: number;
  Title: string;

  constructor(obj?: IEmployee) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
