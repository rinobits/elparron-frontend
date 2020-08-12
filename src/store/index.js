import Vue  from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store =  new Vuex.Store({
  state: {
    auth:        false,
    adminAuth:   false,
    menu:        true,
    sucursal_id: 1,
    sucursales:  [],
    tortas:      [],
    masaTipos:   [],
    sabores:     [],
    masaSabores: [],
    token:       localStorage.getItem('accessToken') || null
  },
  mutations: {
    cambiar:      (state) => state.auth      = !state.auth, 
    cambiarAdmin: (state) => state.adminAuth = !state.adminAuth,
    hideMenu:     (state) => state.menu      = !state.menu
  },
  actions: {
  },
  modules: {
  }
})
