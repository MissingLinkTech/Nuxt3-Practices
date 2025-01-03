export interface ILoginInput {
  username: string;
  password: string;
}

export interface ILoginResponse {
  id: number | null;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}
