import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailResolver } from './email.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Email } from './entities/email.intity';

@Module({
  imports:[TypeOrmModule.forFeature([Email])],
  providers: [EmailResolver, EmailService]
})
export class EmailModule {}
