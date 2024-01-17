
<script setup lang="ts"></script>

<template>

  <ul class="nav justify-content-end">
    <li class="nav-item">
      <RouterLink to="/" class="nav-link" aria-current="page">Home</RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink to="/create" class="nav-link">Add new coupe</RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink to="/list" class="nav-link">List of coupes</RouterLink>
    </li>
  </ul>

</template>
<style scoped>
.nav-link{
  color: #8D7E69;
}
</style>
