<script setup>

const props = defineProps(['abilities', 'title', 'uid'])
//const emit = defineEmits(['update:abilities'])

function addRow(){
  var container = document.getElementById(props.uid);
  var newInput = document.createElement("input");
  newInput.classList = "form-control dc-vlist dc-tmp";
  container.appendChild(newInput);
}

/*function saveData(){
  var domNodes = document.querySelectorAll("#"+ props.uid +" input");
  var nodes = [...domNodes]; // converts a Node list to an array
  var abilities = nodes.map((x) => x.value).filter(function(i){return i.trim() != "";}); //delete empty values (ES5 syntax for old browser)
  emit('update:abilities', abilities);
}*/

</script>

<template>
    <h5>{{ title }}</h5>
    <div :id="uid">
      <input v-for="(ability, index) in abilities" :value="ability" :key="index" class="form-control dc-vlist" type="text">
    </div>
    
    <button type="button" class="btn btn-outline-primary btn-sm" @click="addRow">Ajouter une compétence</button>
</template>