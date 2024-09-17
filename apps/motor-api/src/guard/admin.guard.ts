import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class AdminGuard extends AuthGuard('jwt') implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    // First, validate the JWT token
    await super.canActivate(context);

    const request = context.switchToHttp().getRequest();
    const user = request.user; // This will be set after the token is validated

    // Check if the user role is admin
    if (user.role !== 'admin') {
      throw new ForbiddenException('Access restricted to admin users only.');
    }

    return true;
  }
}
