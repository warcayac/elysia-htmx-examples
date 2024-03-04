export type TContact = {
  firstName: string;
  lastName: string;
  email: string;
};

export type TUser = {
  id: number;
  name: string;
  email: string;
  active: boolean;
};

export type TUser2 = {
  id : number;
  first_name : string;
  last_name : string;
  email : string;
};

export type TMake = {
  name: string, 
  models: string[],
};

export type TMakeMap = Record<string, TMake>;

