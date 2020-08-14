<template>
  <div id="TipoMasa">
      <div class="header">
        <div class="title">
          <h3>Tipos de Masas</h3>
        </div>
        <div class="buttons">
          <SucursalPicker whoCalls="TipoMasa" class="sucursal"/>
          <Buscar         class="buscar"      sucursal_id="1" tableName="masaTipo" method="getall" data="masaTipos"/>
          <Registrar      class="registrar"   sucursal_id="1" tableName="masaTipo" method="update" data="masaTipos"/>  
        </div>
      </div>
      <div class="content">
        <table>
            <h1>Tipos de Masas</h1>
            <div v-for="(tipo, index) in $store.state.masaTipos" :key="index">
              <input
                type="text"
                v-model="$store.state.masaTipos[index].nombre"
                value="$store.state.masaTipos[index].nombre"
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
  name: 'TipoMasa',
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
