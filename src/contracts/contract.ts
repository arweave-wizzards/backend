import { BlogState } from './model/blog-state';
import { BlogAction } from './model/blog-action';
import { BlogResult } from './model/blog-result';
import { addPost } from './methods/addPost';
import { ContractResult } from './model/contract-result';
import { readPost } from './methods/readPost';
import { downvotePost } from './methods/downvotePost';
import { upvotePost } from './methods/upvotePost';

declare const ContractError;


export async function handle(
  state: BlogState,
  action: BlogAction
): Promise<ContractResult> {
  const input = action.input;

  switch (input.function) {
    case 'addPost':
      return await addPost(state, action);
    case 'readPost':
      return await readPost(state, action);
    case 'downvotePost':
      return await downvotePost(state, action);
    case 'upvotePost':
      return await upvotePost(state, action);

  }
}
