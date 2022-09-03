import { BlogState } from './model/blog-state';
import { BlogAction } from './model/blog-action';

export async function handle(
  state: BlogState,
  action: BlogAction
): Promise<ContractResult> {}
