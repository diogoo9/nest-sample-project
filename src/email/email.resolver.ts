import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { CreateEmailInput } from './dto/create-email.input';
import { UpdateEmailInput } from './dto/update-email.input';
import { EmailService } from './email.service';
import { Email } from './entities/email.intity';

@Resolver(() => Email)
export class EmailResolver {
  constructor(private readonly emailService: EmailService){
  }

  @Mutation(() => Email)
  async createEmail(@Args('createEmailInput') createEmailInput: CreateEmailInput) {
    return this.emailService.create(createEmailInput);
  }

  @Query(() => [Email], { name: 'email' })
  async findAll() {
    return this.emailService.findAll();
  }

  @Query(() => Email, { name: 'email' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return this.emailService.findOne(id);
  }

  @Mutation(() => Email)
  async updateEmail(@Args('updateEmailInput') updateEmailInput: UpdateEmailInput) {
    return this.emailService.update(updateEmailInput);
  }

  @Mutation(() => Email)
  async removeEmail(@Args('id', { type: () => Int }) id: number) {
    return this.emailService.remove(id);
  }
}
