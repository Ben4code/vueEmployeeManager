<template>
    <div id="navbar">
        <nav class="indigo">
            <div class="nav-wrap">
                <div class="container">
                    <router-link to="/" class="brand-logo">EmpMan</router-link>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><router-link to="/" tag="a">Home</router-link></li>
                        <li><router-link to="/new" tag="a">New</router-link></li>
                        <li><router-link to="/" tag="a">Contact</router-link></li>
                    </ul>
                    
                </div>
            </div> 
        </nav>
    </div>
</template>

<script>
export default {
    name: 'navbar',
    data(){
        return {
            
        }
    }
}
</script>
    

<style>

</style>
