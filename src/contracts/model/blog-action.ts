import { BlogInput } from './blog-input';

export interface BlogAction {
  input: BlogInput;
  caller: string;
}
