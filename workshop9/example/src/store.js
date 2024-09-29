import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./features/posts/posts";
import counterReducer from "./features/counter/counter";

const store = configureStore({
  reducer: { posts: postsReducer, counter: counterReducer },
});

export default store;
