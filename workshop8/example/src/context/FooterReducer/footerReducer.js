import {
  INCREMENT,
  DECREMENT,
  GET_INITIAL_POSTS,
  SET_LOADING,
  SET_ERRORS,
} from "../../constants/footerContextConstants";

export const initialState = {
  loading: false,
  error: "",
  posts: [],
  counter: 0,
};

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT:
      return { ...state, counter: state.counter + payload };

    case DECREMENT:
      return { ...state, counter: state.counter - payload };

    case GET_INITIAL_POSTS:
      return { ...state, posts: payload, loading: false };

    case SET_LOADING:
      return { ...state, loading: payload };
    case SET_ERRORS:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};
