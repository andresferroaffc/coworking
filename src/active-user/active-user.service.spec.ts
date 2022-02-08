import { Test, TestingModule } from '@nestjs/testing';
import { ActiveUserService } from './active-user.service';

describe('ActiveUserService', () => {
  let service: ActiveUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActiveUserService],
    }).compile();

    service = module.get<ActiveUserService>(ActiveUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
