import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  decrement,
  increment,
} from "../context/FooterActions/footerActionsCreators";
import { useFooterContext } from "../context/FooterContext";

const Home = () => {
  console.log("Home components Function");
  useEffect(() => {
    console.log("Home useEffect");
  }, []);
  const {
    state: { counter, posts, loading, error },
    dispatch,
  } = useFooterContext();
  console.log("errors ", error);

  if (loading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h1>Error happened</h1>
        <h4>{error}</h4>
      </div>
    );
  }
  return (
    <div>
      Home Component {console.log("Home components BODY")}
      <div>
        <h1>Counter {counter} </h1>
        <button
          onClick={() => {
            dispatch(increment(2));
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch(decrement(2));
          }}
        >
          Decrement
        </button>
      </div>
      <div>
        <h1>POSTS</h1>
        {posts.map((post) => (
          <h3 key={post.id}>{post.title}</h3>
        ))}
      </div>
      <button>
        <Link to="posts">Posts</Link>
      </button>
    </div>
  );
};

export default Home;
