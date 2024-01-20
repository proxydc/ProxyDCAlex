<template>
    <div class="admin">
        <AdminHeader/>
        <AdminNav/>
        <router-view/>
    </div>
   
</template>

<script>
import AdminHeader from '../../src/components/AdminHeader.vue';
import AdminNav from '../../src/components/AdminNav.vue';
export default {
    name: 'AdminLayout',
    components: {
        AdminHeader,
        AdminNav
    }
}
</script>