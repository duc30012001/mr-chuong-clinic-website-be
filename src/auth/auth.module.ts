import { UserService } from '@/user/user.service';
import { entities } from '@/utils/entities';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [TypeOrmModule.forFeature(entities), JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService, UserService],
})
export class AuthModule {}
