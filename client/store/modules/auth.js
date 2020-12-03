import axios from "axios";

const state = {
  status: "",
  // token: localStorage.getItem("token") || "",
  user: {},
  loggedIn: false,
  error: ""
};

const getters = {
  isLoggedIn: state => state.loggedIn,
  // isLoggedIn: state => !!state.token,
  user: state => state.user,
  status: state => state.status
};

const actions = {
  async register({ commit }, user) {
    commit("auth_request");
    try {
      const res = await axios.post("http://localhost:3000/register", user);
      if (res.status === 201) {
        // console.log(res);
        // console.log(res.data);
        const user = res.data;
        commit("auth_success", user);
      } else {
        commit("auth_error", res.data);
      }
      return res;
    } catch (error) {
      commit("auth_error", error.response);
      return null;
    }
  },
  async login({ commit }, user) {
    commit("auth_request");
    try {
      const res = await axios.post("http://localhost:3000/login", user);
      if (res.status === 200 || res.status === 201) {
        const user = res.data;
        commit("auth_success", user);
      } else {
        commit("auth_error", res.data);
      }
      return res;
    } catch (error) {
      commit("auth_error", error.response);
      return null;
    }
  },

  async logout({ commit }) {
    commit("logout");
    localStorage.removeItem("token");
  }
};

const mutations = {
  auth_request(state) {
    state.status = "loading";
  },
  auth_success(state, payload) {
    state.status = "success";
    state.user = payload;
    state.loggedIn = true;
    // state.token = payload.token;
  },
  auth_error(state, payload) {
    state.status = payload.data.message;
  },
  logout(state) {
    state.status = "";
    state.user = {};
    state.loggedIn = false;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
