<script setup>

//const props = defineProps(['certifications'])
//const emit = defineEmits(['update:certifications'])

function addRow(){
  var existingCertsNodes = document.querySelectorAll("#certs div.row");
  var newNode = existingCertsNodes[0].cloneNode(true);
  newNode.classList = "row dc-tmp";
  newNode.childNodes[0].childNodes[0].value=""; // clean value for year
  newNode.childNodes[1].childNodes[0].value=""; // clean value for title
  document.getElementById("certs").appendChild(newNode);
}

/*function saveData(){
  var certifications = [];
  var domNodes = document.querySelectorAll("#certs div.row");
  var nodes = [...domNodes]; // converts a Node list to an array
  for (let i=0; i< nodes.length; i++) {
    var year = nodes[i].childNodes[0].childNodes[0].value;
    var label = nodes[i].childNodes[1].childNodes[0].value;
    if(year.trim() != "" && label.trim() != ""){
      certifications.push({year: year, title: label})
    }
  }

  emit('update:certifications', certifications);
}*/

</script>

<template>
    <h5>Diplômes / Certifications</h5>

    <div id="certs">
      <div class="row" v-for="(cert, index) in certifications" :key="cert">
        <div class="col col-3">
          <input class="form-control dc-vlist" type="number" min="1970" max="2030" placeholder="Année" :value="cert.year" :key="index">
        </div>
        <div class="col col-9">
          <input class="form-control dc-vlist" type="text" placeholder="Libellé" :value="cert.title" :key="index">
        </div>
      </div>
    </div>

    <button type="button" class="btn btn-outline-primary btn-sm" @click="addRow">Ajouter un diplôme / une certification</button>
</template>
