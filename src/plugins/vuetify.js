import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const options = {
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: 'black'
            }
        }
    }
}

export default new Vuetify(options);
