import 'vfonts/Lato.css'
import { createApp } from 'vue'
import naive from "naive-ui";
import router from "./router"
import App from './App.vue'
import config from './config.js'

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
    return true
})

const app = createApp(App)
app.use(router)
app.use(naive)
app.config.globalProperties.$config = config

app.mount('#app')

