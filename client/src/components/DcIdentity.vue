<script setup>
defineProps({
  firstname: {type: String, required: true},
  name: {type: String, required: true},
  email: {type: String, required: true}
})
</script>

<template>
  <div class="mb-3">
        <div class="row dc-section">
          <div class="col">
            <div class="input-group">
              <span class="input-group-text">Nom et prénom</span>
              <input type="text" :value="name" aria-label="First name" class="form-control" disabled>
              <input type="text" :value="firstname" aria-label="Last name" class="form-control" disabled>
            </div>
          </div>
          <div class="col">
            <input type="email" :value="email" aria-label="Email" class="form-control" disabled>
          </div>
        </div>
      </div>
</template>

<style scoped>
</style>
