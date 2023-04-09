<script lang="ts" setup>
    definePageMeta({
        layout:'custom'
    })
    const mydatas=usePaprobath()
</script>
<script lang="ts">
    definePageMeta({
        middleware:'auth'
    })
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