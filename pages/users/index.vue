<script setup>
definePageMeta({
        middleware:'auth'
    })
const { data: users } = await useFetch('https://jsonplaceholder.typicode.com/users')
</script>
<template>
    <li>name | id</li>
    <li v-for="data in users">
        {{ data.name }}
                |
        {{ data.id }}
    </li>
</template>