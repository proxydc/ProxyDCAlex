import AddAccount from "./components/AddAccount.vue";
import HelloWorld from "./components/HelloWorld.vue";
import LoginAccount from "./components/LoginAccount.vue";
import AppDashboard from "./AppDashboard.vue";
import AppForm from "./AppForm.vue";
import { createRouter, createWebHistory } from "vue-router";

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
    },

    {
        name: "LoginAccount",
        component: LoginAccount,
        path: "/login",
    },
    {
        name: "AppDashboard",
        component: AppDashboard,
        path: "/appDashboard",
    },
    {
        name: "AppForm",
        component: AppForm,
        path: "/appForm",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;