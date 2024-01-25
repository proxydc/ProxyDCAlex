<script>
import { ref } from "vue";
export default {
  props: {
    experiences: [],
    projects: [],
  },

  methods: {
    addRowXpPro() {
      var newNode = document.getElementById("ghost_xp_pro").cloneNode(true);
      newNode.querySelector(".dc-tasklist").id =
        "xp_tasklist_" + xpAddedCounter.value;
      console.log("Add XP with id");
      newNode.querySelector(".dc-tasklist>button").onclick =
        "addTaskItem(" + xpAddedCounter.value + ")";
      newNode.id = "";
      newNode.style = "";
      newNode.classList = "xp dc-tmp";
      document.getElementById("xps").appendChild(newNode);
      xpAddedCounter.value++;
    },
    addRowTaskXp() {
      var container = document.getElementById("taskxp");
      var newInput = document.createElement("input");
      newInput.classList = "form-control dc-vlist dc-tmp";
      container.appendChild(newInput);
    },
    addRowTaskProject() {
      var container = document.getElementById("taskproj");
      var newInput = document.createElement("input");
      newInput.classList = "form-control dc-vlist dc-tmp";
      container.appendChild(newInput);
    },
    addRowProjectPerso() {
      var newNode = document
        .getElementById("ghost_perso_project")
        .cloneNode(true);
      // TODO add button onclick
      newNode.id = "";
      newNode.style = "";
      newNode.classList = "project dc-tmp";
      document.getElementById("projects").appendChild(newNode);
      xpAddedCounter.value++;
      console.log(xpAddedCounter.value);
    },
  },
};
const xpAddedCounter = ref(0);
</script>

