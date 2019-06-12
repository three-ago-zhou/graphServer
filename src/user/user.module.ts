import { Module } from '@nestjs/common';
import { UserResolvers } from './user.resolvers';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '..//entity/user.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity])
    ],
    providers: [
        UserService,
        UserResolvers
    ],
})
export class UserModule {}
