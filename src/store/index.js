import Vue   from 'vue';
import Vuex  from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export const store =  new Vuex.Store({
  state: {
    auth:        false,
    adminAuth:   false,
    uri:         process.env.VUE_APP_URI,
    menu:        true,
    sucursal_id: 1,
    sucursales:  [],
    tortas:      [],
    masaTipos:   [],
    masaSabores: [],
    sabores:     [],
    token:       localStorage.getItem('accessToken') || null
  },
  mutations: {
    cambiar:        (state) => state.auth      = !state.auth, 
    cambiarAdmin:   (state) => state.adminAuth = !state.adminAuth,
    hideMenu:       (state) => state.menu      = !state.menu,
    setMasaTipos:   (state, masaTipos)   => state.masaTipos   = masaTipos.data,
    setMasaSabores: (state, masaSabores) => state.masaSabores = masaSabores.data,
    setSabores:     (state, sabores)     => state.sabores     = sabores.data,
    setTortas:      (state, tortas)      => state.tortas      = tortas.data,
  },
  actions: {
    getMasaTipos:   ({ commit, state }) => {
      return new Promise((resolve, reject) => {
        const tableName = `masatipo`;
        const method    = 'getall';
        const url       = `${state.uri}/${tableName}/${method}`;
        const config = {
            headers: {
                authorization: localStorage.getItem('accessToken')
            }
        };
        axios.get(url, config)
          .then(r => {
            commit('setMasaTipos', r);
            resolve(r);
          })
          .catch(e => {
            console.log(e);
            reject();
          });
      });
    },
    getMasaSabores: ({ commit, state }) => {
      return new Promise((resolve, reject) => {
        const tableName = `masasabor`;
        const method    = 'getall';
        const url       = `${state.uri}/${tableName}/${method}`;
        const config = {
            headers: {
                authorization: localStorage.getItem('accessToken')
            }
        };
        axios.get(url, config)
          .then(r => {
            commit('setMasaSabores', r);
            resolve(r);
          })
          .catch(e => {
            console.log(e);
            reject();
          });
      });
    },
    getSabores:     ({ commit, state }) => {
      return new Promise((resolve, reject) => {
        const tableName = `sabor`;
        const method    = 'getall';
        const url       = `${state.uri}/${tableName}/${method}`;
        const config = {
            headers: {
                authorization: localStorage.getItem('accessToken')
            }
        };
        axios.get(url, config)
          .then(r => {
            commit('setSabores', r);
            resolve(r);
          })
          .catch(e => {
            console.log(e);
            reject();
          });
      })
    },
    getTortas:      ({ commit, state }) => {
      return new Promise((resolve, reject) => {
        const tableName = `Torta`;
        const method    = 'getall';
        const url       = `${state.uri}/${tableName}/${method}`;
        const config = {
            headers: {
                authorization: localStorage.getItem('accessToken')
            }
        };
        axios.get(url, config)
          .then(r => {
            commit('setTortas', r);
            resolve(r);
          })
          .catch(e => {
            reject();
          });
      })
    }
  },
  modules: {
  }
})
