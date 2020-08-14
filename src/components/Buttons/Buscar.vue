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
  props: [
    'tableName', 'method'
  ],
  methods: {
    callGetData(){
      var tableNames = this.tableName.split(',');
      for(let i = 0; i < tableNames.length; i++){
        tableNames[i] = tableNames[i].toLowerCase();
        if(tableNames[i] === 'masatipo'){
          store.dispatch('getMasaTipos')
            .then(console.log)
            .catch(console.log);
        }
        if(tableNames[i] === 'masasabor'){
          store.dispatch('getMasaSabores')
            .then(console.log)
            .catch(console.log);
        }
        if(tableNames[i] === 'sabor'){
          store.dispatch('getSabores')
            .then(console.log)
            .catch(console.log);
        }
        if(tableNames[i] === 'torta'){
          store.dispatch('getTortas')
            .then(console.log)
            .catch(console.log);
        }
      }
    }
  }
}
</script>
<style scoped lang="scss">
</style>
