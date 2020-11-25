import axios from "axios";

const state = {
  status: "",
  token: localStorage.getItem("token") || "",
  user: {}
};

const getters = {
  isLoggedIn: state => !!state.token,
  user: state => state.user
};

const actions = {
  async register({ commit }, user) {
    commit("auth_request");
    try {
      axios.post("http://localhost:3000/register", user).then(res => {
        const token = res.data.token;
        const user = res.data.user;
        localStorage.setItem("token", token);
        commit("auth_success", token, user);
      });
    } catch (error) {
      commit("auth_error", error);
      localStorage.removeItem("token");
    }
  },
  async login({ commit }, user) {
    commit("auth_request");
    try {
      axios.post("http://localhost:3000/register", user).then(res => {
        const token = res.data.token;
        const user = res.data.user;
        localStorage.setItem("token", token);
        commit("auth_success", token, user);
      });
    } catch (error) {
      commit("auth_error", error);
      localStorage.removeItem("token");
    }
  },
  async logout({ commit }) {
    commit("logout");
    localStorage.removeItem("token");
  }
};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
