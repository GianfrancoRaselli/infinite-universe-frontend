import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

import connection from './modules/connection'


export default createStore({
  state () {
    return {

    }
  },

  getters: {

  },

  mutations: {

  },

  actions: {
    
  },

  modules: {
    connection,
  },

  plugins: [
    createPersistedState({
      paths: [
        'connection.address',
        'connection.chainId',
        'connection.disconnected',
      ],
      storage: localStorage
    })
  ],
});
