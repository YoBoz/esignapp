/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { SignatureWhereUniqueInput } from "../../signature/base/SignatureWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SignatureUpdateManyWithoutDocumentsInput {
  @Field(() => [SignatureWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SignatureWhereUniqueInput],
  })
  connect?: Array<SignatureWhereUniqueInput>;

  @Field(() => [SignatureWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SignatureWhereUniqueInput],
  })
  disconnect?: Array<SignatureWhereUniqueInput>;

  @Field(() => [SignatureWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SignatureWhereUniqueInput],
  })
  set?: Array<SignatureWhereUniqueInput>;
}

export { SignatureUpdateManyWithoutDocumentsInput as SignatureUpdateManyWithoutDocumentsInput };
