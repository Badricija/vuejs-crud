<template>
  <RouterLink to="/list" class="btn btn-dark">Go back to list</RouterLink>

  <div class="container mt-4 w-50">
    <form @submit.prevent="updateCoupe">
      <legend >Lets edit this coupe</legend>
      <div class="mb-3">
        <label for="txtmake" class="form-label">Make</label>
        <input
          type="text"
          v-model="coupeUpdate.make"
          class="form-control"
          id="txtmake"
        />
      </div>
      <div class="mb-3">
        <label for="txtseries" class="form-label">Series</label>
        <input
          type="text"
          v-model="coupeUpdate.series"
          class="form-control"
          id="txtseries"
        />
      </div>
      <div class="mb-3">
        <label for="txtimage" class="form-label">Image URL</label>
        <input
          type="text"
          v-model="coupeUpdate.image"
          class="form-control"
          id="txtimage"
        />
      </div>
      <div class="mb-3">
        <label for="txtdescription" class="form-label">Description</label>
        <input
          type="text"
          v-model="coupeUpdate.description"
          class="form-control"
          id="txtdescription"
        />
      </div>
      <div class="mb-3">
        <label for="txtyear" class="form-label">Year</label>
        <input
          type="text"
          v-model="coupeUpdate.year"
          class="form-control"
          id="txtyear"
        />
      </div>
      <div class="mb-3">
        <label for="txtengine" class="form-label">Engine</label>
        <input
          type="text"
          v-model="coupeUpdate.engine"
          class="form-control"
          id="txtengine"
        />
      </div>
      <div class="mb-3">
        <label for="txtchassis" class="form-label">Chassis</label>
        <input
          type="text"
          v-model="coupeUpdate.chassis"
          class="form-control"
          id="txtchassis"
        />
      </div>
      <div class="mb-3">
        <label for="txtpower" class="form-label">Power</label>
        <input
          type="text"
          v-model="coupeUpdate.power"
          class="form-control"
          id="txtpower"
        />
      </div>
      <div class="mb-3">
        <label for="txtgearbox" class="form-label">Gearbox</label>
        <input
          type="text"
          v-model="coupeUpdate.gearbox"
          class="form-control"
          id="txtgearbox"
        />
      </div>
      <UpdateAlert />
    </form>
  </div>
</template>
<script setup lang="ts">
import axios from "axios";
import { reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import UpdateAlert from "../alert/UpdateAlert.vue";
 
let coupeUpdate = reactive({
  id: 0,
  make: '',
  series: '',
  chassis: '',
  year: '',
  engine: '',
  power: '',
  gearbox: '',
  image: '',
  description: ''
});
 
const router = useRouter();
const route = useRoute();
 
onMounted(() => {
  axios
    .get(`http://localhost:3000/list/${route.params.id}`)
    .then((response) => {
      coupeUpdate.id = response.data.id;
      coupeUpdate.make = response.data.make;
      coupeUpdate.series = response.data.series;
      coupeUpdate.image = response.data.image;
      coupeUpdate.chassis = response.data.chassis;
      coupeUpdate.power = response.data.power;
      coupeUpdate.description = response.data.description;
      coupeUpdate.engine = response.data.engine;
      coupeUpdate.gearbox = response.data.gearbox;
      coupeUpdate.year = response.data.year;

    });
});
 
const updateCoupe = () => {
  axios.put(`http://localhost:3000/list/${route.params.id}`, coupeUpdate).then(() => {
    router.push("/list");
  });
};


</script>