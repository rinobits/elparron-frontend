<template>
  <div id="Buscar">
    <button @click="callGetData()" class="buscar">
      Buscar
    </button>
  </div>
</template>

<script>
import {store} from '../../store';
import  axios  from 'axios';
export default {
  name: 'Buscar',
  data: () => {
    return {
      uri: process.env.VUE_APP_URI
    }
  },
  props: [
    'tableName', 'method', 'data'
  ],
  methods: {
    getData(){
      return new Promise((resolve, reject) => {
          const url = `${this.uri}/${this.tableName}/${this.method}`;
          const config = {
              headers: {
                  authorization: localStorage.getItem('accessToken')
              }
          };
          axios.get(url, config)
            .then(r => {
              resolve(r.data);
            })
            .catch(e => reject(e))
      })
    },
    callGetData(){
      this.getData()
        .then(r => {
          store.state[`${this.data}`] = r;
        })
        .catch(console.log);
    }
  }
}
</script>
<style scoped lang="scss">
</style>
