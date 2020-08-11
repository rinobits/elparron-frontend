<template>
    <div class="container">
        <div class="errorMsg" v-if="error">
            <h2>Usuario o contraseña inválida</h2>
        </div>
        <div id="login">
            <form
                action
                @submit.prevent="login({username, password})">
                <div class="loginCard">
                    <div class="logo">
                        <img class="imgLogo" src="../../assets/logo.png"/>
                    </div>
                    <div class="inputs">
                        <div class="login">
                            <input
                                v-model="username"
                                name="Usuario"
                                label="Login"
                                type="text"
                                placeholder="Login"/>
                        </div>
                        <div class="pwd">
                            <input
                                v-model="password"
                                name="Contrasena"
                                label="Password"
                                type="password"
                                placeholder="Password"/>
                        </div>
                        <div class="submit">
                            <button type="submit" value="login">
                            <input type="hidden" v-model="error"/>
                                Ingresar
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    import auth from "./auth";
    export default {
        data: () => ({
            username: "",
            password: "",
            error: false
        }),
        methods: {
            async login(){
                try {
                    const token = await auth.login(this.username, this.password);
                    localStorage.setItem('accessToken', token);
                } catch (error) {
                    this.error = true;
                    setTimeout(() => {
                        this.error = !error;
                    }, 2000);
                }
            },
        }
    };
</script>
<style scoped lang="scss">
body {
    overflow-y:hidden !important;
    margin:0 !important; 
}
.container{
    width: 100vw;
    height:100vh;
    position: fixed;
    background-color: rgb(207, 207, 207);
    overflow-y: hidden !important;
    box-sizing: border-box;
}
    #login {
        display:       grid;
        align-items:   center;
        grid-template-rows: repeat(3, 1fr);
        justify-items: center;
        
        form {
            grid-row: 2 / 3;
            display: grid;
            .loginCard {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: 1fr;
                grid-template-areas: 
                    'logo inputs';
                border: 4px solid white;
                height:170px;
                padding: 20px 10px;
                .logo {
                    grid-area: logo;
                    justify-self: center;
                    .imgLogo { width:130px; margin-top:20px}
                }
                .inputs {
                    grid-area: inputs;
                    display:   grid;
                    grid-template-columns: 1fr;
                    grid-template-rows:    repeat(3, 1fr);
                    div {
                        display: grid;
                        align-items: center;
                        justify-items: center;
                        input {
                            justify-self: center;
                            height: 32px;
                            width: 70%;
                            grid-row: 1 / 4;
                            text-align: center;
                        }
                        button {
                            width: 74%;
                            height: 38px;
                            border-radius: none;
                            border:none;
                            color:white;
                            font-weight: bolder;
                            background-color:rgb(9, 255, 0);
                        }
                    }
                }
            }

        }
    }
    .errorMsg {
        position: absolute;
        top:10px;
        left:20%;
        width:50vw;
        height:50px;
        text-justify: center !important;
        font-size:14px;
        border-radius: 5px;
        color:white;
        font-weight: 100;
        border:1px solid rgba(255, 255, 255, 0.616);
        background-color:rgba(255, 0, 0, 0.582);
        position: absolute; 
        left: 0; 
        right: 0; 
        margin-left: auto; 
        margin-right: auto; 
        h2 {
            align-self: center;
            text-align: center;
            justify-self: center;
            text-justify: center;
        }
    }
</style>