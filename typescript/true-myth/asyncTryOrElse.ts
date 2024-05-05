export type BaseError = { message: string; err?: unknown };
import { Result } from 'true-myth';

export function asyncTryOrElse<T>(
  fn: () => Promise<T>
): Promise<Result<T, unknown>>;
export function asyncTryOrElse<T, E extends BaseError>(
  fn: () => Promise<T>,
  onErr: (value: unknown) => E
): Promise<Result<T, E>>;
export function asyncTryOrElse<T extends {}, E extends BaseError>(
  fn: () => Promise<T>,
  onErr?: (value: unknown) => E
): Promise<Result<T, E>> {
  return fn().then(Result.ok<T, E>, (err) =>
    onErr ? Result.err(onErr(err)) : Result.err(err)
  );
}
