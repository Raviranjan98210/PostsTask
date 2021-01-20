import state from "./state";

export default {
  posts: state => state.posts,
  authToken: state => state.authToken || localStorage.getItem("authToken"),
};
