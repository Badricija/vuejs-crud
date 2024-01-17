
<template>
  <RouterLink to="/list" class="btn btn-dark">Go back to list</RouterLink>

  <div class="container mt-4 w-50">
    <form @submit.prevent="addCoupe">
      <legend >Add Coupe</legend>
      <div class="mb-3">
        <label for="txtmake" class="form-label">Make</label>
        <input
          type="text"
          v-model="newCoupe.make"
          class="form-control"
          id="txtmake"
        />
      </div>
      <div class="mb-3">
        <label for="txtseries" class="form-label">Series</label>
        <input
          type="text"
          v-model="newCoupe.series"
          class="form-control"
          id="txtseries"
        />
      </div>
      <div class="mb-3">
        <label for="txtimage" class="form-label">Image URL</label>
        <input
          type="text"
          v-model="newCoupe.image"
          class="form-control"
          id="txtimage"
        />
      </div>
      <div class="mb-3">
        <label for="txtdescription" class="form-label">Description</label>
        <input
          type="text"
          v-model="newCoupe.description"
          class="form-control"
          id="txtdescription"
        />
      </div>
      <div class="mb-3">
        <label for="txtyear" class="form-label">Year</label>
        <input
          type="text"
          v-model="newCoupe.year"
          class="form-control"
          id="txtyear"
        />
      </div>
      <div class="mb-3">
        <label for="txtengine" class="form-label">Engine</label>
        <input
          type="text"
          v-model="newCoupe.engine"
          class="form-control"
          id="txtengine"
        />
      </div>
      <div class="mb-3">
        <label for="txtchassis" class="form-label">Chassis</label>
        <input
          type="text"
          v-model="newCoupe.chassis"
          class="form-control"
          id="txtchassis"
        />
      </div>
      <div class="mb-3">
        <label for="txtpower" class="form-label">Power</label>
        <input
          type="text"
          v-model="newCoupe.power"
          class="form-control"
          id="txtpower"
        />
      </div>
      <div class="mb-3">
        <label for="txtgearbox" class="form-label">Gearbox</label>
        <input
          type="text"
          v-model="newCoupe.gearbox"
          class="form-control"
          id="txtgearbox"
        />
      </div>
      <GoodAlert />
    </form>
  </div>
</template>
<script setup lang="ts">
import axios from 'axios';
import { reactive} from 'vue'
import { useRouter } from 'vue-router';
import GoodAlert from '../alert/GoodAlert.vue'

let newCoupe = reactive({
  make: '',
  series: '',
  chassis: '',
  year: '',
  engine: '',
  power: '',
  gearbox: '',
  image: '',
  description: ''
})
const router = useRouter();

const addCoupe = () => {
  axios.post('http://localhost:3000/list', newCoupe)
  .then(() => {
    router.push("/list")
   
  })
}
</script>
