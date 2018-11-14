<template>
    <div id="navbar">
        <nav class="indigo">
            <div class="nav-wrap">
                <div class="container">
                    <router-link to="/" class="brand-logo">EmpMan</router-link>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li v-if="isLogedIn"><router-link to="/" tag="a">Dashboard</router-link></li>
                        <li v-if="isLogedIn"><router-link to="/new" tag="a">New</router-link></li>
                        <li v-if="!isLogedIn"><router-link to="/login" tag="a">Login</router-link></li>
                        <li v-if="!isLogedIn"><router-link to="/register" tag="a">Register</router-link></li>
                        <button v-if="isLogedIn" class="btn-small blue darken-1" @click="logout">Logout</button>
                    </ul>
                    
                </div>
            </div> 
        </nav>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'navbar',
    data(){
        return {
            isLogedIn: false,
            currentUser: false
        }
    },
    methods:{
        logout(){
            firebase.auth().signOut().then(()=>{
                this.isLogedIn = false;
                this.$router.push('/login')
                this.$router.go({path: this.$router.path});
                
            })
        }
    },
    created(){
        if(firebase.auth().currentUser){
            this.isLogedIn = true;
            this.currentUser = firebase.auth().currentUser.email
        }
    }
}
</script>
    

<style>

</style>
