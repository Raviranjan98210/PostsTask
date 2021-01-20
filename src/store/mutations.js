export default {
  // SET_AUTH_USER_DATA(state, data) {
  //   localStorage.setItem("authToken", data.operatorToken);
  //   localStorage.setItem("applicationToken", data.applicationToken);
  //   localStorage.setItem("authId", data.id);

  //   state.authToken = data.operatorToken;
  //   state.applicationToken = data.applicationToken;
  //   state.authId = data.id;
  // },

  // UNSET_AUTH_USER_DATA(state) {
  //   localStorage.removeItem("authToken");
  //   localStorage.removeItem("applicationToken");
  //   localStorage.removeItem("authId");

  //   state.authToken = null;
  //   state.applicationToken = null;
  //   state.authId = null;
  // },

  // SET_USER_APPROVED(state) {
  //   state.approved = true;
  // },

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
};
