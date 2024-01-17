<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheNavBar from './components/navbar/TheNavBar.vue';
</script>

<template>
  <header>

    <div class="wrapper">

      <nav>
        <TheNavBar />
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
