<template>
  <div id="SaborMasa">
      <div class="header">
        <div class="title">
          <h3>Sabores de Masas</h3>
        </div>
        <div class="buttons">
          <SucursalPicker whoCalls="SaborMasa" class="sucursal"/>
          <Buscar         class="buscar"      sucursal_id="1" tableName="masaSabor" method="getall" data="masaSabores"/>
          <Registrar      class="registrar"   sucursal_id="1" tableName="masaSabor" method="update" data="masaSabores"/>  
        </div>
      </div>
      <div class="content">
        <table>
            <h1>Sabores de Masas</h1>
            <div v-for="(tipo, index) in $store.state.masaSabores" :key="index">
              <input
                type="text"
                v-model="$store.state.masaSabores[index].nombre"
                value="$store.state.masaSabores[index].nombre"
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
  name: 'SaborMasa',
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
