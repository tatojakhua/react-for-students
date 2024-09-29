import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInitialPosts } from "../../features/posts/posts";
import { PacmanLoader } from "react-spinners";

const Posts = () => {
  const { loading, error, posts } = useSelector((store) => store.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInitialPosts());
  }, [dispatch]);
  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <PacmanLoader color="#36d7b7" />
      </div>
    );
  }

  return (
    <div>
      <h1>Posts</h1>
      {error ? (
        <h1>Error happened</h1>
      ) : (
        posts.map((post) => <h3 key={post.id}>{post.title}</h3>)
      )}
    </div>
  );
};

export default Posts;
