import { BlogState } from './blog-state';
import { BlogResult } from './blog-result';
import { Post } from './post';

export type ContractResult = { state: Post[] } | { result: Post };
