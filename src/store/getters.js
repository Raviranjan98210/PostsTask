import state from "./state";

export default {
  // authToken: (state) => state.authToken || localStorage.getItem("authToken"),
  // applicationToken: (state) =>
  //   state.applicationToken || localStorage.getItem("applicationToken"),
  // authId: (state) => state.authId || localStorage.getItem("authId"),
  // approved: (state) => state.approved,
  posts: state => state.posts,
  authToken: state => state.authToken || localStorage.getItem("authToken"),
};
