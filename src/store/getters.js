import state from "./state";

export default {
  posts: state => [...state.userPosts, ...state.posts],
  authToken: state => state.authToken || localStorage.getItem("authToken"),
};
