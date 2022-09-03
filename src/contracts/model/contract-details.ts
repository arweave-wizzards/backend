
export interface ContractDetails {
  caller: string;
  function: ContractMethod;
  id: number;
  content: string;
  category: string;
  title: string;
}



export type ContractMethod =
  | 'addPost'
  | 'upvotePost'
  | 'downvotePost'
  | 'readPost';
