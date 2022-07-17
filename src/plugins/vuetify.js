import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

const options = {
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: colors.shades.white,
                secondary: colors.blue,
            }
        }
    }
}

export default new Vuetify(options);
