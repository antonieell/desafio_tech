const baseUrl = "http://localhost:3001";

export interface ErrorRequest {
  err?: string;
}
export interface Comment extends ErrorRequest {
  _id?: string;
  content: string;
  postId?: string;
  comment?: string;
}

export interface Post extends ErrorRequest {
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
): Promise<Comment[] | undefined> => {
  const url = baseUrl + `/posts/${PostId}/comments`;
  try {
    const resp = await fetch(url);
    const data: Comment[] = await resp.json();
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
    const sendData = {comment: comment.content}
    const resp = await fetch(url, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      method: "POST",
      body: JSON.stringify(sendData),
    });
    const data = resp.json()
    
    return data
    
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
