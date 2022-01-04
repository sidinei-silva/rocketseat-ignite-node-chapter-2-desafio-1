import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

interface IParams {
  user_id: string;
}

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    const user = this.showUserProfileUseCase.execute(<IParams>{ user_id });
    return response.status(200).json(user);
  }
}

export { ShowUserProfileController };
