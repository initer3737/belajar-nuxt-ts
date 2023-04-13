<script lang="ts" setup>
useTitle('contact')
    definePageMeta({
        layout:'custom',
        middleware:'auth'
    })
    const mydatas=usePaprobath()
</script>
<template>
   <ClientOnly>
        <!-- hanya dirender di client -->
        i am contacts page!
   </ClientOnly>
   <h3>try</h3>
   <p>banners</p>
    <ol v-for="data in mydatas">
        <li> {{ data.value }}</li>
    </ol>
</template>