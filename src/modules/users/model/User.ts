import { v4 as uuidV4 } from "uuid";

class User {
  public readonly id?: string;
  name: string;
  admin: boolean;
  email: string;
  created_at?: Date;
  updated_at?: Date;

  constructor() {
    if (!this.admin) {
      this.admin = false;
    }
    if (!this.id) {
      this.id = uuidV4();
    }
    if (!this.created_at) {
      this.created_at = new Date();
    }
    if (!this.updated_at) {
      this.updated_at = new Date();
    }
  }
}

export { User };
