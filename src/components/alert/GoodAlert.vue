<template>
  <div>
    <button @click="handleAlertClick" class="btn btn-dark">Add</button>
  </div>
</template>

<script lang="ts">
import Swal from 'sweetalert2'
export default {
  name: 'SweetDemo',
  methods: {
    handleAlertClick() {
      Swal.fire({
        title: 'Congrats on adding new coupe to the list',
        icon: "success",
        
        showClass: {
          popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
        },
        hideClass: {
          popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
        }
      })
    }
  }
}
</script>
