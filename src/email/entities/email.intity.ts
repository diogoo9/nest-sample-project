import { ObjectType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryColumn, Unique } from 'typeorm';

@ObjectType()
@Entity()
@Unique(['email'])
export class Email {
  @PrimaryColumn()
  @Field(() => String, { description: 'E-mail' })
  @IsNotEmpty()
  @IsEmail()
  email: number;

  @Column()
  @Field(()=> String, {description: 'Nome' })
  @IsNotEmpty()
  @IsNotEmpty()
  name: string;
}
