<template>
    <BaseLayout>
        <img src="../assets/login-bg.jpeg" alt="You are what you listen to" style="height: 25%;object-fit: cover;">
        <!-- <v-spacer></v-spacer> -->
        <v-form ref="form" v-model="valid" lazy-validation @submit="submit">
            <h1 class="text-center mb-3">{{ isLogin ? 'LOGIN' : 'SIGN UP' }}</h1>
            <v-text-field label="Email" outlined rounded v-model="user.email"
                :rules="[rules.required, rules.emailValid]"></v-text-field>
            <v-text-field label="Full name" outlined rounded v-if="!isLogin" v-model="user.fullName"
                :rules="[rules.required]"></v-text-field>
            <v-text-field label="Password" outlined rounded type="password" v-model="user.password"
                :rules="[rules.required, rules.min8characters]"></v-text-field>
            <v-btn rounded color="secondary" large block class="mb-2" @click="submit" :loading="loading">Submit</v-btn>
        </v-form>
        <p class="text-center" v-if="isLogin">Doesn't have an account? <router-link to="/signup"
                class="secondary--text">Sign up
            </router-link>
        </p>
        <p class="text-center" v-else>Already have an account? <router-link to="/login" class="secondary--text">Log in
            </router-link>
        </p>
        <!-- <v-spacer></v-spacer> -->
        <v-snackbar v-model="snackbar.show" :color="snackbar.color">
            {{ snackbar.text }}
            <template v-slot:action="{ attrs }" v-if="snackbar.signin">
                <v-btn text v-bind="attrs" @click="() => { snackbar.show = false; $router.push('/login') }">
                    Sign In
                </v-btn>
            </template>
        </v-snackbar>
    </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue'

export default {
    name: 'AuthView',
    components: {
        BaseLayout
    },
    data() {
        return {
            valid: true,
            user: {
                email: null,
                password: null,
                fullName: null
            },
            snackbar: {
                show: false,
                text: '',
                color: 'red',
                signin: false
            },
            loading: false,
            rules: {
                required: value => !!value || 'This field is required.',
                emailValid: value => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'Enter a valid email address', // eslint-disable-line
                min8characters: value => value?.length >= 8 || 'Password must contain atleast 8 characters.'
            }
        }
    },
    computed: {
        isLogin() {
            return this.$route.name == 'login';
        }
    },
    methods: {
        showSnackBar(message, color, signin = false) {
            this.snackbar.text = message;
            this.snackbar.color = color;
            this.snackbar.signin = signin;
            this.snackbar.show = true;
        },
        submit() {
            if (!this.$refs.form.validate())
                return;
            this.loading = true;
            if (!this.isLogin) {
                this.$store.dispatch('addUser', { ...this.user }).then((data) => {
                    this.loading = false;
                    if (!data.success) {
                        this.showSnackBar(data.message, 'red');
                    } else {
                        this.showSnackBar('Account created successfully', 'success', true);
                    }
                });
            } else {
                const users = this.$store.state.users;
                if (!users.map(u => u.email).includes(this.user.email)) {
                    this.showSnackBar('Account with this email id does\'nt exist', 'red');
                    this.loading = false;
                    return;
                }
                const user = users.find(u => u.email == this.user.email);
                if (user.password != this.user.password) {
                    this.showSnackBar('Invalid password', 'red');
                    this.loading = false;
                    return;
                }
                this.$store.dispatch('login', user);
                this.showSnackBar('Logged in successfully', 'success');
                this.$router.push('/').then(() => {
                    this.loading = false;
                });
            }
        }
    }
}
</script>