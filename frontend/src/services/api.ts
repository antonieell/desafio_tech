const baseUrl = "http://localhost:3001";

export const getPosts = async () => {
  const url = baseUrl + "/posts";
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPostsById = async (id: string) => {
  const url = baseUrl + `/posts/${id}`;
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCommentsById = async (PostId: string) => {
  const url = baseUrl + `/posts/${PostId}/comments`;
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

type Comment = { comment: string };
export const setCommentsById = async (postId: string, comment: Comment) => {
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
    console.log(error);
  }
};

type Post = {
  content: string;
};
export const setPost = async (content: Post) => {
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
    console.log(error);
  }
};
