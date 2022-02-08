import { Test, TestingModule } from '@nestjs/testing';
import { StatusSalasController } from './status-salas.controller';

describe('StatusSalasController', () => {
  let controller: StatusSalasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StatusSalasController],
    }).compile();

    controller = module.get<StatusSalasController>(StatusSalasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
