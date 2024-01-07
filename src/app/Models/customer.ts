export class Customer {
    constructor(
    public id?: number,
    public name?: string,
    public email?: string,
    public createdDate?: Date,
    public updatedDate?: Date
  ) {}
}

export class UpdateCustomer {
  constructor(
    public id?: number,
    public name?: string,
    public email?: string,
    public updatedDate?: Date
  ) {}
}

export class NewCustomer {
  constructor(
    public name?: string,
    public email?: string,
    public createdDate?: Date
  ) {}
}