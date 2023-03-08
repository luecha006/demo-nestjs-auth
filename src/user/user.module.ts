import { AuthModule } from './../auth/auth.module';
import { UsersRepository } from './entity/users.repository';
import { User } from './entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, Global, forwardRef } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), AuthModule],
  controllers: [UserController],
  providers: [UserService, UsersRepository],
  exports: [UsersRepository],
})
export class UserModule {}
