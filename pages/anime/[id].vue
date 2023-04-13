<script setup>
useTitle('anime')
definePageMeta({
        middleware:'auth'
    })
</script>
<template>
    i am anime with id={{ $route.params.id }}!
</template>