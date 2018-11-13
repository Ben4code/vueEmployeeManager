<template>
    <div id="new-employee">
        <h4>New Employee</h4>

        <div class="row">
            <form @submit.prevent="saveEmployee" class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" name="employee_id" v-model="employee_id" required>
                        <label for="employee_id"> Employee ID</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" name="name" v-model="name" required>
                        <label for="name"> Name </label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" name="dept" v-model="dept" required>
                        <label for="dept"> Department </label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" name="position" v-model="position" required>
                        <label for="position"> Position</label>
                    </div>
                </div>
                <router-link to="/" class="btn-small red ">Back</router-link>
                <button type="submit" class="btn-small indigo right">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import db from '@/firebase/init';

export default {
    name: 'new-employee',
    data(){
        return {
            employee_id: null,
            name: null,
            dept: null,
            position: null
        }
    },
    methods:{
        saveEmployee(){
            db.collection('employees').add({
                employee_id: this.employee_id,
                name: this.name,
                position: this.position,
                dept: this.dept
            })
            .then(() =>{this.$router.push('/')})
            //.catch(error => console.log(error))
        }
    }

}
</script>
    

<style>

</style>
