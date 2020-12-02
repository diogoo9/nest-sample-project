import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsEmail, isNotEmpty, IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryColumn, Unique } from 'typeorm';

@Entity()
@ObjectType()
@Unique(['email'])
export class Email {
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
