import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './components/Dashboard'
import NewEmployee from './components/NewEmployee'
import EditEmployee from './components/EditEmployee'
import ViewEmployee from './components/ViewEmployee'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/:employee_id',
      name: 'view-employee',
      component: ViewEmployee
    },
    {
      path: '/new',
      name: 'new-employee',
      component: NewEmployee
    },
    {
      path: '/edit/:employee_id',
      name: 'edit-employee',
      component: EditEmployee
    }
  ]
})
