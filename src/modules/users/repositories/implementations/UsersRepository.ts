import { User } from "../../model/User";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private static INSTANCE: UsersRepository;
  private users: User[];

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();
    Object.assign(user, { email, name });
    this.users.push(user);
    return user;
  }

  findById(id: string): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  findByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }

  turnAdmin(receivedUser: User): User {
    const indexUser = this.users.findIndex((user) => user.id === receivedUser.id);
    if (indexUser < 0) {
      throw new Error("User not found");
    }
    this.users[indexUser].admin = true;
    this.users[indexUser].updated_at = new Date();
    return this.users[indexUser];
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
