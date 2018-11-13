<template>
    <div id="edit-employee">
        <h3>Edit Employee</h3>

        <div class="row">
            <form @submit.prevent="updateEmployee" class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" name="employee_id" disabled v-model="employee_id" required>
                        
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" name="name" v-model="name" required>
                        
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" name="dept" v-model="dept" required>
                        
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" name="position" v-model="position" required>
                        
                    </div>
                </div>
                <router-link to="/" class="btn-small red ">Back</router-link>
                <button type="submit" class="btn-small indigo right">Update</button>
            </form>
        </div>

    </div>
</template>

<script>

import db from '@/firebase/init';

export default {
    name: 'edit-employee',
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
        updateEmployee(){
            db.collection('employees').where('employee_id', '==', this.$route.params.employee_id).get()
            .then(query=>{
                query.forEach(doc=>{
                    doc.ref.update({
                        employee_id: this.employee_id,
                        name: this.name,
                        position: this.position,
                        dept: this.dept
                    })
                    .then(()=>{
                        this.$router.push({name: 'view-employee', params: {employee_id: this.employee_id}});
                    })
                    
                })
            })
        }
    }
}
</script>
    

<style>

</style>
