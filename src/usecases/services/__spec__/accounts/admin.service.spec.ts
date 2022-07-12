import { Test, TestingModule } from '@nestjs/testing';

import { AdminMapper } from '../../../../domain/mappers/accounts/admin.mapper';
import {
  mockAccount,
  mockAccountRepository,
} from '../../../../domain/mocks/accounts/admin.mock';
import { AdminRepository } from '../../../../infrastructure/repositories/accounts/admin.repository';
import { AdminService } from '../../accounts/admin.service';

describe('AccountService', () => {
  let service: AdminService;
  let repository: AdminRepository;
  let mapper: AdminMapper;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AdminService,
        {
          provide: AdminRepository,
          useFactory: () => ({
            findOneById: jest.fn(() => mockAccountRepository),
          }),
        },
        {
          provide: AdminMapper,
          useFactory: () => ({
            mapToAdminResponse: jest.fn(() => mockAccount),
          }),
        },
      ],
    }).compile();

    service = module.get<AdminService>(AdminService);
    repository = module.get<AdminRepository>(AdminRepository);
    mapper = module.get<AdminMapper>(AdminMapper);
  });

  it('should return a admin', async () => {
    const result = await service.findOneById(1);
    expect(repository.findOneById).toHaveBeenCalledTimes(1);
    expect(repository.findOneById).toHaveBeenCalledWith(1);
    expect(mapper.mapToAdminResponse).toHaveBeenCalledWith(
      mockAccountRepository,
    );
    expect(result).toEqual(mockAccount);
  });
});
