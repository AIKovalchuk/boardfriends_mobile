export default interface IUserCreate {
  email: string;
  firstName: string;
  lastName: string;
  cityId: number;
  about?: string;
  password: string;
}
