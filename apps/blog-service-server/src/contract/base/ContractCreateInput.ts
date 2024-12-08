/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  IsEnum,
  ValidateNested,
} from "class-validator";
import { EnumContractStatus } from "./EnumContractStatus";
import { SignatureCreateNestedManyWithoutContractsInput } from "./SignatureCreateNestedManyWithoutContractsInput";
import { Type } from "class-transformer";
import { ClientCreateNestedManyWithoutContractsInput } from "./ClientCreateNestedManyWithoutContractsInput";

@InputType()
class ContractCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumContractStatus,
  })
  @IsEnum(EnumContractStatus)
  @IsOptional()
  @Field(() => EnumContractStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => SignatureCreateNestedManyWithoutContractsInput,
  })
  @ValidateNested()
  @Type(() => SignatureCreateNestedManyWithoutContractsInput)
  @IsOptional()
  @Field(() => SignatureCreateNestedManyWithoutContractsInput, {
    nullable: true,
  })
  signatures?: SignatureCreateNestedManyWithoutContractsInput;

  @ApiProperty({
    required: false,
    type: () => ClientCreateNestedManyWithoutContractsInput,
  })
  @ValidateNested()
  @Type(() => ClientCreateNestedManyWithoutContractsInput)
  @IsOptional()
  @Field(() => ClientCreateNestedManyWithoutContractsInput, {
    nullable: true,
  })
  clients?: ClientCreateNestedManyWithoutContractsInput;
}

export { ContractCreateInput as ContractCreateInput };