import { Test, TestingModule } from '@nestjs/testing';
import { PaquetesHorasService } from './paquetes-horas.service';

describe('PaquetesHorasService', () => {
  let service: PaquetesHorasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaquetesHorasService],
    }).compile();

    service = module.get<PaquetesHorasService>(PaquetesHorasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
