import { Test, TestingModule } from '@nestjs/testing';
import { mockAccount } from '../../../../domain/mocks/accounts/admin.mock';
import { AdminService } from '../../../../usecases/services/accounts/admin.service';
import { AdminController } from '../../accounts/admin.controller';

describe('AccountController', () => {
  let controller: AdminController;
  let service: AdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminController],
      providers: [
        {
          provide: AdminService,
          useFactory: () => ({
            findOneById: jest.fn(() => mockAccount),
          }),
        },
      ],
    }).compile();

    controller = module.get<AdminController>(AdminController);
    service = module.get<AdminService>(AdminService);
  });

  it('should return a account', async () => {
    const response = await controller.findOneById(1);
    expect(service.findOneById).toHaveBeenCalledTimes(1);
    expect(service.findOneById).toHaveBeenCalledWith(1);
    expect(response).toEqual(mockAccount);
  });
});
