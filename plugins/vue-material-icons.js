import Vue from 'vue'

import 'vue-material-design-icons/styles.css'

import YoutubeIcon from 'vue-material-design-icons/Youtube.vue'
import SpotifyIcon from 'vue-material-design-icons/Spotify.vue'
import TextIcon from 'vue-material-design-icons/Text.vue'
import CloseIcon from 'vue-material-design-icons/Close.vue'
import OpenInNew from 'vue-material-design-icons/OpenInNew.vue'

export default function materialIcons() {
    Vue.component('youtube-icon', YoutubeIcon)
    Vue.component('spotify-icon', SpotifyIcon)
    Vue.component('text-icon', TextIcon)
    Vue.component('close-icon', CloseIcon)
    Vue.component('open-in-new-icon', OpenInNew)
}