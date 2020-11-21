import axios from "axios";

const state = {
  token: localStorage.getItem("token") || "",
  user: {}
};

const getters = {
  isLoggedIn: state => !!state.token,
  user: state => state.user
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
