import {
  DECREMENT,
  INCREMENT,
  GET_INITIAL_POSTS,
  SET_LOADING,
  SET_ERRORS,
} from "../../constants/footerContextConstants";

function increment(payload) {
  return {
    type: INCREMENT,
    payload,
  };
}

function decrement(payload) {
  return {
    type: DECREMENT,
    payload,
  };
}

function fetchInitialPosts(posts) {
  return {
    type: GET_INITIAL_POSTS,
    payload: posts,
  };
}

function setLoading(status) {
  return {
    type: SET_LOADING,
    payload: status,
  };
}

function setErrors(message) {
  return {
    type: SET_ERRORS,
    payload: message,
  };
}

export { increment, decrement, fetchInitialPosts, setLoading, setErrors };
