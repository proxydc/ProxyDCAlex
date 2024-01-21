<template>
    <div class="admin">
        <AdminHeader/>
        <AdminNav/>
        <router-view/>
    </div>
   
</template>

<script>
import AdminHeader from '../components/AdminHeader.vue';
import AdminNav from '../components/AdminNav.vue';
export default {
    name: 'AdminLayout',
    components: {
        AdminHeader,
        AdminNav
    }
}
</script>