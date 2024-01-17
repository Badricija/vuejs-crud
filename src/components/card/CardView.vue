<template>
  <RouterLink to="/list" class="btn btn-light">Go back to list</RouterLink>

  <div class="single-view-card" v-if="singleCoupe">
    <img :src="singleCoupe.image" class="card-img-top" alt="Coupe Image" />
    <h2 class="title">{{ singleCoupe.make }} {{ singleCoupe.series }}</h2>
    <p class="description">{{ singleCoupe.description }}</p>
    <p class="engine">Engine: {{ singleCoupe.engine }}</p>
    <p class="year">Year: {{ singleCoupe.year }}</p>
    <p class="power">Power: {{ singleCoupe.power }}</p>
    <p class="chassis">Chassis: {{ singleCoupe.chassis }}</p>
    <p class="gearbox">Gearbox: {{ singleCoupe.gearbox }}</p>
  </div>
  <div v-else>Loading...</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import type Coupe from '../types/types'

const singleCoupe = ref<Coupe>()
const route = useRoute()

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:3000/list/${route.params.id}`)
    singleCoupe.value = response.data
  } catch (error) {
    console.error('Failed to show coupe', error)
  }
})
</script>

<style scoped>
.single-view-card {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
}

.card-img-top {
  grid-area: 1 / 1 / 5 / 3;
}
.title {
  grid-area: 1 / 3 / 2 / 5;
}
.description {
  grid-area: 2 / 3 / 3 / 4;
}
.engine {
  grid-area: 3 / 3 / 4 / 4;
}
.year {
  grid-area: 4 / 3 / 5 / 4;
}
.power {
  grid-area: 2 / 4 / 3 / 5;
}
.chassis {
  grid-area: 3 / 4 / 4 / 5;
}
.gearbox {
  grid-area: 4 / 4 / 5 / 5;
}
</style>
