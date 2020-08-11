import axios   from "axios";
import {store} from '../../store/index';
import router  from '../../router/index';

export default {
  async login(username, password) {
    const  user   = { userName: username, password: password };
    return axios.post("http://138.197.7.205:3000/api/usuario/validate", user)
      .then(r => {
        if(username == "admin") store.commit('cambiarAdmin');
        store.commit('cambiar');
        router.push('/');
        return r.data.token;
      })
      .catch(e => {
        console.log(keys);
        console.log(keys[response]);
        return e;
      });
  }
};
