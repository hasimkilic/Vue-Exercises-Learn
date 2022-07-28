import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import {appAxios} from './utilities/appAxios'


const app = createApp(App)

app.use(store)
app.use(router)

app.config.globalProperties.$axios = axios ;
app.config.globalProperties.$axios = appAxios;

app.mount('#app')
