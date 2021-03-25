import Vue from 'vue'

import 'vue-material-design-icons/styles.css'

import YoutubeIcon from 'vue-material-design-icons/Youtube.vue'
import SpotifyIcon from 'vue-material-design-icons/Spotify.vue'
import TextIcon from 'vue-material-design-icons/Text.vue'
import CloseIcon from 'vue-material-design-icons/Close.vue'
import OpenInNewIcon from 'vue-material-design-icons/OpenInNew.vue'
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import FacebookIcon from 'vue-material-design-icons/Facebook.vue'

export default function materialIcons() {
    Vue.component('youtube-icon', YoutubeIcon)
    Vue.component('spotify-icon', SpotifyIcon)
    Vue.component('text-icon', TextIcon)
    Vue.component('close-icon', CloseIcon)
    Vue.component('open-in-new-icon', OpenInNewIcon)
    Vue.component('menu-icon', MenuIcon)
    Vue.component('facebook-icon', FacebookIcon)
}