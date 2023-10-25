import {createRouter, createWebHistory} from "vue-router";
import Login from "../views/login-page.vue";
import Profile from "../views/profile/profile-page.vue";
import Center from "../views/center/center-page.vue"
import Invite from "../views/center/center-page-invite.vue"
import CenterAdd from "../views/center/center-page-add.vue"
import CenterFollowers from "../views/center/center-page-followers.vue"
import CenterFollowing from "../views/center/center-page-following.vue"
import CenterSquare from "../views/center/center-page-square.vue"
import CenterSettings from "../views/center/center-page-settings.vue"
import CenterExit from "../views/center/center-page-exit.vue"
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
        component: CenterAdd
      },
      {
        path: "/settings/followers",
        name: "CenterFollowers",
        component: CenterFollowers
      },
      {
        path: "/settings/following",
        name: "CenterFollowing",
        component: CenterFollowing
      },
      {
        path: "/settings/square",
        name: "CenterSquare",
        component: CenterSquare
      },
      {
        path: "/settings/settings",
        name: "CenterSettings",
        component: CenterSettings
      },
      {
        path: "/settings/exit",
        name: "CenterExit",
        component: CenterExit
      },
      {
        path: "/:catchAll(.*)",
        name: 'NotFound',
        component: NotFound
      }
    ]
})

export default router;