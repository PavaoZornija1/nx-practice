import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { PrismaService } from '@nx-next-nest-prisma-ory-template/database';
import type { HealthResponse } from '@nx-next-nest-prisma-ory-template/types';

@ApiTags('Health')
@Controller('api/health')
export class HealthController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  @ApiOperation({ summary: 'Health check', description: 'API and database connectivity status' })
  async getHealth(): Promise<HealthResponse> {
    let database: 'connected' | 'error' = 'error';
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      database = 'connected';
    } catch {
      database = 'error';
    }
    return {
      api: 'ok',
      database,
      timestamp: new Date().toISOString(),
    };
  }
}
