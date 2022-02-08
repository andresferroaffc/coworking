import { Test, TestingModule } from '@nestjs/testing';
import { ActiveUserController } from './active-user.controller';

describe('ActiveUserController', () => {
  let controller: ActiveUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActiveUserController],
    }).compile();

    controller = module.get<ActiveUserController>(ActiveUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
