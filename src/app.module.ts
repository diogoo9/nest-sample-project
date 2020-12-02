import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailModule } from './email/email.module';

@Module({
  imports: [EmailModule, TypeOrmModule.forRoot({
    type: 'mongodb',

  }),
GraphQLModule.forRoot({
  autoSchemaFile: true
})],
})
export class AppModule {}
