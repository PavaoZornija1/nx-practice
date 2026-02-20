import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import type { HelloResponse } from '@nx-next-nest-prisma-ory-template/types';

@ApiTags('Hello')
@Controller('api/hello')
export class HelloController {
  @Get()
  @ApiOperation({ summary: 'Hello from API', description: 'Shared endpoint for Manager and Dispatcher' })
  getHello(): HelloResponse {
    return {
      message: 'Hello from API',
      timestamp: new Date().toISOString(),
    };
  }
}
