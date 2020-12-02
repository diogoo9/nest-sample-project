import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Column, PrimaryColumn } from 'typeorm';

@InputType()
export class CreateEmailInput {
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
