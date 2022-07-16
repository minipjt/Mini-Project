<template>
    <v-container style="height: 100%;">
    <div style="position: fixed;top: 50%; left: 50%; transform: translate(-50%, -50%);">
        <v-progress-circular indeterminate color="white" v-if="!loaded"></v-progress-circular>
    </div>
        <iframe style="border-radius:12px"
            :src="`https://open.spotify.com/embed/playlist/${this.playListId}?utm_source=generator&theme=0`"
            height="100%" width="100%" frameBorder="0" allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            @load="loaded = true"></iframe>
    </v-container>
</template>

<script>

const playlists = {
    'happy': '37i9dQZF1DX9XIFQuFvzM4',
    'angry': '37i9dQZF1DX5gQonLbZD9s',
    'motivated': '37i9dQZF1DX0E9XMGembJo',
    'sad': '37i9dQZF1DX33haVNk7fCy',
    'romantic': '2l4kI8wDwl5F2IT2kjgV7s',
    'broken': '4YOfhHpjPB0tq29NPpDY3F'
};

export default {
    name: 'MusicPlayer',

    computed: {
        playListId() {
            return playlists[this.$route.params.emotion];
        }
    },

    methods: {
        async loadEmbedded() {
            const res = await fetch(`https://open.spotify.com/embed/playlist/${this.playListId}?utm_source=generator&theme=0`, {
                method: 'GET',
                mode: 'no-cors',
                headers: {
                    'Accept': 'text/html'
                }
            });
            const blob = await res.blob()
            console.log(blob);
            this.responseUrl = URL.createObjectURL(blob)
        }
    },

    data() {
        return {
            responseUrl: null,
            loaded: false
        }
    },

    created() {
        // this.loadEmbedded();
    },

    // eslint-disable-next-line no-unused-vars
    beforeRouteEnter(to, from, next) {
        if (Object.keys(playlists).includes(to.params.emotion)) next();
        else next(false)


    }

}
</script>