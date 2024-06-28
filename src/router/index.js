import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   /* {
      path: '/',
      name: 'home',
      component: HomeView
    },
    */
    {
      path: '/Contador',
      name: 'Contador',
      component: () => import('../modules/Components/Contador/Contador.vue')
    } ,
    {
      path: '/lista-de-tareas',
      name: 'lista de tareas',
      component: () => import('../modules/lista de tareas/Components/ListaDeTareas.vue')
    } ,
    {
    path: '/Registrar',
    name: 'Registrar',
      component: () => import('../modules/registro/view/Registrarview.vue')
    } 
  
    ]

})

export default router
