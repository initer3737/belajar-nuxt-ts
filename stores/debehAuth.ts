import { defineStore } from "pinia";
import { computed,reactive } from "vue";

export const debehAuth=defineStore('authdebeh',()=>{
    const debeh=reactive({
        username:'admin',
        password:'admin',
        token:false
    })

        type Tstatus={
            username:string,
            password:string,
        }
    const AuthAttempt=({username,password}:Tstatus):boolean=>{
            const autentifikatsi=debeh
        return autentifikatsi.password === password && autentifikatsi.username === username;
    }
    
    const succLogin=()=>{
        debeh.token=true;
    }
    const getToken=computed(()=>debeh.token)
    const setToken=(value:boolean)=>debeh.token=value
    const getDatas=computed(()=>{
        return {
            username:debeh.username,
            password:debeh.password,
        }
    })
    
    return { AuthAttempt,succLogin,getToken,setToken,getDatas }
})