<script setup>

import { ref } from 'vue'
import BackEndService from '../BackEndService'

const showCreationForm = ref(false);

const props = defineProps({
  firstname: String,
  name: String,
  email: String
})

defineEmits(['update:firstname', 'update:name', 'update:email', 'create'])

function showAndClearForm(){
  /* Si le formulaire est clos c'est soit qu'il n'a jamais été ouvert, soit qu'il a été fermé par le Emit, 
  donc les données ont été envoyées vers l'API */
  BackEndService.addCandidat(name, firstname, email)
  showCreationForm.value = true;
  props.firstname = '';
  props.name = '';
  props.email = '';

}

</script>

<template>
<div class="container">
        <div class="d-flex gap-2 py-3" v-if="showCreationForm">
          <form action="" @submit.prevent="onSubmit">
            <div class="row">
              <div class="col">
                <input class="form-control" type="text" placeholder="NOM" :value="name" @input="$emit('update:name', $event.target.value)">
              </div>
              <div class="col">
                <input class="form-control" type="text" placeholder="Prénom" :value="firstname" @input="$emit('update:firstname', $event.target.value)">
              </div>
              <div class="col">
                <input class="form-control " type="email" placeholder="email" :value="email" @input="$emit('update:email', $event.target.value)">
              </div>
              <div class="col">
                <button class="btn btn-outline-primary" @click="$emit('create');showCreationForm=false">Ajouter</button>
              </div>
            </div>
          </form>
        </div>
        <div class="d-flex gap-2 py-3" v-if="!showCreationForm">
          <button type="button" class="btn btn-outline-primary" @click="showAndClearForm">Nouveau candidat</button>
        </div>
      </div>
</template>