import { Test, TestingModule } from '@nestjs/testing';
import { StatusSalasService } from './status-salas.service';

describe('StatusSalasService', () => {
  let service: StatusSalasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StatusSalasService],
    }).compile();

    service = module.get<StatusSalasService>(StatusSalasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
