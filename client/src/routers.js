import AddAccount from "./components/AddAccount.vue";
import HelloWorld from "./components/HelloWorld.vue";
import LoginAccount from "./components/LoginAccount.vue";
import AppDashboard from "./AppDashboard.vue";
import NotFound from "./components/NotFound"
import AppForm from "./AppForm.vue";
import { createRouter, createWebHistory } from "vue-router";
import { authGuard } from "./_helpers/auth-guard";

//localStorage.setItem('token', 'alex')
const routes = [
    {
        name: "HelloWorld",
        component: HelloWorld,
        path: "/",
    },
    {
        name: "AddAccount",
        component: AddAccount,
        path: "/addAccount",
        beforeEnter: authGuard,
    },

    {
        name: "LoginAccount",
        component: LoginAccount,
        path: "/login",
        //beforeEnter: authGuard,
    },
    {
        name: "AppDashboard",
        component: AppDashboard,
        path: "/appDashboard",
        beforeEnter: authGuard,
    },
    {
        name: "AppForm",
        component: AppForm,
        path: "/appForm",
    },
    {
        name: "NotFound",
        component: NotFound,
        path: "/:pathMatch(.*)*",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

/*router.beforeEach((to, from, next) => {
    if(to.matched[0].name =='AppDashboard')
    {
        authGuard()
    }
   // console.log(to, from)
    next()
})*/

export default router;