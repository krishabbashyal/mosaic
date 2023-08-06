import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory} from 'vue-router'
import './index.css'


import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import DashboardPage from "./pages/DashboardPage"
import WorkspacePage from "./pages/WorkspacePage"

const app = createApp(App)
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/login', component: LoginPage},
        { path: '/register', component: RegisterPage},
        { path: '/dashboard', component: DashboardPage},
        { path: '/component-workspace', component: WorkspacePage},

    ]
})

app.use(router)
app.mount('#app')