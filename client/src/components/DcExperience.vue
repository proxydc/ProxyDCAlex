<script setup>

import { ref } from 'vue'

defineProps({
  experiences: {type: Array, required: false}, // Professionnal
  projects: {type: Array, required: false} // Personnal
})

//const emit = defineEmits(['update:experiences', 'update:projects'])

const xpAddedCounter = ref(0);

function addRowXpPro(){
  var newNode = document.getElementById("ghost_xp_pro").cloneNode(true);
  newNode.querySelector(".dc-tasklist").id = "xp_tasklist_"+ xpAddedCounter.value;
  console.log("Add XP with id")
  newNode.querySelector(".dc-tasklist>button").onclick = "addTaskItem("+ xpAddedCounter.value +")";
  newNode.id = ""; newNode.style = "";
  newNode.classList = "xp dc-tmp";
  document.getElementById("xps").appendChild(newNode);
  xpAddedCounter.value ++;
}

function addRowProjectPerso(){
  var newNode = document.getElementById("ghost_perso_project").cloneNode(true);
  // TODO add button onclick
  newNode.id = ""; newNode.style = "";
  newNode.classList = "project dc-tmp";
  document.getElementById("xps").appendChild(newNode);
  xpAddedCounter.value ++;
  console.log(xpAddedCounter.value);
}

/*function addTaskItem(xpNumber){
  console.log(xpNumber);
  alert(xpNumber);
}*/

/*function saveData(){
  var experiencesPro = [];
  var domNodes = document.querySelectorAll("#xps .xp");
  var allNodes = [...domNodes]; // converts a Node list to an array
  var nodes = allNodes.filter(function(i){return i.id == ""}) // remove ghost template which have ID

  for (let i=0; i< nodes.length; i++) {
    var startValue = nodes[i].childNodes[0].childNodes[0].childNodes[1].value;
    var endValue = nodes[i].childNodes[0].childNodes[1].childNodes[1].value;
    var titleValue = nodes[i].childNodes[0].childNodes[2].childNodes[1].value;
    var companyValue = nodes[i].childNodes[0].childNodes[3].childNodes[1].value;
    var contextValue = nodes[i].childNodes[1].childNodes[0].childNodes[1].value;
    var technicalenvValue = nodes[i].childNodes[2].childNodes[1].childNodes[1].value;
    
    var taskList = nodes[i].childNodes[2].childNodes[0].childNodes;
    var taskValues = [];
    for (let t=0; t< taskList.length; t++) {
      if(taskList[t].nodeName == "INPUT" && taskList[t].value){
        taskValues.push(taskList[t].value);
      }
    }
    
    var currentExperience = {
      start: startValue, 
      end: endValue, 
      title: titleValue, 
      company: companyValue, 
      context: contextValue, 
      technical_env: technicalenvValue,
      tasks: taskValues
    };
    experiencesPro.push(currentExperience)
  }
  
  var personalProjects = [];
  domNodes = document.querySelectorAll("#xps .project");
  allNodes = [...domNodes];
  nodes = allNodes.filter(function(i){return i.id == ""}) // remove ghost template which have ID

  for (let i=0; i< nodes.length; i++) {
    var periodValue = nodes[i].childNodes[0].childNodes[0].childNodes[1].value;
    titleValue = nodes[i].childNodes[0].childNodes[1].childNodes[1].value;
    contextValue = nodes[i].childNodes[1].childNodes[0].childNodes[1].value;
    technicalenvValue = nodes[i].childNodes[2].childNodes[1].childNodes[1].value;
    
    taskList = nodes[i].childNodes[2].childNodes[0].childNodes;
    taskValues = [];
    for (let t=0; t< taskList.length; t++) {
      if(taskList[t].nodeName == "INPUT" && taskList[t].value){
        taskValues.push(taskList[t].value);
      }
    }
    
    var currentProject = {
      period: periodValue, 
      title: titleValue, 
      context: contextValue, 
      technical_env: technicalenvValue,
      tasks: taskValues
    };
    personalProjects.push(currentProject)
  }

  emit('update:experiences', experiencesPro);
  emit('update:projects', personalProjects);
}*/

</script>

