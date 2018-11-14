<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col s12 m8 offset-m2">
                    <div class="login card-panel  blue darken-1 white-text center">
                        <h3>Register</h3>
                        <form>
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
                            <div class="btn-small indigo white-text" @click="register">Register</div>
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
        register(e){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then( data => {
                //console.log(data);
                alert(`Account created for ${data.user.email}`);
                this.$router.go({path: this.$router.path});
            })
            .catch( err => { alert(err) });
            e.preventDefault();
            
        }
    }
}
</script>

<style>

</style>
