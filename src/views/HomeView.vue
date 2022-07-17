<template>
    <div>
        <v-app-bar app color="black">
            <v-toolbar-title>Home</v-toolbar-title>
            <v-spacer></v-spacer>

            <img :src="`https://avatars.dicebear.com/api/initials/${$store.getters.currentUser.fullName}.svg`"
                :alt="$store.getters.currentUser.fullName" style="height: 40px; width:40px; object-fit:cover;"
                class="rounded-circle cursor-pointer" @click="$router.push('/profile')">
        </v-app-bar>
        <BaseLayout>
            <h1>Hello {{ $store.getters.currentUser.fullName }}</h1>
            <!-- <v-spacer></v-spacer> -->
            <div>
                <h3 class="mb-3">Current Mood</h3>
                <v-row>
                    <v-col cols="6" v-for="emotion in emotions" :key="emotion.title" @click="select(emotion.title)">
                        <v-card rounded class="cursor-pointer">
                            <v-card-title class="emoji">{{ emotion.emoji }}</v-card-title>
                            <v-card-text>
                                <h4 class="text-uppercase">{{ emotion.title }}</h4>
                            </v-card-text>
                            <!-- <h1 class="emoji mb-2">{{ emotion.emoji }}</h1> -->
                            <!-- <h3 class="text-uppercase">{{emotion.title}}</h3> -->
                        </v-card>
                    </v-col>
                </v-row>
            </div>
            <!-- <v-card elevation="2" outlined>
                <v-card-title class="justify-center">Choose your mood</v-card-title>
                <v-card-text>
                    <v-row justify="center">
                        <v-col class="text-center cursor-pointer" cols="4" v-for="emotion in emotions"
                            :key="emotion.title" @click="select(emotion.title)">
                            <h1 class="emoji mb-2">{{ emotion.emoji }}</h1>
                            {{ emotion.title }}
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card> -->
        </BaseLayout>
    </div>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue';

export default {
    name: 'HomeView',
    components: {
        BaseLayout
    },

    data: () => ({
        emotions: [
            { emoji: '😁', title: 'Happy' },
            { emoji: '😞', title: 'Sad' },
            { emoji: '♥', title: 'Romantic' },
            { emoji: '😡', title: 'Angry' },
            { emoji: '💔', title: 'Broken' },
            { emoji: '⚡', title: 'Motivated' },
        ]
    }),

    methods: {
        select(emotion) {
            this.$router.push(`/${emotion.toLowerCase()}`);
        }
    }
}
</script>