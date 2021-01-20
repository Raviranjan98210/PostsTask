export default {
  SET_POSTS(state, posts) {
    state.posts = posts;
  },

  SET_AUTH_USER_DATA(state, user) {
    localStorage.setItem("authToken", user.email);
    state.authToken = user.email;
  },

  UNSET_AUTH_USER_DATA(state) {
    localStorage.removeItem("authToken");

    state.authToken = null;
  },
  ADD_USER_POST(state, userPosts) {
    localStorage.setItem("userPost", JSON.stringify(userPosts));
  },
};
