<script setup>

const props = defineProps(['tasks'])
const emit = defineEmits(['update:tasks'])

function addRow(){
  var container = document.getElementById(props.uid);
  var newInput = document.createElement("input");
  newInput.classList = "form-control dc-vlist dc-tmp";
  container.appendChild(newInput);
}

</script>

<template>
    <div>
      <input v-for="task in tasks" :value="task" :key="index" class="form-control dc-vlist" type="text">
    </div>
    
    <button type="button" class="btn btn-outline-primary btn-sm" @click="addRow">Ajouter une ligne</button>
</template>