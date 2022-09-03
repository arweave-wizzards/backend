// import { ArditAction, ArditState, ContractResult } from '../../types/types';
import { time, timeStamp } from 'console';
import { BlogState } from '../model/blog-state';
import { ContractDetails } from '../model/contract-details';
import { ContractResult } from '../model/contract-result';
import { Post } from '../model/post';

declare const ContractError;

export const addPost = async (
  state: Post[], {caller, content, category, title} : ContractDetails

): Promise<ContractResult> => {

  const posts = state;

  if (!content) {
    throw new ContractError(`Creator must provide a post content.`);
  }

  let id = posts.length == 0 ? 1 : posts.length + 1;
  let timestamp = Date.now();


  posts.push({
    id,
    author: caller,
    content,
    votes: {
      addresses: [],
      status: 0
    },
    timestamp,
    category,
    title
  });

  return { state };
};
