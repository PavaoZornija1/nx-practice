import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@nx-next-nest-prisma-ory-template/database';
import { HealthController } from './health.controller';
import { HelloController } from './hello.controller';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule],
  controllers: [HelloController, HealthController],
  providers: [],
})
export class AppModule {}
