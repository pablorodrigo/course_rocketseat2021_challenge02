import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }): User {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("user not exist");
    }

    return user;
  }
}

export { ShowUserProfileUseCase };
