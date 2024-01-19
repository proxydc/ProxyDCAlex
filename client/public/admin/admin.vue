<template>
    <div>
      <img class="logo" src="../assets/logo_proxiad.png" />
      <h1>Welcome to Admin ProxyDC</h1>
      <nav>
        <router-link to="/addAccount">Add Account</router-link> |
      </nav>  
      <div class="container">
        <div class="row">
          <div class="col">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Login</th>
                  <th scope="col">Display Name</th>
                  <!--<th scope="col">Action</th>-->
                </tr>
              </thead>
              <tbody class="table-group-divider">
                <tr v-for="(acRow, index) in this.AcRows" :key="index">
                  <th scope="row">{{ acRow.id }}</th>
                  <td>{{ acRow.login_name }}</td>
                  <td>{{ acRow.display_name }}</td>
                  <!--<td>
                  <a class="btn btn-outline-primary btn-sm" :href="BoDcLink">
                    Voir le dossier
                  </a>
                  <button type="button" class="btn btn-outline-danger btn-sm">
                    Archiver
                  </button>
                </td>-->
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  //import BackEndService from "../BackEndService";
  import axios from "axios";
  export default {
    name: "HelloWorld",
    data() {
      return {
        AcRows: [],
        error: "",
      };
    },
    mounted() {
      try {
        console.log("Iam here");
        //this.AcRows = BackEndService.getLogins();
        this.getLogins();
        console.log("data: "+this.AcRows);
      } catch (err) {
        this.error = err.message;
      }
    },
  
    methods: {
     getLogins(){
        const url = 'http://localhost:3000/api/v1/database/account';
  
         /*let result = await axios.get(url);
        this.AcRows = await JSON.stringify(result.data) ;
        alert("rrr"+this.AcRows);
            console.log(this.AcRows)*/
         axios.get(url).then(res=>{
            console.log(res.data)
            this.AcRows = res.data;
          });
      }
    },
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  a.btn-sm {
    margin-right: 5px;
  }
  </style>
  