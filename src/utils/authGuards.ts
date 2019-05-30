import { Context } from '../server';
import { User } from '../models/user.interface';

type NextFunction = (
  root: object,
  args: object,
  context: Context,
  info: object,
) => Promise<User[]>;

export const authenticated = (next: NextFunction): NextFunction => (
  root: object,
  args: object,
  context: Context,
  info: object,
): Promise<User[]> => {
  if (!context.currentUser) {
    throw new Error('Not authenticated!');
  }

  return next(root, args, context, info);
};
