import { Module } from "@nestjs/common";
import { SignatureModuleBase } from "./base/signature.module.base";
import { SignatureService } from "./signature.service";
import { SignatureController } from "./signature.controller";
import { SignatureResolver } from "./signature.resolver";

@Module({
  imports: [SignatureModuleBase],
  controllers: [SignatureController],
  providers: [SignatureService, SignatureResolver],
  exports: [SignatureService],
})
export class SignatureModule {}
