/* eslint-disable prettier/prettier */
import axios from 'axios';
import http from '../../utils/http';

// const PROD_BASE_URL = 'https://find-your-fit.herokuapp.com/';
// const port = process.env.PORT || 3000;

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
      const res = await http.post(`/register`, user);
      if (res.status === 201) {
        commit('auth_success', user);
      } else {
        commit('auth_error', res.data);
      }
      return res;
    } catch (error) {
      commit('auth_error', error.response);
      return null;
    }
  },
  async login({ commit }, user) {
    commit('auth_request');
    try {
      const res = await http.post(`/login`, user);
      if (res.status === 200 || res.status === 201) {
        commit('auth_success', user);
      } else {
        commit('auth_error', res.data);
      }
      return res;
    } catch (error) {
      commit('auth_error', error.response);
      return null;
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
