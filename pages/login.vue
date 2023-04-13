<script lang="ts">
import { debehAuth } from '~~/stores/debehAuth';
definePageMeta({
        middleware:['logged']
    })

export default {
    data(){
        return {
            defaultUsername:'admin',
            defaultPassword:'admin',
            username:'',
            password:'',
        }
    },
    methods:{
        Login(){
            const attempt=debehAuth()
            if(this.username.length >1 && this.password.length >1){
                const attempting={
                    username:this.username,
                    password:this.password
                }
                if(!attempt.AuthAttempt(attempting)){
                    alert('eto ne pravda!!')
                }else{
                    attempt.setToken(true)
                    this.$router.push('/')
                }
            }
        }
    },
    computed:{
        getUsername(){
            return debehAuth().getDatas.username
        },
        getPassword(){
            return debehAuth().getDatas.password
        },
    }
}

</script>
<template>
        <div class="flex flex-col gap-3 w-[320px] form-login">
            <h3 class="login">auth hint </h3>
            <hr>
            <h3 class="login">username:admin </h3>
            <h3 class="login">password:admin </h3>
            <hr>
            <h3 class="login">login </h3>
            <hr>
            <label for="username">username</label>
            <input type="text" id="username" placeholder="username" v-model="username">
            <!-- <hr> -->
            <label for="password">password</label>
            <input type="password" id="password" placeholder="password" v-model="password">
            <hr>
            <button @click="Login()">login</button>
        </div>
        <video src="~/assets/nature-104116.mp4" autoplay muted loop class="weejio-begeh"></video>
</template>

<style>
.weejio-begeh{
    width: 100vw;
    height: 100vh;
    inset: 0;
    position: absolute;
    object-fit: cover;
    object-position: center;
}
.form-login{
    z-index: 32;
    position: absolute;
    top: 0;
    right: 0;
    background: linear-gradient(45deg,rgba(30, 144, 255,.7), black);   
    padding: 25px 20px;
    border-radius: 6px;
    height: 100vh;
    display: flex;
    justify-content: center;
}
input{
    outline: none;
    background: transparent;
    border-bottom: 2px solid white;
    color:#fff;
    font-size: 21px;
    font-family: sans-serif;
    transition: all 1s;
}
input:focus{
    border-bottom: 2px  solid blue;
    animation:inputer alternate 1s;
}
@keyframes inputer {
    from{
        width: 40px;
    }
    to{
        width: 100%;
    }
}
label{
    font-size: 19px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.login{
    font-size: 24px;
    font-family: Georgia, 'Times New Roman', Times, serif;
}
button{
    transition: all .5s;
    font-size: 15px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
button:hover{
    border-bottom: 2px solid dodgerblue;
}
</style>