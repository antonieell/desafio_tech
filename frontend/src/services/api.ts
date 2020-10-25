const baseUrl = "http://localhost:3001";

export interface Comment {
  _id?: string;
  comment: string;
  postId?: string;
}

export interface Post {
  _id?: string;
  __v?: number;
  comments?: number;
  content: string;
}

export const getPosts = async (): Promise<Post[] | undefined> => {
  const url = baseUrl + "/posts";
  try {
    const resp = await fetch(url);
    const data: Post[] = await resp.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getPostsById = async (id: string): Promise<Post | undefined> => {
  const url = baseUrl + `/posts/${id}`;
  try {
    const resp = await fetch(url);
    const data: Post = await resp.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getCommentsById = async (
  PostId: string
): Promise<Comment | undefined> => {
  const url = baseUrl + `/posts/${PostId}/comments`;
  try {
    const resp = await fetch(url);
    const data: Comment = await resp.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const setCommentsById = async (
  postId: string,
  comment: Comment
): Promise<Comment | undefined> => {
  const url = baseUrl + `/posts/${postId}/comments`;
  try {
    const resp = await fetch(url, {
      headers: {
        "Content-type": "application/json/ charset=UTF-8",
      },
      method: "POST",
      body: JSON.stringify(comment),
    });
    const data = await resp.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const setPost = async (content: Post): Promise<Post | undefined> => {
  const url = baseUrl + `/posts`;
  try {
    const resp = await fetch(url, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      method: "POST",
      body: JSON.stringify(content),
    });
    const data = resp.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
