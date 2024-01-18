<template>
    <div>
        <img class="logo" src="../assets/logo_proxiad.png" />
        <h1>Login</h1>
        <div class="login">
            <input type="text" v-model="login_name" placeholder="Enter Login" />
            <input type="password" v-model="pass_word" placeholder="Enter Password" />
            <button v-on:click="login">Login!</button>
            <p>
                <router-link to="/">Home</router-link>
            </p>
        </div>
    </div>
</template>

<script>
//import BackEndService from '../BackEndService';
import axios from 'axios';

export default {
    name: 'LoginAccount',
    data() {
        return {
            msg: '',
            error: '',
        }
    },
   /*async created() {
        try
        {
            this.msg = await BackEndService.authentificationLogin(this.login_name, this.pass_word);
        }
        catch(err) 
        {
            this.error = err.message;
        }
    },*/
    methods:{
        async login()
        {
            const url = 'http://localhost:3000/api/v1/database/account';
            
            let result = await axios.post(url, {
                login_name: this.login_name,
                pass_word: this.pass_word
            });
            console.warn(result); 
            if(result.status == 200)  
            {
                localStorage.setItem("user-info", JSON.stringify(result.data))
                this.$router.push({name:'AppDashboard'})
            }
        }
    }
}
</script>