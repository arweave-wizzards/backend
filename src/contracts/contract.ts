import { BlogState } from './model/blog-state';
import { BlogAction } from './model/blog-action';
import { ContractResult } from './model/contract-result';

export async function handle(
  state: BlogState,
  action: BlogAction
): Promise<ContractResult> {
  const input = action.input;
  switch (input.function) {
    case 'addPost':
      return await addPost(state, action);
  }
}
