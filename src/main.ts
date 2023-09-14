import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-dark-teal/theme.css'
import 'virtual:uno.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import App from './App.vue'
import './style.css'

const pinia = createPinia()
const router = createRouter({
  history: createWebHistory('/colormind/'),
  // You don't need to pass the routes anymore,
  // the plugin writes it for you 🤖
})
const app = createApp(App)

app.use(pinia)
app.use(PrimeVue)
app.use(router)
app.mount('#app')
