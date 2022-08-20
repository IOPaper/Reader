import 'vfonts/Lato.css'

import { createApp } from 'vue'
import naive from "naive-ui";
import router from "./router"
import App from './App.vue'

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
    return true
})

createApp(App)
    .use(router)
    .use(naive)
    .mount('#app')
