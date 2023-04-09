<script setup>
import { useRoute } from 'vue-router';
const {id}=useRoute().params
const { data: users } = await useFetch(`https://jsonplaceholder.typicode.com/users/${id}`)
</script>
<template>
    <li>name | id</li>
    <li>
        {{ users.name }}
                |
        {{ users.id }}
    </li>
</template>