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
        var Data       = this.data.split(',');
        const elements = store.state[`${Data[0]}`];
        var url        = '';
        for(var elem of elements){
          url = `${this.uri}/${this.tableName}/${this.method}/${elem.id}`;
          if(Data[0] == 'tortas'){
            for(let d of store.state[`${Data[1]}`]){
              if(d.nombre == elem.masaTipo_nombre){
                  elem.masaTipo_id = d.id;
                  break;
              }
            }
            for(let d of store.state[`${Data[2]}`]){
              if(d.nombre == elem.masaSabor_nombre){
                  elem.masaSabor_id = d.id;
                  break;
              }
            }
            for(let d of store.state[`${Data[3]}`]){
              if(d.nombre == elem.sabor_nombre){
                  elem.sabor_id = d.id;
                  break;
              }
            }
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
