<template>
  <div id="SaborTorta">
      <div class="header">
        <div class="title">
          <h3>Sabores de Tortas</h3>
        </div>
        <div class="buttons">
          <SucursalPicker whoCalls="SaborTorta" class="sucursal"/>
          <Buscar         class="buscar"      sucursal_id="1" tableName="sabor" method="getall" data="sabores"/>
          <Registrar      class="registrar"   sucursal_id="1" tableName="sabor" method="update" data="sabores"/>  
        </div>
      </div>
      <div class="content">
        <table>
            <h1>Sabores de Tortas</h1>
            <div v-for="(tipo, index) in $store.state.sabores" :key="index">
              <input
                type="text"
                value="$store.state.sabores[index].nombre"
                v-model="$store.state.sabores[index].nombre"
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
  name: 'SaborTorta',
  components: {
    SucursalPicker,
    Buscar,
    Registrar
  },
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
