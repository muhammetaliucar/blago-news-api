import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async validateUser(input) {
    let token = null;

    const result = await this.prisma.user.findUnique({
      where: { email: input.email },
    });
    if (result) {
      token = this.login(input);
      if (result.password === input.password) {
        return token;
      }
      return { message: "failed" };
    } else {
      return { message: "failed" };
    }
  }

  async login(input) {
    const payload = {
      email: input.email,
      name: input.name,
      surname: input.surname,
      createdAt: input.createdAt,
    };

    return {
      token: this.jwtService.sign(payload),
    };
  }
}
