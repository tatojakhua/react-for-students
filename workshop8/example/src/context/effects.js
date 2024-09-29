import {
  fetchInitialPosts,
  setErrors,
  setLoading,
} from "./FooterActions/footerActionsCreators";

export async function handleInitialDataFetching(dispatch, fetchFunc) {
  try {
    dispatch(setLoading(true));
    const posts = await fetchFunc();

    dispatch(fetchInitialPosts(posts.slice(0, 10)));
  } catch (error) {
    console.log(error.message);
    dispatch(setErrors(error.message));
  }
}
