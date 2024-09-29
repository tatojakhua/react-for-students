import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  console.log("Posts components Function");
  useEffect(() => {
    console.log("Posts useEffect");
  }, []);
  return (
    <div>
      Posts page {console.log("Posts components BODY")}
      <button>
        <Link to="/">Home</Link>
      </button>
    </div>
  );
};

export default Posts;
