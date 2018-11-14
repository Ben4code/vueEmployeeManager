import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './components/Dashboard'
import NewEmployee from './components/NewEmployee'
import EditEmployee from './components/EditEmployee'
import ViewEmployee from './components/ViewEmployee'
import Login from './components/Login'
import Register from './components/Register'
import firebase from 'firebase/app';

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/view/:employee_id',
      name: 'view-employee',
      component: ViewEmployee,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/new',
      name: 'new-employee',
      component: NewEmployee,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edit/:employee_id',
      name: 'edit-employee',
      component: EditEmployee,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requiresGuest: true
      }
    }
  ]
})


//Nav Guard
router.beforeEach((to, from, next)=>{
  //Check for requiredauth guard
  if(to.matched.some(record => record.meta.requiresAuth)){
    //CHeck if NOT logged in
    if(!firebase.auth().currentUser){
      //Got to login
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      });
    }else{
      //proceed to route
      next();
    }
  }else if(to.matched.some(record => record.meta.requiresGuest)){
    //CHeck if logged in
    if(firebase.auth().currentUser){
      //Got to login
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      });
    }else{
      //proceed to route
      next();
    }
  }else{
    //proceed to route
    next();
  }
});

export default router;