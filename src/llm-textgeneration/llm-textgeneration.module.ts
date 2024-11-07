import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { LlmTextgenerationService } from './llm-textgeneration.service';
import { LlmTextgenerationController } from './llm-textgeneration.controller';

@Module({
  controllers: [LlmTextgenerationController],
  providers: [LlmTextgenerationService],
})
export class LlmTextgenerationModule {}
