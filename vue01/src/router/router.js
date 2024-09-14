import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import NotFound from '@/views/NotFound.vue';
import CompOne from '../views/Comp1.vue';
import CompTwo from '../views/Comp2.vue';
import Comp3 from '@/views/Comp3.vue';
import Comp4 from '@/views/Comp4.vue';
import CartContainer from '../views/CartContainer.vue';


const routes = [
    { name: "home-link", path: "/", component: Home},
    { name: "notfound-link", path: "/:pathMatch(.*)*", component: NotFound},
    { name: "dir1-comp1-link", path: "/dir1/comp1", component: CompOne},
    { name: "dir2-comp2-link", path: "/dir2/comp2/:xyz", component: CompTwo },

    { name: "dir3-comp1-link", path: "/dir1/comp3", component: Comp3},
    { name: "dir4-comp1-link", path: "/dir1/comp4", component: Comp4},
    { name: "cart-container-link", path: "/dir1/cart-container", component: CartContainer },,
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;