import { Test, TestingModule } from '@nestjs/testing';
import { PaquetesHorasController } from './paquetes-horas.controller';

describe('PaquetesHorasController', () => {
  let controller: PaquetesHorasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaquetesHorasController],
    }).compile();

    controller = module.get<PaquetesHorasController>(PaquetesHorasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
