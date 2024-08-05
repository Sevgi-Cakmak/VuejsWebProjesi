/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Contact from '../pages/Contact.vue'; 
import Company from '../pages/Company.vue';
import Values from '../pages/Values.vue';
import Product from '../pages/Products.vue';
const routes = [

          {
            path: '/',
            name: 'Home',
            component:() => Home,
          },
          {
            path: '/about',
            name: 'About',
            component:() => About,
          },
          {
            path: '/contact',
            name: 'Contact',
            component:() => Contact,
          },
          {
            path: '/company',
            name: 'Company',
            component:() => Company,
          },
          {
            path: '/values',
            name: 'Values',
            component:() => Values,
          },
          {
            path: '/product',
            name: 'product',
            component:() => Product,
          },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
