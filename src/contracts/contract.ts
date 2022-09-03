import { BlogState } from './model/blog-state';
import { BlogAction } from './model/blog-action';
import { ContractResult } from './model/contract-result';

export async function handle(
  state: BlogState,
  action: BlogAction
): Promise<ContractResult> {}
