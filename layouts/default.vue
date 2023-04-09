<template>
   <div class="flex gap-3">
      <NuxtLink to="/">home</NuxtLink>
      <NuxtLink :to="{name:'about'}">about</NuxtLink>
      <NuxtLink :to="{name:'contact'}">contact</NuxtLink>
      <NuxtLink :to="{name:'anime'}">animes</NuxtLink>
      <NuxtLink :to="`anime/1`">anime id 1</NuxtLink>
    </div>
    <slot />
</template>