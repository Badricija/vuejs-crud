import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateView from '../views/create/CreateView.vue'
import ListView from '../views/List/ListView.vue'
import SingleView from '../views/singleview/SingleView.vue'
import EditView from '../views/edit/EditView.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [  
    {path: '/', component: HomeView},
    {path: '/create', component: CreateView},
    {path:'/view/:id/edit', component: EditView},
    {path: '/view/:id', component: SingleView},
    {path: '/list', component: ListView},
]})

export default router
