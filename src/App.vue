<template>
<!-- PARENT -->
  <div id="app" :class="{inactiveMenu: !$store.state.menu}"> 
<!--     <template v-if="!$store.state.auth">
      <Login/>
    </template>
    <template v-if="$store.state.auth"> -->
    <template>
       <!-- HEADER -->
       <Header class="header"/>
       <!-- NAV -->
      <transition name="slide-fade">
       <div id="nav" v-if="$store.state.menu">
              <div class="menu">
                  <div class="principal">
                    <router-link class="parentLink" to="/">           Menu Principal </router-link>
                  </div>
                  <div class="mantenedores">
                    <h3> MANTENEDORES </h3>
                    <router-link class="childLink"  to="/tipomasa">   Tipo Masa      </router-link>
                    <router-link class="childLink"  to="/sabormasa">  Sabor Masa     </router-link>
                    <router-link class="childLink"  to="/sabortorta"> Sabor Torta    </router-link>
                    <router-link class="childLink"  to="/torta">      Torta          </router-link>
                  </div>
              </div>
       </div>
      </transition>
       <!-- OPTION -->
      <div id="opcion">
       <router-view></router-view>
      </div>
    </template>
  </div>
</template>
<script>
import Header from './components/Header.vue';
import Login  from './components/auth/Login';
export default {
  components: {
    Header,
    Login
  }
}
</script>
<style lang="scss">
  body{
    height:100vh;
    background-color: rgb(241, 241, 241);
    overflow-y: hidden;
    margin: 0 auto !important;
  }
  a, a:focus, a:active{
    text-transform: inherit;
    outline: none !important;
    text-decoration: none !important;
  }
  #app {
    align-items: start;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      'header header header header header header'
      'nav opcion opcion opcion opcion opcion';
    max-height:100vh;
    #nav, #opcion {
      margin-top:52px;
    }
  }
  .header{
    grid-area: header;
    justify-self: center;
    align-self: start;
    position:absolute;top:0 !important;margin-top:0 !important;left:0;
    text-align: center;
    width:100vw;
  }
  #nav a.router-link-exact-active { color:black !important; }

  #nav {
    grid-area: nav;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(12, 1fr);
    justify-self: start;  
    box-shadow: 2px 0px 0px 0px #000000;
    height:100vh;
    align-items: start;
    .menu{
      width:230px;
      display: 0;
      position: relative;
      left:0 !important;
      display: grid;
      justify-items:stretch;
      align-items: start;
      border-bottom: 1px solid rgb(148, 143, 143);
      padding-bottom: 15px;
      .principal {
        background-color: rgb(191, 191, 191);
        color:black !important;
        height:50px;
        .parentLink { 
          padding-top:10px;
          
         }
      }
    }
    .principal, .mantenedores{
      display: grid;
      align-items: start;
      grid-template-columns: 1fr;
      padding-left: 10px;
    }
    .mantenedores{
      h3{
        font-size:15px;
      }
    }
    .childLink::before{
      content: "> ";
      font-weight: bolder;
    }
    a {
      font-weight: bold;
      color: #2c3e50;
      margin: 5px;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  .mantenedores h3{
    font-size: 20px;
  }
  #opcion {
    grid-area: opcion;
    margin-top: 30px;
    margin-left: 50px;
  }
  .slide-fade-enter-active {
    transition: all .1s ease;
  }
  .slide-fade-leave-active {
    transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to{
    transform: translateX(-10px);
    opacity: 0;
  }
  .inactiveMenu {
      transition: margin-left .4px ease;
      margin-left:-200px;
  }
</style>
