import { BlogFunction } from './blog-function';

export interface BlogInput {
  function: BlogFunction;
  id: number;
  content: string;
}