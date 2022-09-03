import { BlogFunction } from './blog-function';

export interface BlogInput {
  function: BlogFunction;
  id: number;
  content: string;
  title: string;
  category: PostCategory;
}


export type PostCategory = 'Beginner'|'Intermediate'|'Advanced'