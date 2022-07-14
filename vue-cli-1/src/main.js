import { createApp } from 'vue'
import App from './App.vue'
import appHeaderVue from '@/components/appHeader.vue'

const app = createApp(App)

app.component('appHeaderVue',appHeaderVue)

app.mount('#app')
