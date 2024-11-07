import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { LlmTextgenerationService } from './llm-textgeneration.service';
import { LlmTextgenerationController } from './llm-textgeneration.controller';

@Module({
  imports: [ //lista de módulos necesarios para que este módulo funcione
    ClientsModule.register([//registra un cliente en el módulo , cualquier componente en el mismo módulo puede usar el cliente (inyección)
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'llmservice',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'llmservice-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [LlmTextgenerationController],
  providers: [LlmTextgenerationService],
})
export class LlmTextgenerationModule {}