<template>
    <div class="dc-section">
        <div class="col">
          <h5>Expériences professionnelles et personnelles</h5>
        </div>

        <div id="xps">
          <div class="xp" v-for="experience in experiences" :key="experience.id">
            <div class="row">
              <div class="col col-2">
                <label for="">De</label>
                <input type="date" :value="experience.start" id="" class="form-control" aria-label="Date de début">
              </div>
              <div class="col col-2">
                <label for="">A</label>
                <input type="date" :value="experience.end" id="" class="form-control" aria-label="Date de fin">
              </div>
              <div class="col">
                <label for="">Poste</label>
                <input type="text" :value="experience.title" id="" class="form-control" aria-label="Libellé du poste">
              </div>
              <div class="col">
                <label for="">Entreprise</label>
                <input type="text" :value="experience.company" id="" class="form-control" aria-label="Entreprise">
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="context">Contexte</label>
                <textarea class="form-control" placeholder="..." id="context" v-model="experience.context" />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="">Compétences/ Tâches</label>
                <input class="form-control dc-vlist" type="text" v-for="task in experience.tasks" :key="task">
              </div>
              <div class="col">
                <label for="envt">Environnement technique</label>
                <textarea class="form-control dc-ta-envt" placeholder="..." v-model="experience.technical_env" />
              </div>
            </div>
          </div>
          <div class="xp" id="ghost_xp_pro" style="display: none; /* Template for new XP */">
            <div class="row">
              <div class="col col-2">
                <label for="">De</label>
                <input type="date" name="" id="" class="form-control" aria-label="Date de début">
              </div>
              <div class="col col-2">
                <label for="">A</label>
                <input type="date" name="" id="" class="form-control" aria-label="Date de fin">
              </div>
              <div class="col">
                <label for="">Poste</label>
                <input type="text" name="" id="" class="form-control" aria-label="Libellé du poste">
              </div>
              <div class="col">
                <label for="">Entreprise</label>
                <input type="text" name="" id="" class="form-control" aria-label="Entreprise">
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="context">Contexte</label>
                <textarea class="form-control" placeholder="..." id="context"></textarea>
              </div>
            </div>
            <div class="row">
              <div class="col dc-tasklist">
                <label for="">Compétences/ Tâches</label>
                <input class="form-control dc-vlist" type="text" placeholder="" aria-label="">
                <input class="form-control dc-vlist" type="text" placeholder="" aria-label="">
                <input class="form-control dc-vlist" type="text" placeholder="" aria-label="">
                <input class="form-control dc-vlist" type="text" placeholder="" aria-label="">
                <button class="btn btn-outline-primary btn-sm">Ajouter une ligne</button>
              </div>
              <div class="col">
                <label for="envt">Environnement technique</label>
                <textarea class="form-control dc-ta-envt" placeholder="..."></textarea>
              </div>
            </div>
          </div>
          <div class="project" id="ghost_perso_project" style="display: none; /* Template for new project perso */">
            <div class="row">
              <div class="col col-4">
                <label for="">Période</label>
                <input type="text" class="form-control" aria-label="Période" placeholder="Depuis 2022, durant 6 mois, ...">
              </div>
              <div class="col">
                <label for="">Titre</label>
                <input type="text" name="" id="" class="form-control" aria-label="Libellé du poste">
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="context">Contexte</label>
                <textarea class="form-control" placeholder="..." id="context"></textarea>
              </div>
            </div>
            <div class="row">
              <div class="col dc-tasklist">
                <label for="">Tâches</label>
                <input class="form-control dc-vlist" type="text" placeholder="" aria-label="">
                <input class="form-control dc-vlist" type="text" placeholder="" aria-label="">
                <input class="form-control dc-vlist" type="text" placeholder="" aria-label="">
                <input class="form-control dc-vlist" type="text" placeholder="" aria-label="">
                <button class="btn btn-outline-primary btn-sm">Ajouter une ligne</button>
              </div>
              <div class="col">
                <label for="envt">Environnement technique</label>
                <textarea class="form-control dc-ta-envt" placeholder="..."></textarea>
              </div>
            </div>
          </div>
        </div>

        <div class="row text-center">
          <div class="col">
            <button type="button" class="btn btn-outline-primary btn-sm" @click="addRowXpPro">Nouvelle experience professionnelle</button>
          </div>
          <div class="col">
            <button type="button" class="btn btn-outline-warning btn-sm" @click="addRowProjectPerso">Nouvelle experience personnelle</button>
          </div>
        </div>
      </div>
</template>

<style scoped>
.dc-ta-envt{height: 9rem; margin: 0.5rem 0rem;}
.xp, .project{margin-bottom: 4em;}
</style>