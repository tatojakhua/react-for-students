import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getInitialPosts = createAsyncThunk("posts/getInitialPosts", () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  return fetch(url).then((res) => res.json());
});

const initialState = {
  posts: [],
  loading: true,
  error: "",
};
const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getInitialPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getInitialPosts.fulfilled, (state, action) => {
      const { payload } = action;
      state.loading = false;
      state.posts = payload;
    });
    builder.addCase(getInitialPosts.rejected, (state, action) => {
      const { error } = action;
      state.loading = false;
      state.error = error.message;
    });
  },
});

export default postsSlice.reducer;
