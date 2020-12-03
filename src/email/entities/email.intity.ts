import { ObjectType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Column, Entity, ObjectIdColumn, PrimaryColumn, PrimaryGeneratedColumn, Unique } from 'typeorm';

@ObjectType()// passa a ser schema e entidade, assim conseguimos fazer com 1 file por enquanto
@Entity()
@Unique(['email'])
export class Email {
  @PrimaryGeneratedColumn()
  id: string;

  @PrimaryColumn()
  @Field(() => String, { description: 'E-mail' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Column()
  @Field(()=> String, {description: 'Nome' })
  @IsNotEmpty()
  @IsNotEmpty()
  name: string;
}
