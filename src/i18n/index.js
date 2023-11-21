// Ready translated locale messages
import VueI18n from "vue-i18n";
import Vue from "vue";
Vue.use(VueI18n);

import en from './en'
import fr from './fr'
import zh from "./zh";

const messages = {
    en,
    fr,
    zh,
};

// Create VueI18n instance with options
export default new VueI18n({
    locale: 'zh', // set locale
    messages, // set locale messages
});