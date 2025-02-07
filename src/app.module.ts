import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { Group } from './users/entities/group.entity';
import { DatabaseSeed } from './database/database.seed';
import { UserSeeder } from './database/user.seed';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'teceo',
      entities: [ User, Group ],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
    TypeOrmModule.forFeature([Group, User]),
  ],
  providers: [DatabaseSeed, UserSeeder],
})
export class AppModule {}
