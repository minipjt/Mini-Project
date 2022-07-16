<template>
    <v-container style="height: 100%" class="d-flex align-center justify-center">
        <div>
            <v-card elevation="2" outlined>
                <v-card-title class="justify-center">Choose your mood</v-card-title>
                <v-card-text>
                    <v-row justify="center">
                        <v-col class="text-center cursor-pointer" cols="4" v-for="emotion in emotions" :key="emotion.title"
                            @click="select(emotion.title)">
                            <h1 class="emoji mb-2">{{ emotion.emoji }}</h1>
                            {{ emotion.title }}
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </div>
    </v-container>
</template>

<script>
export default {
    name: 'HomeView',

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