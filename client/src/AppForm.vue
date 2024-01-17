<script setup>

import { reactive } from 'vue'

import Identity from './components/DcIdentity.vue'
import Ability from './components/DcAbility.vue'
import Language from './components/DcLanguage.vue'
import Certification from './components/DcCertification.vue'
import Experience from './components/DcExperience.vue'

// XP Pro
var experience = {
  start: "2021-03-16", end: "2023-11-03",
  title: "Développeur JEE", company: "Proxiad",
  context: "Lorem ipsum",
  technical_env: "JEE 8.1 - SprintBoot - Hibernate",
  tasks: ["Spécification", "Développements", "Tests unitaires"]
};

var project = {
  title: "Expérimentation Ionic/PWA", period_info: "2021 / 6mois",
  context: "Réalisation d'une application mobile pour jouer aux echecs blablabla",
  technical_env: "Ionic v7.0\nAngularJS\nBootstrap",
  tasks: ["Lire la documentation", "Développement", "Test de sécurité", "GooglePlay Store"]
};

const formData = reactive({
   name: "Stark", firstname: "Arya", email: "arya@winterfell.got",
  technicalAbilities: ["SCRUM", "Java"],
  functionalAbilities: ["Banking", "CMS", "CRM & ERP"],
  languages: ["français", "anglais"],
  certifications: [{year: 2021, title: "CISCO"}, {year: 2018, title: "CNA5"}],
  bref: "lorem ipsum dolor",
  experiences: [experience],
  projects: [project],
  skills: {
    "environments": "Java JEE",
    "languages": "Java JEE",
    "databases": "PostgreSQL, MySQL",
    "tools": "Zabbix, Nagios",
    "systems": "Linux RHEL8",
  }
})

function saveForm(){
  /* Comp fonctionnelles */
  var domNodes = document.querySelectorAll("#fonct input");
  var nodes = [...domNodes]; 
  formData.functionalAbilities = nodes.map((x) => x.value).filter(function(i){return i.trim() != "";}); 

  /* Comp techniques */
  domNodes = document.querySelectorAll("#techn input");
  nodes = [...domNodes];
  formData.technicalAbilities = nodes.map((x) => x.value).filter(function(i){return i.trim() != "";});

  /* Diplomes */
  var certifications = [];
  domNodes = document.querySelectorAll("#certs div.row");
  nodes = [...domNodes];
  for (let i=0; i< nodes.length; i++) {
    var year = nodes[i].childNodes[0].childNodes[0].value;
    var label = nodes[i].childNodes[1].childNodes[0].value;
    if(year.trim() != "" && label.trim() != ""){
      certifications.push({year: year, title: label})
    }
  }
  formData.certifications = certifications;

  /* Langues */
  domNodes = document.querySelectorAll("#langs input");
  nodes = [...domNodes];
  formData.languages = nodes.map((x) => x.value).filter(function(i){return i.trim() != "";});

  /* XP */
  var experiencesPro = [];
  domNodes = document.querySelectorAll("#xps .xp");
  var allNodes = [...domNodes]; // converts a Node list to an array
  nodes = allNodes.filter(function(i){return i.id == ""}) // remove ghost template which have ID

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

  /* Projects perso */
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

  formData.projects = personalProjects;

  /* Synthese et EnBref sont directement en v-model */
}

function cleanInterface(){
  /* Delete all inputs dc-tmp added to DOM */
  var uselessItems = document.querySelectorAll(".dc-tmp");
  Array.prototype.forEach.call(uselessItems, function(node){
    node.parentNode.removeChild(node);
  });
}

function save(){
  saveForm();
  cleanInterface();
  // use axios
  // TODO send to BO with flag partial
}


function saveAndClose(){
  saveForm();
  // TODO send to BO with flag completed
}

</script>

<template>
  <div class="container">
    <img src="./assets/logo_proxiad.png" class="rounded float-start" id="logo" alt="Logo Proxiad">
    <p class="h2 dc-page-title">Dossier de compétences</p>
  </div>

  <div class="container dc-form">
    <form action="" @submit.prevent="onSubmit">
      <Identity :name="formData.name" :firstname="formData.firstname" :email="formData.email" />

      <div class="row dc-section">
        <div class="col">
          <Ability title="Compétences fonctionnelles" uid="fonct" v-model:abilities="formData.functionalAbilities" />
        </div>
        <div class="col">
          <Ability title="Compétences techniques" uid="techn" v-model:abilities="formData.technicalAbilities" />
        </div>
      </div>

      <div class="row dc-section">
        <div class="col">
          <Certification v-model:certifications="formData.certifications"/>
        </div>
        <div class="col">
          <Language v-model:languages="formData.languages"/>
        </div>
      </div>

      <Experience v-model:experiences="formData.experiences"/>

      <div class="container dc-section">
        <div class="row align-items-center dc-syn-item">
          <div class="col col-2"><label class="col-form-label" for="syn_env">Environnement</label></div>
          <div class="col col-8"><input class="form-control" id="syn_env" v-model="formData.skills.environments"></div>
        </div>
        <div class="row align-items-center dc-syn-item">
          <div class="col-2"><label class="col-form-label" for="syn_lang">Languages</label></div>
          <div class="col-8"><input class="form-control" id="syn_lang" v-model="formData.skills.languages"></div>
        </div>
        <div class="row align-items-center dc-syn-item">
          <div class="col-2"><label class="col-form-label" for="syn_bdd">SGBD</label></div>
          <div class="col-8"><input class="form-control" id="syn_bdd" v-model="formData.skills.databases"></div>
        </div>
        <div class="row align-items-center dc-syn-item">
          <div class="col-2"><label class="col-form-label" for="syn_out">Outils</label></div>
          <div class="col-8"><input class="form-control" id="syn_out" v-model="formData.skills.tools"></div>
        </div>
        <div class="row align-items-center dc-syn-item">
          <div class="col-2"><label class="col-form-label" for="syn_sys">Systèmes</label></div>
          <div class="col-8"><input class="form-control" id="syn_sys" v-model="formData.skills.systems"></div>
        </div>
      </div>

      <div class="row dc-section">
        <div class="col">
          <h5>En bref</h5>
          <textarea class="form-control dc-ta-bref" placeholder="..." v-model="formData.bref"></textarea>
        </div>
      </div>

      <div class="row dc-section">
        <div class="col text-center">
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-warning" @click="save">Enregistrer</button>
            <button type="button" class="btn btn-success" @click="saveAndClose">Marquer comme finalisé</button>
          </div>
        </div>
      </div>

    </form>
  </div>

</template>

<style>
#logo{margin: 5px 60px 5px 10px; max-height: 48px;}
.dc-page-title{padding-top: 17px; margin-bottom: 3rem;}
.dc-vlist{margin: 0.5rem 0rem}
.dc-section{margin-bottom: 3rem;}
form h5{font-variant: small-caps; font-weight: bold; color: #008cba;}
.dc-ta-bref{height: 6rem;}
.dc-syn-item{margin-bottom: 1rem;;}
.dc-syn-item label{font-weight: bold; color: #008cba;}
</style>
