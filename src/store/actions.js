import axios from "axios";

export default {
  async fetchPosts({ commit }) {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(response.data);
    commit("SET_POSTS", response.data);
  },

  async verifyUser({ commit }, payload) {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");

    const user = response.data.find(user => user.email === payload.email);

    if (user) {
      commit("SET_AUTH_USER_DATA", user);
      setTimeout(function() {
        payload.window.location = "/";
      }, 2000);
    } else {
      console.log("Not found");
    }
  },

  attemptLogout({ commit }, window) {
    commit("UNSET_AUTH_USER_DATA");
    setTimeout(function() {
      window.location = "/login";
    }, 3000);
  },

  addUserPost({ commit }, payload) {
    commit("ADD_USER_POST", payload);
  },
};
