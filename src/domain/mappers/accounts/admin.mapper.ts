import { AdminResponse } from '../../responses/accounts/admin.response';
import { AdminModel } from '../../models/admin.model';

export class AdminMapper {
  mapToAdminResponse(admin: AdminModel): AdminResponse {
    return {
      id: admin.id,
      createdAt: admin.createdAt,
      updatedAt: admin.updatedAt,
      lastLogin: admin.lastLogin,
      name: admin.name,
      email: admin.email,
    };
  }

  mapToAdminsResponse(admins: AdminModel[]): AdminResponse[] {
    return admins.map((admin: AdminModel) => this.mapToAdminResponse(admin));
  }
}
