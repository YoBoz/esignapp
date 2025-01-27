/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EmailNotificationWhereUniqueInput } from "./EmailNotificationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { EmailNotificationUpdateInput } from "./EmailNotificationUpdateInput";

@ArgsType()
class UpdateEmailNotificationArgs {
  @ApiProperty({
    required: true,
    type: () => EmailNotificationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EmailNotificationWhereUniqueInput)
  @Field(() => EmailNotificationWhereUniqueInput, { nullable: false })
  where!: EmailNotificationWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => EmailNotificationUpdateInput,
  })
  @ValidateNested()
  @Type(() => EmailNotificationUpdateInput)
  @Field(() => EmailNotificationUpdateInput, { nullable: false })
  data!: EmailNotificationUpdateInput;
}

export { UpdateEmailNotificationArgs as UpdateEmailNotificationArgs };
