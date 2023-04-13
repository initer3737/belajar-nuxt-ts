import { debehAuth } from "~~/stores/debehAuth";

export default defineNuxtRouteMiddleware((to,from)=>{
  if (debehAuth().getToken !== true) {
       return navigateTo('/login')
      }
      
})