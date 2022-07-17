<template>
    <v-container style="height: 100%">
        <v-row style="height: 100%" justify="center">
            <v-col cols="11" sm="4" style="height: 100%;">
                <div style="height: 100%;" class="d-flex flex-column"
                    :class="[justify != null ? 'justify-' + justify : 'justify-space-around', alignCenter ? 'align-center' : '']">
                    <slot></slot>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'BaseLayout',
    props: ['justify', 'alignCenter']
}
</script>