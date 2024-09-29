export const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (res.ok) {
    return await res.json();
  }
  throw new Error("Fetching API failed");
};
