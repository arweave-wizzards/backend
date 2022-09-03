export interface Post {
    id: number;
    author: string;
    content: string;
    votes: {
      addresses: string[];
      status: number;
    };
    timestamp: number;
    category: string;
    title: string;
  }