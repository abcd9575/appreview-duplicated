import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
@Module({
  imports: [TypeOrmModule.forFeature([User])], //이게 무슨 역할인지 모르겠음. 또 배열형태로 집어넣어야 하는 이유?
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
