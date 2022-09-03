import { BlogState } from './blog-state';
import { BlogResult } from './blog-result';

export type ContractResult = { state: BlogState } | { result: BlogResult };