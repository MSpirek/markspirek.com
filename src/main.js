// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/css/index.css'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700'
  })
  head.meta.push({
    name: 'description',
    content: 'Mark Spirek - Web Developer & UI/UX Designer, with a passion for product.'
  })

}
