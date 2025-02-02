export class User {
  public getUsername = () => {
    return process.env.USER;
  }
}
