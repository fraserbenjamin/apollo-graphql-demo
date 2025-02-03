export interface PostModel {
  id: number;
  userId: number;
  message: string;
}

const posts: PostModel[] = [
  {
    id: 1,
    userId: 1,
    message: "Hello, World!",
  },
  {
    id: 2,
    userId: 1,
    message: "Goodbye, World!",
  },
  {
    id: 3,
    userId: 2,
    message: "Hello, Universe!",
  }
];

export class PostsService {
  public getPosts(): PostModel[] {
    return posts;
  }

  public getPostById(id: number): PostModel | undefined {
    return posts.find((post) => post.id === id);
  }

  public getPostsByUserId(userId: number): PostModel[] {
    return posts.filter((post) => post.userId === userId);
  }
}
