import {createRouter, createWebHistory} from 'vue-router';
import Home from '../components/HelloWorld.vue'
import Register from '../components/Register.vue';

const routes =[ 
     { path: '/', component: Home },
{ path: '/register', component: Register },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;