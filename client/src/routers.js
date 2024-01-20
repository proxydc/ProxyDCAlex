import AddAccount from "../public/admin/AddAccount.vue";
import EditAccount from "../public/admin/EditAccount.vue";
import HelloWorld from "./components/HelloWorld.vue";
import LoginAccount from "./components/LoginAccount.vue";
import AppDashboard from "./AppDashboard.vue";
import NotFound from "./components/NotFound"
import AppForm from "./AppForm.vue";
import { createRouter, createWebHistory } from "vue-router";
import { authGuard } from "./_helpers/auth-guard";
import admin from "../public/admin/admin.vue";
import AdminLayout from "../public/admin/admin_Layout.vue";



//localStorage.setItem('token', 'alex')
const routes = [
    {
        path: '/adminLayout',
        name: 'adminLayout',
        component: AdminLayout,
        children: [
            { name: "admin", component: admin, path: "/admin", beforeEnter: authGuard, },
            { name: "AddAccount", component: AddAccount, path: "/addAccount", beforeEnter: authGuard, },
            { name: "EditAccount", component: EditAccount, path: "/editAccount/:id", beforeEnter: authGuard, },]
    },

    {
        name: "HelloWorld",
        component: HelloWorld,
        path: "/",
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
        beforeEnter: authGuard,//=='admin' || authGuard=='user',
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