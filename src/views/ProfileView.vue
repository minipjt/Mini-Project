<template>
    <div>
        <v-app-bar app color="black">
            <v-btn icon @click="$router.back()">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
        </v-app-bar>
        <BaseLayout :align-center="true">
            <div class="text-center">
                <img :src="`https://avatars.dicebear.com/api/initials/${currentUser.fullName}.svg`"
                    :alt="currentUser.fullName" style="height: 80px; width:80px; object-fit:cover;"
                    class="rounded-circle">
                <h1>{{ currentUser.fullName }}</h1>
                <p>{{ currentUser.email }}</p>
            </div>
            <v-btn outlined rounded @click="$store.dispatch('logout')">Logout</v-btn>
        </BaseLayout>
    </div>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'ProfileView',
    computed: {
        ...mapGetters(['currentUser'])
    },
    components: {
        BaseLayout
    }
}
</script>