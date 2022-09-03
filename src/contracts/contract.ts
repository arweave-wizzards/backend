import { BlogState } from './model/blog-state';
import { BlogAction } from './model/blog-action';
import { BlogResult } from './model/blog-result';
import { addPost } from '../methods/addPost';
import { ContractResult } from './model/contract-result';

declare const ContractError;


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
