import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SignatureService } from "./signature.service";
import { SignatureControllerBase } from "./base/signature.controller.base";

@swagger.ApiTags("signatures")
@common.Controller("signatures")
export class SignatureController extends SignatureControllerBase {
  constructor(protected readonly service: SignatureService) {
    super(service);
  }
}
