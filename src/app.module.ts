import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailModule } from './email/email.module';

@Module({
  imports: [EmailModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host:'127.0.0.1',
    port:5432,
    username:'root',
    password:'root',
    database: 'study',
    synchronize: true,
    autoLoadEntities: true,
  }),
GraphQLModule.forRoot({
  autoSchemaFile: true
})],
})
export class AppModule {}
