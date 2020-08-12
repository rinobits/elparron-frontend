<template>
  <div id="Torta">
      <div class="header">
        <div class="title">
          <h3>Tortas</h3>
        </div>
        <div class="buttons">
          <SucursalPicker whoCalls="Torta"  class="sucursal"/>
          <Buscar         class="buscar"    sucursal_id="1"  tableName="Torta" method="getall" data="tortas"/>
          <Registrar      class="registrar" sucursal_id="1"  tableName="Torta" method="update" data="tortas"/>  
        </div>
      </div>
      <div class="content">
        <table>
            <h1>Tortas</h1>
            <div v-for="(tipo, index) in tipos" :key="index">
              <input
                type="text"
                v-model="tipo.masaTipo_id"
                value="tipo.masaTipo_id"
                />
              <input
                type="text"
                v-model="tipo.masaSabor_id"
                value="tipo.masaSabor_id"
                />
              <input
                type="text"
                v-model="tipo.sabor_id"
                value="tipo.sabor_id"
                />
            </div>

        </table>
      </div>
  </div>
</template>
<script>
import SucursalPicker from '../Buttons/SucursalPicker.vue';
import Buscar         from '../Buttons/Buscar.vue';
import Registrar      from '../Buttons/Registrar.vue';
import { store }      from '../../store';
import axios          from 'axios';
  export default {
    name: 'Torta',
    components: {
      SucursalPicker,
      Buscar,
      Registrar
    },
    data: () => {
      return {
        sucursal_id: store.sucursal_id,
        uri:  process.env.VUE_APP_URI,
        tipos: store.state.tortas
      }
    },
    methods: {
      getTorta(sucursal_id){
        return new Promise((resolve, reject) => {
          const tableName = `Torta`;
          const method    = 'getall';
          const url       = `${this.uri}/${tableName}/${method}`;
          const config = {
              headers: {
                  authorization: localStorage.getItem('accessToken')
              }
          };
          axios.get(url, config)
            .then(r => {
              resolve(r);
            })
            .catch(e => {
              reject(e);
            });
        })
      },
      callTorta(){
        this.getTorta(this.sucursal_id)
          .then(r => {
            store.state.tortas = r.data;
            this.tipos = store.state.tortas;
          })
          .catch(console.log);
      }
    },
    async mounted() {
      await this.callTorta();
    }
  }
</script>
<style scoped lang="scss">
.header{
  position:relative;
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(4, 1fr);
  justify-items: start;
  .title{

  }
  .buttons{
    margin-top:12px;
    display:grid;
    grid-column: 3 / 4;
    grid-template-columns: repeat(3, 1fr);
    .sucursal { 
      margin-top:17px;
    }
    .buscar, .registrar {
      margin-top:17px;
    }
  }
}
</style>
