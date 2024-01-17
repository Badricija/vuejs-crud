<template>
  <div class="list">
    <div class="card">
      <div class="card-header">
        <h4>List</h4>
        <RouterLink to="/create" class="btn btn-dark">Create new post</RouterLink>
      </div>
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>MAKE</th>
              <th>SERIES</th>
              <th>CHASSIS</th>
              <th>YEAR</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="CoupeList in allCoupes" :key="CoupeList.id">
              <td>{{ CoupeList.id }}</td>
              <td>{{ CoupeList.make }}</td>
              <td>{{ CoupeList.series }}</td>
              <td>{{ CoupeList.chassis }}</td>
              <td>{{ CoupeList.year }}</td>
              <td>
                <RouterLink :to="{ path: '/view/' + CoupeList.id + '/edit' }" class="btn btn-dark">Edit post</RouterLink>
                <RouterLink :to="{ path: '/view/' + CoupeList.id}" class="btn btn-dark">View</RouterLink>
                <DeleteAlert @click="deleteCoupe(CoupeList.id)" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted } from 'vue'
import type Coupe from '../types/types'
import DeleteAlert from '../alert/DeleteAlert.vue';
const allCoupes = ref<Coupe[]>([])
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/list')
    allCoupes.value = response.data
  } catch (error) {
    console.error('Failed to fetch coupes:', error)
  }
})
const deleteCoupe = async (id) => {
  try {
    await axios.delete(`http://localhost:3000/list/${id}`)
    allCoupes.value = allCoupes.value.filter((coupe) => coupe.id !== id)
  } catch (error) {
    console.error(`Failed to delete coupe with id ${id}:`, error)
  }
}
</script>

<style scoped>
.btn {
  margin: 5px;
}
</style>
