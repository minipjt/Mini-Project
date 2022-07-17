<template>
    <BaseLayout>
        <img src="../assets/login-bg.jpeg" alt="You are what you listen to" style="height: 25%;object-fit: cover;">
        <h1>LET THE<br>MUSIC SPARK</h1>
        <h2>YOU CALL IT MUSIC<br>I CALL IT THERAPIST</h2>
        <div>
            <v-btn rounded color="secondary" block class="mb-2"
            @click="$router.push('/login')">Sign in with Email</v-btn>
            <p class="grey--text text-subtitle-2 text-center">By Continuing you agree to the Terms and Conditions</p>
        </div>

        <p class="text-center">Doesn't have an account? <router-link to="/signup" class="secondary--text">Sign up
            </router-link>
        </p>
    </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue'

export default {
    name: 'UnAuthenticated',
    components: {
        BaseLayout
    }
}
</script>