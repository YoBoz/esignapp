import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SignatureServiceBase } from "./base/signature.service.base";

@Injectable()
export class SignatureService extends SignatureServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
