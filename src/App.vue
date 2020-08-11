<template>
<!-- PARENT -->
  <div id="app"> 
    <template v-if="!$store.state.auth">
      <Login/>
    </template>
    <template v-if="$store.state.auth">
       <!-- HEADER -->
       <Header class="header"/>
       <!-- NAV -->
       <div id="nav">
         <div class="menu">
             <div class="principal">
               <router-link class="parentLink" to="/">           Dashboard   </router-link>
             </div>
             <div class="mantenedores">
               <h3> MANTENEDORES </h3>
               <router-link class="childLink"  to="/tipomasa">   Tipo Masa   </router-link>
               <router-link class="childLink"  to="/sabormasa">  Sabor Masa  </router-link>
               <router-link class="childLink"  to="/sabortorta"> Sabor Torta </router-link>
               <router-link class="childLink"  to="/torta">      Torta       </router-link>
             </div>
         </div>
       </div>
       <!-- OPTION -->
      <div id="option">
       <router-view></router-view>
      </div>
    </template>
  </div>
</template>
<script>
import Header from './components/Header.vue';
import Login  from './components/auth/Login';
export default {
  name: 'App',
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
      'nav option option option option option';
    height:100vh;
  }
  .header{
    grid-area: header;
    justify-self: center;
    width:100vw;
    box-shadow: 0px 2px 1px 0px #000000;
  }
  #nav {
    grid-area: nav;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(12, 1fr);
    justify-self: center;  
    padding: 10px;
    box-shadow: 2px 0px 0px 0px #000000;
    height:100vh;
    align-items: start;
    .menu{
      height: 40vh;
      width:160px;
      display: 0;
      position: relative;
      left:0;
    }
    .principal, .mantenedores{
      display: grid;
      align-items: start;
      grid-template-columns: 1fr;
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
  #option {
    grid-area: option;
    margin-top: 30px;
    margin-left: 50px;
  }
</style>
