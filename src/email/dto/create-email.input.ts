import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Column, PrimaryColumn } from 'typeorm';

@InputType()
export class CreateEmailInput {

  @Field(() => String, { description: 'E-mail' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field(()=> String, {description: 'Nome' })
  @IsNotEmpty()
  name: string;
}
