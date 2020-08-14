<template>
  <div id="Torta">
      <div class="header">
        <div class="title">
          <h3>Tortas</h3>
        </div>
        <div class="buttons">
          <SucursalPicker whoCalls="Torta"    class="sucursal"/>
          <Buscar         class="buscar"      sucursal_id="1"  tableName="masatipo,masasabor,sabor,torta" method="getall" data="tortas"/>
          <Registrar      class="registrar"   sucursal_id="1"  tableName="Torta" method="update" data="tortas,masaTipos,masaSabores,sabores" />  
        </div>
      </div>
      <div class="content">
        <table>
            <h1>Tortas</h1>
            <div v-for="(torta, index) in $store.state.tortas" :key="index">
              <select v-model="torta.masaTipo_nombre">
                <option :value="masaTipo.nombre"   v-for="(masaTipo, index)  in $store.state.masaTipos"   :key="index" selected="torta.masaTipo_nombre">
                    {{ masaTipo.nombre }}
                  </option>
              </select>
              <select v-model="torta.masaSabor_nombre">
                <option :value="masaSabor.nombre"  v-for="(masaSabor, index) in $store.state.masaSabores" :key="index" selected="torta.masaSabor_nombre">
                    {{ masaSabor.nombre }}
                  </option>
              </select>
              <select v-model="torta.sabor_nombre">
                <option :value="sabor.nombre"      v-for="(sabor, index)     in $store.state.sabores"     :key="index" selected="torta.sabor_nombre">
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
  export default {
    name: 'Torta',
    components: {
      SucursalPicker,
      Buscar,
      Registrar
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
