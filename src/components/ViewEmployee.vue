<template>
    <div id="view-employee" class="card-body center indigo lighten-4">
        <h3>View Employee</h3>
        <div class="card-body ">
            
            <div class="row">
                <div class="col m3">
                    <img src="https://api.adorable.io/avatars/150/random" alt="photo" class="photo">
                    <div class="card-title"><h5 class="white-text">{{name}}</h5></div>
                </div>
                <div class="card-body col m6 offset-m3">
                    <p>Department: {{dept}}</p>
                    <p>Position: {{position}}</p>
                </div>
            </div>
            <hr>
            <router-link class="btn-small left grey" tag="a" :to="{name: 'dashboard'}">Back</router-link>
            <a class=" btn-small right red"  @click="deleteUser">Delete</a>
            
        </div>


         <div class="fixed-action-btn">
            <router-link :to="{name: 'edit-employee', params: {employee_id: employee_id}}" class="btn-floating btn-large indigo">
            <i class="fa fa-pencil"></i>
            </router-link>
        </div>
    </div>
</template>

<script>
import db from '@/firebase/init';

export default {
    name: 'view-employee',
    data(){
        return {
           employee_id: null,
           name: null,
           dept: null,
           position: null 
        }
    },
    beforeRouteEnter (to, from, next) {
        db.collection('employees').where('employee_id', '==', to.params.employee_id).get()
        .then( query=>{
            query.forEach( doc=>{
                next(vm => {
                    vm.employee_id  = doc.data().employee_id;
                    vm.name         = doc.data().name;
                    vm.dept         = doc.data().dept;
                    vm.position     = doc.data().position;
                });
            })
        })
    },
    watch:{
        '$route' : 'fetchData'
    },
    methods:{
        fetchData(){
            db.collection('employees').where('employee_id', '==', this.$route.params.employee_id).get()
            .then( query=>{
                query.forEach( doc=>{
                    this.employee_id    = doc.data().employee_id;
                    this.name           = doc.data().name;
                    this.position       = doc.data().position;
                    this.dept           = doc.data().dept;
                })
            })
        },
        deleteUser(){
            if(confirm('Are you sure?')){
                db.collection('employees').where('employee_id', '==', this.$route.params.employee_id).get()
                .then(query=>{
                    query.forEach(doc=>{
                        doc.ref.delete();
                        this.$router.push('/');
                    })
                })
            }
        }
    }

}
</script>
    

<style>

</style>
