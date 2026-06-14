import { UserRole } from '../roles/user-role.enum.js';

export type JwtPayload = {
  sub: string;
  email: string;
  role: UserRole;
};