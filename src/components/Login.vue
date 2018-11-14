<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col s12 m8 offset-m2">
                    <div class="login card-panel indigo white-text center">
                        <h3>Login</h3>
                        <form action="">
                            <div class="input-field">
                                <i class="fa fa-envelope prefix"></i>
                                <input type="text" id="email" v-model="email">
                                <label class="white-text" for="email">Email</label>
                            </div>
                            <div class="input-field">
                                <i class="fa fa-key prefix"></i>
                                <input type="password" id="password" v-model="password">
                                <label class="white-text" for="password">Password</label>
                            </div>
                            <div class="btn-small  blue darken-1 white-text" @click="login">Login</div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase/app';


export default {
    name: 'login',
    data(){
        return{
            email:'',
            password: ''
        }
    },
    methods:{
        login(e){
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then( data => {
                //console.log(data);
                alert(`You are logged in as ${data.user.email}`);
                this.$router.go({path: this.$router.path});
            })
            .catch( err => { alert(err.message) });
            e.preventDefault();
            
        }
    }
}
</script>

<style>

</style>
