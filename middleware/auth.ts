export default defineNuxtRouteMiddleware((to,from)=>{
    if (to.path !== 'contacts') {
        return navigateTo('/')
      }
})