import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { SharedModule } from './shared/shared.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from './shared/services/config.service';

@Module({
  imports: [
    UsersModule,
    SharedModule,
    TypeOrmModule.forRootAsync({
      imports: [SharedModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.getPostgresConfig,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
