import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

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

    Object.assign(user, {
      name,
      email,
    });

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    const user = this.users.find((user) => user.id === id);

    return user;
  }

  findByEmail(email: string): User | undefined {
    const user = this.users.find((user) => user.email === email);

    return user;
  }

  turnAdmin(receivedUser: User): User {
    const index = this.users.findIndex((user) => user.id === receivedUser.id);

    console.log(this.users.find((user) => user.id === receivedUser.id));

    /* const userUpdated = Object.assign(receivedUser, {
      admin: true,
      create_at: new Date(),
    });

    console.log(userUpdated); */

    this.users[index].admin = true;
    this.users[index].updated_at = new Date();

    // console.log(this.users);

    return this.users[index];
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
