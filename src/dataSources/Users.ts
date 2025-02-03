export interface UserModel {
  id: number;
  name: string;
}

const users: UserModel[] = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Jane",
  },
];

export class UsersService {
  public getUsers(): UserModel[] {
    return users;
  }

  public getUserById(id: number): UserModel | undefined {
    return users.find((user) => user.id === id);
  }
}
