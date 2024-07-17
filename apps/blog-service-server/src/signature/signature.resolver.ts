import * as graphql from "@nestjs/graphql";
import { SignatureResolverBase } from "./base/signature.resolver.base";
import { Signature } from "./base/Signature";
import { SignatureService } from "./signature.service";

@graphql.Resolver(() => Signature)
export class SignatureResolver extends SignatureResolverBase {
  constructor(protected readonly service: SignatureService) {
    super(service);
  }
}
