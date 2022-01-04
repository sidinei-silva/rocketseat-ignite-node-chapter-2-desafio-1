import { AppError } from "../../../../shared/errors/AppError";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const checkUsersAlready = this.usersRepository.findByEmail(email);
    if (checkUsersAlready) {
      throw new AppError("User already exists", 400);
    }
    return this.usersRepository.create({ email, name });
  }
}

export { CreateUserUseCase };
