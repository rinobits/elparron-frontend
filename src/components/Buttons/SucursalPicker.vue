<template>
  <div id="SucursalPicker">
      <select class="button" name="sucursalPicker" id="sucursalPicker" v-model="sucursal_id">
          <option disabled value="">Sucursales</option>
              <option
                  v-for="(sucursal, index) in sucursales"
                  :key="index"
                  :value="$store.state.sucursal_id"
                  v-text="Sucursal">
              </option>
      </select>
  </div>
</template>
<script>
import { store }  from '../../store'
import axios      from 'axios';
export default {
  name: 'SucursalPicker',
  data: () => {
    return {
      uri:  process.env.VUE_APP_URI
    }
  },
  props: [
    'whoCalls'
  ],
  methods: {
    getSucursales(){
      /* must validate nested routes too */
      if(this.whoCalls == 'TipoMasa') this.whoCalls = 'masaTipo';
      if(this.whoCalls == 'SaborTorta') this.whoCalls = 'sabor';
      if(this.whoCalls == 'SaborMasa') this.whoCalls = 'masaSabor';
      const tableName = `${this.whoCalls}`;
      const method    = 'getall';
      const query     = '';
      const url       = `${this.uri}/${tableName}/${method}`;
      const config = {
          headers: {
              authorization: localStorage.getItem('accessToken')
          }
      };
      axios.get(url, config)
        .then(console.log)
        .catch(console.log)
    }
  },
  created(){
    this.getSucursales();
  }
}
</script>
<style scoped lang="scss">
</style>
