<template>
  <div id="header">
      <div class="left">
        <div class="menu" @click="hideMenu">
          <img src="../assets/icons/open-menu.png"/>
        </div>
      </div>
      <div class="right">
        <div class="dashboard">
          <img src="../assets/icons/progress.png"/>
        </div>
        <div class="usuario">
          <img src="../assets/icons/user.png"/>
        </div>
        <div class="configuracion">
          <img src="../assets/icons/gear.png"/>
        </div>
      </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Header',
  methods: {
    ...mapMutations([
      'hideMenu'
    ])
  }
}
</script>
<style scoped lang="scss">
    #header{
        box-shadow: 0px .7px 1.8px 0px #ff1919;
        text-transform: uppercase;
        align-items: center;
        background-color: rgb(42, 61, 78);
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: repeat(10, 1fr);
        height: 50px;
        img { width: 20px; }
    }
    .left {
      grid-column:  1 / 2;
      display:      grid;
      justify-self: start;
      margin-left:  20px;
      grid-template-rows:    1fr;
      grid-template-columns: repeat(1, 1fr);
      cursor:pointer;
    }
    .right {
      grid-column: 10 / 11;
      display:     grid;
      grid-template-rows:    1fr;
      grid-template-columns: repeat(3,1fr);
      cursor:pointer;
    }

</style>
