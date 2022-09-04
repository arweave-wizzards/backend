// import { ArditAction, ArditState, ContractResult } from '../../types/types';
import { time, timeStamp } from 'console';
import { BlogAction } from '../model/blog-action';
import { BlogState } from '../model/blog-state';
import { ContractResult } from '../model/contract-result';

declare const ContractError;

export const addPost = async (
  state: BlogState,
  { caller, input: { content, title, category } }: BlogAction
): Promise<ContractResult> => {
  const posts = state.posts;
  if (!content) {
    throw new ContractError(`Author must provide post content.`);
  }

  let id = posts.length == 0 ? 1 : posts.length + 1;
  let timestamp = Date.now();

  state.posts.push({
    id,
    author: caller,
    content,
    votes: {
      addresses: [],
      status: 0
    },
    timestamp,
    title,
    category
  });

  return { state };
};
