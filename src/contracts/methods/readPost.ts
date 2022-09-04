import { BlogAction } from "../model/blog-action";
import { BlogState } from "../model/blog-state";
import { ContractResult } from "../model/contract-result";


declare const ContractError;

// export const readMessage = async (state: BlogState, { input: { id } }: BlogAction): Promise<ContractResult> => {
//   const message = state.posts.find((m) => m.id == id);

//   if (!message) {
//     throw new ContractError(`Message with id: ${id} does not exist`);
//   }

//   return { result: message };
// };

export const readPost = async (state: BlogState, { input: {} }: BlogAction): Promise<ContractResult> => {
  


  if (!state.posts) {
    throw new ContractError(`Messages does not exist`);
  }

  return { result: state.posts };
};