<template>
  <div>
    <div class="dc-section">
      <div class="col">
        <h5>Expériences professionnelles</h5>
      </div>

      <div id="xps">
        <div class="xp" v-for="experience in experiences" :key="experience.id">
          <div class="row">
            <div class="col col-2">
              <label for="">De</label>
              <input
                type="date"
                :value="experience.start"
                id=""
                class="form-control"
                aria-label="Date de début"
              />
            </div>
            <div class="col col-2">
              <label for="">A</label>
              <input
                type="date"
                :value="experience.end"
                id=""
                class="form-control"
                aria-label="Date de fin"
              />
            </div>
            <div class="col">
              <label for="">Poste</label>
              <input
                type="text"
                :value="experience.title"
                id=""
                class="form-control"
                aria-label="Libellé du poste"
              />
            </div>
            <div class="col">
              <label for="">Entreprise</label>
              <input
                type="text"
                :value="experience.company"
                id=""
                class="form-control"
                aria-label="Entreprise"
              />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label for="context">Contexte</label>
              <textarea
                class="form-control"
                placeholder="..."
                id="context"
                v-model="experience.context"
              />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label for="">Compétences/ Tâches</label>
              <div id="taskxp">
                <input
                  v-for="(task, index) in experience.tasks"
                  :value="task"
                  :key="index"
                  class="form-control dc-vlist"
                  type="text"
                />
              </div>
              <button
                class="btn btn-outline-primary btn-sm"
                @click="addRowTaskXp"
              >
                Ajouter une ligne
              </button>
            </div>
            <div class="col">
              <label for="envt">Environnement technique</label>
              <textarea
                class="form-control dc-ta-envt"
                placeholder="..."
                v-model="experience.technical_env"
              />
            </div>
          </div>
        </div>

        <div
          class="xp"
          id="ghost_xp_pro"
          style="display: none; /* Template for new XP */"
        >
          <div class="row">
            <div class="col col-2">
              <label for="">De</label>
              <input
                type="date"
                name=""
                id=""
                class="form-control"
                aria-label="Date de début"
              />
            </div>
            <div class="col col-2">
              <label for="">A</label>
              <input
                type="date"
                name=""
                id=""
                class="form-control"
                aria-label="Date de fin"
              />
            </div>
            <div class="col">
              <label for="">Poste</label>
              <input
                type="text"
                name=""
                id=""
                class="form-control"
                aria-label="Libellé du poste"
              />
            </div>
            <div class="col">
              <label for="">Entreprise</label>
              <input
                type="text"
                name=""
                id=""
                class="form-control"
                aria-label="Entreprise"
              />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label for="context">Contexte</label>
              <textarea
                class="form-control"
                placeholder="..."
                id="context"
              ></textarea>
            </div>
          </div>
          <div class="row">
            <div class="col dc-tasklist">
              <label for="">Compétences/ Tâches</label>
              <input
                class="form-control dc-vlist"
                type="text"
                placeholder=""
                aria-label=""
              />
              <input
                class="form-control dc-vlist"
                type="text"
                placeholder=""
                aria-label=""
              />
              <input
                class="form-control dc-vlist"
                type="text"
                placeholder=""
                aria-label=""
              />
              <input
                class="form-control dc-vlist"
                type="text"
                placeholder=""
                aria-label=""
              />
              <button class="btn btn-outline-primary btn-sm">
                Ajouter une ligne
              </button>
            </div>
            <div class="col">
              <label for="envt">Environnement technique</label>
              <textarea
                class="form-control dc-ta-envt"
                placeholder="..."
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div class="row text-center">
        <div class="col">
          <button
            type="button"
            class="btn btn-outline-primary btn-sm"
            @click="addRowXpPro"
          >
            Nouvelle experience professionnelle
          </button>
        </div>
      </div>
    </div>

    <div class="dc-section">
      <div class="col">
        <h5>Expériences personnelles</h5>
      </div>

      <div id="projects">
        <div class="project" v-for="proj in projects" :key="proj.id">
          <div class="row">
            <div class="col col-4">
              <label for="">Période</label>
              <input
                type="text"
                class="form-control"
                aria-label="Période"
                :value="proj.period"
              />
            </div>
            <div class="col">
              <label for="">Titre</label>
              <input
                type="text"
                :value="proj.title"
                class="form-control"
                aria-label="Libellé du poste"
              />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label for="context">Contexte</label>
              <textarea
                class="form-control"
                id="context"
                v-model="proj.context"
              ></textarea>
            </div>
          </div>

          <div class="row">
            <div class="col dc-tasklist">
              <label>Tâches</label>
              <div id="taskproj">
                <input
                  v-for="(task, index) in proj.tasks"
                  :value="task"
                  :key="index"
                  class="form-control dc-vlist"
                  type="text"
                />
              </div>
              <button
                class="btn btn-outline-primary btn-sm"
                @click="addRowTaskProject"
              >
                Ajouter une ligne
              </button>
            </div>
            <div class="col">
              <label for="envt">Environnement technique</label>
              <textarea
                class="form-control dc-ta-envt"
                v-model="proj.technical_env"
              ></textarea>
            </div>
          </div>
        </div>

        <div
          class="project"
          id="ghost_perso_project"
          style="display: none; /* Template for new project perso */"
        >
          <div class="row">
            <div class="col col-4">
              <label for="">Période</label>
              <input
                type="text"
                class="form-control"
                aria-label="Période"
                placeholder="Depuis 2022, durant 6 mois, ..."
              />
            </div>
            <div class="col">
              <label for="">Titre</label>
              <input
                type="text"
                name=""
                id=""
                class="form-control"
                aria-label="Libellé du poste"
              />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label for="context">Contexte</label>
              <textarea
                class="form-control"
                placeholder="..."
                id="context"
              ></textarea>
            </div>
          </div>
          <div class="row">
            <div class="col dc-tasklist">
              <label for="">Tâches</label>
              <input
                class="form-control dc-vlist"
                type="text"
                placeholder=""
                aria-label=""
              />
              <input
                class="form-control dc-vlist"
                type="text"
                placeholder=""
                aria-label=""
              />
              <input
                class="form-control dc-vlist"
                type="text"
                placeholder=""
                aria-label=""
              />
              <input
                class="form-control dc-vlist"
                type="text"
                placeholder=""
                aria-label=""
              />
              <button class="btn btn-outline-primary btn-sm">
                Ajouter une ligne
              </button>
            </div>
            <div class="col">
              <label for="envt">Environnement technique</label>
              <textarea
                class="form-control dc-ta-envt"
                placeholder="..."
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div class="row text-center">
        <div class="col">
          <button
            type="button"
            class="btn btn-outline-warning btn-sm"
            @click="addRowProjectPerso"
          >
            Nouvelle experience personnelle
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dc-ta-envt {
  height: 9rem;
  margin: 0.5rem 0rem;
}
.xp,
.project {
  margin-bottom: 4em;
}
</style>