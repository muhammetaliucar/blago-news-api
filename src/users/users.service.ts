import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { UserList } from "./dto/users";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getAllUsers(): Promise<Array<UserList>> {
    return this.prisma.user.findMany();
  }

  async login(input: { mail: string; password: string }) {
    console.log(input);
    const result = await this.prisma.user.findFirst({
      where: { AND: [{ email: input.mail }, { password: input.password }] },
    });
    if (result) {
      return { message: "200", payload: { result } };
    } else {
      return "yok";
    }
  }

  async changeAvatar(input: { id: number; data: number }) {
    console.log(input);
    return await this.prisma.user.update({
      where: { id: input.id },
      data: { avatarNumber: input.data },
    });
  }
}
