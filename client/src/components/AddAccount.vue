<template>
  <div>
    <img class="logo" src="../assets/logo_proxiad.png" />
    <h1>Add Account</h1>
    <div class="register">
      <input type="text" v-model="login_name" placeholder="Enter Login Name" />
      <input
        type="text"
        v-model="display_name"
        placeholder="Enter Display Name"
      />
      <input type="password" v-model="pass_word" placeholder="Enter Password" />
      <button v-on:click="addAccount">Add Account</button>
      <p>
        <router-link to="/">Home</router-link>
      </p>
    </div>
  </div>
</template>

<script>
//import BackEndService from "../BackEndService";
import axios from "axios";

export default {
  name: "AddAccount",
  data() {
    return {
      login_name: "",
      display_name: "",
      pass_word: "",
    };
  },
  /*async created() {
    try {
      this.msg = await BackEndService.authentificationLogin(
        this.login_name,
        this.pass_word
      );
    } catch (err) {
      this.error = err.message;
    }
  },*/
  methods: {
    async addAccount() {
      const url = "http://localhost:3000/api/v1/accounts/add";
      alert("url"+url+" login: "+this.login_name + " displayname: " + this.display_name);
      let result = await axios.post(url, {
        login_name: this.login_name,
        display_name: this.display_name,
        pass_word: this.pass_word,
      });
      console.warn(result);
      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data))
                this.$router.push({name:'HelloWorld'})
      }
      /*
      console.warn(result);
      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "HelloWorld" });
      }*/
    },
  },
};
</script>