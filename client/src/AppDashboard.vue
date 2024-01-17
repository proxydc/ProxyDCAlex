<script setup>

import { reactive } from 'vue'

import BoNewDc from './components/BoNew.vue'
import BoListItem from './components/BoListItem.vue'

/* TODO get data from WS */
var DcRows = [
  {name: 'A', firstname: 'Alexandra', id: 'xp47w5wzt8segz1zeldkvm', tags: [], status: 'En cours'},
  {name: 'B', firstname: 'Bob', id: 'o9n5r3ta0l2z2zijmiqwu', tags: ['Java'], status: 'Finalisé'},
  {name: 'C', firstname: 'Charlie', id: '0tx42yfwu9vdca07iqaup', tags: ['Cobol'], status: 'Finalisé'}
];

var newDcInfos = reactive({name: '', firstname: '', email:'', id: '', tags: [], status: 'Crée'});


function createDc(event){
  console.log("Add new Dc"+ event);
  var uuid = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  newDcInfos.id = uuid;
  // PUT to API
}

</script>

<template>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarToggler">
            <a class="navbar-brand" href="#">ProxyDC</a>
            
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Candidats</a>
              </li>
              <li>
                <a class="nav-link" aria-current="page" href="#">Employés</a>
              </li>
              <li>
                <a class="nav-link" aria-current="page" href="#">Archive</a>
              </li>
            </ul>

            <div class="nav me-auto">
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Rechercher</button>
              </form>
            </div>

            <div class="nav justify-content-end">
                <button type="button" class="btn btn-outline-danger">Se déconnecter</button>
            </div>

          </div>
        </div>
      </nav>

      <BoNewDc v-model:name="newDcInfos.name" v-model:firstname="newDcInfos.firstname" v-model:email="newDcInfos.email" @create="createDc"/>

      <div class="container">
        <div class="row">
          <div class="col">
            <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Prénom</th>
                    <th scope="col">Tags</th>
                    <th scope="col">Dossier de compétences</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody class="table-group-divider">

                  <!-- 
                    On affiche le dossier de compétence qui vient d'être crée en début de page pour sa visibilité
                    Au rechargement de la page il sera mélangé au reste et trié par ordre alphabetique
                   -->
                  <BoListItem v-if="newDcInfos.id" v-model:DcRow="newDcInfos"/>

                  <BoListItem
                    v-for="(dcRow, index) in DcRows"
                    :DcRow="dcRow"
                    :index="index"
                    :key="dcRow.id"
                  />
                </tbody>
              </table>
          </div>

        </div>
      </div>

</template>

<style>
</style>
