import { Test, TestingModule } from '@nestjs/testing';

import { AdminRepository } from '../../accounts/admin.repository';
import { mockAccount } from '../../../../domain/mocks/accounts/admin.mock';
import { AppModule } from '../../../../app.module';

describe('Admin Respository', () => {
  let repository: AdminRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    repository = module.get<AdminRepository>(AdminRepository);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('should return a admin', async () => {
    jest
      .spyOn(repository, 'findOneById')
      .mockReturnValueOnce(Promise.resolve(mockAccount));

    const result = await repository.findOneById(1);

    expect(repository.findOneById).toHaveBeenCalledTimes(1);
    expect(repository.findOneById).toHaveBeenCalledWith(1);
    expect(result).toEqual(mockAccount);
  });
});
