
import { BlogAction } from '../model/blog-action';
import { BlogState } from '../model/blog-state';
import { ContractResult } from '../model/contract-result';

declare const ContractError;

export const downvotePost = async (
    state: BlogState,
    { caller, input: { id } }: BlogAction
  ): Promise<ContractResult> => {
    const message = state.posts.find((m) => (m.id = id));
  
   if (!message) {
    throw new ContractError(`Post does not exist.`);
  }

  if (caller == message.author) {
    throw new ContractError(`Post author cannot vote for they own post.`);
  }

  if (message.votes.addresses.includes(caller)) {
    throw new ContractError(`Caller has already voted.`);
  }
    message.votes.status--;
    message.votes.addresses.push(caller);
  
    return { state };
  };