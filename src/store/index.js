/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import sources from '../conf/sources-config.json';
import * as types from './mutation-types';

Vue.use(Vuex);
Vue.use(VueResource);

// Houses pagination counter
let housesPaginationCounter = 1;

const store = new Vuex.Store({
  state: {
    houses: [],
    characters: {},
  },
  mutations: {
    [types.APPEND_HOUSES](state, houses) {
      state.houses = state.houses.concat(houses);
    },
    [types.SET_CHARACTER](state, character) {
      state.characters = { ...state.characters, ...character };
    },
  },
  getters: {
    getCharactersByUrls(state) {
      return urls => urls.map(url => state.characters[url]);
    },
  },
  actions: {
    fetchHouses({ commit }) {
      Vue.http.get(sources.houses.url, { params: { page: housesPaginationCounter } })
        .then((response) => {
          commit(types.APPEND_HOUSES, response.body);
          housesPaginationCounter += 1;
        },
        (response) => {
          throw new Error('Unable to fetch data from the houses endpoint', response);
        });
    },
    fetchCharacter({ commit }, payload) {
      if (!payload.url) {
        throw new Error('Unable to fetch data from undefined characters endpoint', payload);
      }
      Vue.http.get(payload.url)
        .then((response) => {
          commit(types.SET_CHARACTER, { [payload.url]: response.body });
        },
        (response) => {
          throw new Error('Unable to fetch data from the characters endpoint', response);
        });
    },
  },
});

// Fetch the location data
store.dispatch('fetchHouses');

export default store;
