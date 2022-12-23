class superHeros {
  private _id: number;
  private _nom: string;
  private _pouvoir: string;
  private _age: number;
  private _email: string;
  constructor(
    id: number,
    nom: string,
    pouvoir: string,
    age: number,
    email: string
  ) {
    this._id = id;
    this._nom = nom;
    this._pouvoir = pouvoir;
    this._age = age;
    this._email = email;
  }

  get id(): number {
    return this._id;
  }
  get nom(): string {
    return this._nom;
  }
  get pouvoir(): string {
    return this._pouvoir;
  }
  get age(): number {
    return this._age;
  }
  get email(): string {
    return this._email;
  }

  set id(id: number) {
    this._id = id;
  }
  set nom(nom: string) {
    this._nom = nom;
  }
  set pouvoir(pouvoir: string) {
    this._pouvoir = pouvoir;
  }
  set age(age: number) {
    this._age = age;
  }
  set email(email: string) {
    this._email = email;
  }
}
