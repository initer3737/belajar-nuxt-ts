<template>
   <div class="flex gap-3">
      <NuxtLink to="/">home</NuxtLink>
      <NuxtLink :to="{name:'about'}">about</NuxtLink>
      <NuxtLink :to="{name:'contact'}">contact</NuxtLink>
      <NuxtLink :to="{name:'users'}">users</NuxtLink>
      <NuxtLink :to="`users/1`">user id 1</NuxtLink>
    </div>
    <slot />
    <h2><a href="http://initer3737.github.io" target="_blank" rel="noopener noreferrer">my portofolio</a></h2>
</template>