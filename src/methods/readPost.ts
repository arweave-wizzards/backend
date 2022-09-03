import { BlogAction } from "../contracts/model/blog-action";
import { BlogState } from "../contracts/model/blog-state";
import { ContractResult } from "../contracts/model/contract-result";


declare const ContractError;

// export const readMessage = async (state: BlogState, { input: { id } }: BlogAction): Promise<ContractResult> => {
//   const message = state.posts.find((m) => m.id == id);

//   if (!message) {
//     throw new ContractError(`Message with id: ${id} does not exist`);
//   }

//   return { result: message };
// };

export const readPostByCreator = async (state: BlogState, { input: { author } }: BlogAction): Promise<ContractResult> => {
  
  const message = state.posts.find((m) => m.author == author);

  if (!message) {
    throw new ContractError(`Message with author: ${author} does not exist`);
  }

  return { result: message };
};
