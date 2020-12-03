import { CreateEmailInput } from './create-email.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Unique } from 'typeorm';

@InputType()
export class UpdateEmailInput extends PartialType(CreateEmailInput) {
  @Field(() => String, { description: 'E-mail' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field(()=> String, {description: 'Nome' })
  @IsNotEmpty()
  name: string;
}
