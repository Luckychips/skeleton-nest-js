import { Module } from '@nestjs/common';
import { GreetController } from './controller';
import { GreetService } from './service';

@Module({
  imports: [],
  controllers: [GreetController],
  providers: [GreetService],
})
export class AppModule {}
