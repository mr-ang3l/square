import {createRouter, createWebHistory} from "vue-router";
import Start from "../views/start-page.vue";
import Profile from "../views/profile-page.vue";
import Settings from "../views/settings-page.vue"


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: "/",
        name: "home",
        component: Start
      },
      {
        path: "/profile",
        name: "profile",
        component: Profile
      },
      {
        path: "/settings",
        name: "settings",
        component: Settings
      }
    ]
})

export default router;