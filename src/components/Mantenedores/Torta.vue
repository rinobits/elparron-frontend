<template>
  <div id="Torta">
      <div class="header">
        <div class="title">
          <h3>Tortas</h3>
        </div>
        <div class="buttons">
          <SucursalPicker whoCalls="Torta"  class="sucursal"/>
          <Buscar         class="buscar"    sucursal_id="1"  tableName="Torta" method="getall" data="tortas"/>
          <Registrar      class="registrar" sucursal_id="1"  tableName="Torta" method="update" data="tortas,masaTipos,masaSabores,sabores" />  
        </div>
      </div>
      <div class="content">
        <table>
            <h1>Tortas</h1>
            <div v-for="(tipo, index) in tipos" :key="index">
              <select v-model="tipo.masaTipo_nombre">
                <option :value="masaTipo.nombre"   v-for="(masaTipo, index)  in masaTipos"   :key="index" selected="tipo.masaTipo_nombre">
                    {{ masaTipo.nombre }}
                  </option>
              </select>
              <select v-model="tipo.masaSabor_nombre">
                <option :value="masaSabor.nombre"  v-for="(masaSabor, index) in masaSabores" :key="index" selected="tipo.masaSabor_nombre">
                    {{ masaSabor.nombre }}
                  </option>
              </select>
              <select v-model="tipo.sabor_nombre">
                <option :value="sabor.nombre"      v-for="(sabor, index)     in sabores"     :key="index" selected="tipo.sabor_nombre">
                    {{ sabor.nombre }}
                  </option>
              </select>
            </div>
        </table>
      </div>
  </div>
</template>
<script>
import SucursalPicker from '../Buttons/SucursalPicker.vue';
import Buscar         from '../Buttons/Buscar.vue';
import Registrar      from '../Buttons/Registrar.vue';
import axios          from 'axios';
import { store }      from '../../store';
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
        uri:         process.env.VUE_APP_URI,
        tipos:       store.state.tortas,
        masaTipos:   [],
        masaSabores: [],
        sabores:     []
      }
    },
    methods: {
      callTorta(){
        this.getTorta(this.sucursal_id)
          .then(r => {
            store.state.tortas = r.data;
            this.tipos = store.state.tortas;
          })
          .catch(console.log);
      },
      callGetMasaTipos(){
        this.getMasaTipos()
          .then(r => {
            this.masaTipos         = r.data
            store.state.masaTipos  = this.masaTipos;
          })
          
          .catch(console.log);
      },
      callGetMasaSabores(){
        this.getMasaSabores()
          .then(r => {
            this.masaSabores        = r.data
            store.state.masaSabores = this.masaSabores;
          })
          
          .catch(console.log);
      },
      callGetSabores(){
        this.getSabores()
          .then(r => {
            this.sabores         = r.data
            store.state.sabores = this.sabores;
          })
          
          .catch(console.log);
      },   
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
      getMasaTipos(){
        return new Promise((resolve, reject) => {
          const tableName = `masatipo`;
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
      getMasaSabores(){
        return new Promise((resolve, reject) => {
          const tableName = `masasabor`;
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
      getSabores(){
        return new Promise((resolve, reject) => {
          const tableName = `sabor`;
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
      }
    },
    async created() {
      await this.callTorta();
      await this.callGetMasaTipos();
      await this.callGetMasaSabores();
      await this.callGetSabores();
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
