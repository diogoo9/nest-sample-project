import { CreateEmailInput } from './create-email.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Column, PrimaryColumn } from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateEmailInput extends PartialType(CreateEmailInput) {
  @PrimaryColumn()
  @Field(() => Int, { description: 'E-mail' })
  @IsNotEmpty()
  @IsEmail()
  email: number;

  @Column()
  @Field(()=> String, {description: 'Nome' })
  @IsNotEmpty()
  name: string;
}
