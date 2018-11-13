<template>
    <div id="dashboard">

        <h3>Dashboard</h3>

         <div class="row">
            <div class="col s12 m4" v-for="employee in employees" :key="employee.id">
            <div class="card">
                <div class="card-image">
                <img :src="employee.photo">
                <span class="card-title"><h5>{{employee.name}}</h5></span>
                </div>
                
                
                <div class="card-content">
                    <div class="container">
                        <p class="collection-item">Department: <span class="right chip indigo lighten-4">{{employee.dept}}</span> </p>
                        <br><div class="divider"></div><br>
                        <p class="collection-item">Position: <span class="right chip indigo lighten-4">{{employee.position}}</span></p>
                    </div>
                </div>
                <div class="card-action ">
                    <router-link :to="{name: 'view-employee', params: {employee_id: employee.employee_id} }" tag="a" class="indigo btn-small">
                        View Profile
                    </router-link>
                </div>
            </div>
            </div>
        </div>



        <div class="fixed-action-btn">
            <router-link to="/new" class="btn-floating btn-large indigo">
            <i class="fa fa-plus"></i>
            </router-link>
        </div>
    </div>
</template>

<script>
import db from '@/firebase/init';

export default {
    name: 'dashboard',
    data(){
        return {
            employees: []
        }
    },
    created(){
        db.collection('employees').get()
        .then(querySnapshot => {
            querySnapshot.forEach( doc=> {
                const myData = {
                   'id': doc.id,
                   'employee_id': doc.data().employee_id,
                   'name': doc.data().name,
                   'dept': doc.data().dept,
                   'position': doc.data().position,
                   'photo': 'https://api.adorable.io/avatars/150/random'
                }
                this.employees.push(myData);
                // console.log(myData);
            });
            
        })
    }
}
</script>
    

<style>

</style>
