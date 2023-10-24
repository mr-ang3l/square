import {createRouter, createWebHistory} from "vue-router";
import Login from "../views/login-page.vue";
import Profile from "../views/profile-page.vue";
import Center from "../views/center/center-page.vue"
import Invite from "../views/center/center-page-invite.vue"
import Add from "../views/center/center-page-add.vue"
import NotFound from "../views/not-found.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: "/",
        name: "Login",
        component: Login
      },
      {
        path: "/profile",
        name: "Profile",
        component: Profile
      },
      {
        path: "/center",
        name: "Center",
        component: Center
      },
      {
        path: "/settings/invite",
        name: "CenterInvite",
        component: Invite
      },
      {
        path: "/settings/add",
        name: "CenterAdd",
        component: Add
      },
      {
        path: "/:catchAll(.*)",
        name: 'NotFound',
        component: NotFound
      }
    ]
})

export default router;