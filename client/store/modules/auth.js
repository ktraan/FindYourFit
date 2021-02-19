/* eslint-disable prettier/prettier */
import axios from 'axios';

const state = {
  status: '',
  // token: localStorage.getItem("token") || "",
  user: {},
  loggedIn: false,
  error: '',
};

const getters = {
  isLoggedIn: (state) => state.loggedIn,
  // isLoggedIn: state => !!state.token,
  user: (state) => state.user,
  status: (state) => state.status,
  error: (state) => state.error,
};

const actions = {
  async register({ commit }, user) {
    commit('auth_request');
    try {
      const res = await axios.post(
        `${process.env.VUE_APP_API_ENDPOINT}/register`,
        user
      );
      if (res.status === 201) {
        commit('auth_success', user);
      } else {
        commit('auth_error', res.data);
      }
      return res;
    } catch (error) {
      commit('auth_error', error.response);
    }
  },
  async login({ commit }, user) {
    commit('auth_request');
    try {
      const res = await axios.post(`/login`, user);
      if (res.status === 200 || res.status === 201) {
        commit('auth_success', user);
      } else {
        commit('auth_error', res.data);
      }
      return res;
    } catch (error) {
      commit('auth_error', error.response);
    }
  },

  async logout({ commit }) {
    commit('logout');
    localStorage.removeItem('token');
  },
};

const mutations = {
  auth_request(state) {
    state.status = 'loading';
  },
  auth_success(state, payload) {
    state.status = 'success';
    state.user = payload;
    state.loggedIn = true;
    state.error = '';
    // state.token = payload.token;
  },
  auth_error(state, payload) {
    state.status = 'failed';
    state.loggedIn = false;
    state.error = payload.data.message;
  },
  logout(state) {
    state.status = '';
    state.user = {};
    state.loggedIn = false;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
