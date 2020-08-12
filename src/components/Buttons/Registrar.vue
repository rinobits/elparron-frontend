<template>
  <div id="Registrar">
    <button @click="putAllData()" class="registrar">
      Registrar
    </button>
  </div>
</template>
<script>
import Vue       from 'vue';
import axios     from "axios";
import { store } from "../../store/index.js";
export default {
  name: 'Registrar',
  data: () => {
    return {
      uri:  process.env.VUE_APP_URI
    }
  },
  props: [
    'sucursal_id', 'tableName',
    'method', 'data'
  ],
  methods: {
    callPutData(){
      return new Promise((resolve, reject) => {
        const uri    = '';
        var   body   = {};
        const config = {
            headers: {
                authorization: localStorage.getItem('accessToken')
            }
        };
        const elements = store.state[`${this.data}`];
        var url = '';
        for(const elem of elements){
          url = `${this.uri}/${this.tableName}/${this.method}/${elem.id}`;
          if(this.data === 'tortas'){
            body = { 
              masaTipo_id:  elem.masaTipo_id,
              masaSabor_id: elem.masaSabor_id,
              sabor_id:     elem.sabor_id
             };
          }else{
            body = {
              nombre: elem.nombre
            }
          }
          axios.put(url, body, config)
            .then(console.log)
            .catch(console.log)
        }
        resolve();
      });
    },
    putAllData(){
      this.callPutData(this.sucursal_id)
        .then(console.log)
        .catch(console.log);
    }
  }
}
</script>
<style scoped lang="scss">
</style>
