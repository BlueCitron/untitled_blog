<template>
  <div>
    <script src="/bootstrap.bundle.min.js"></script>
    <toolbar></toolbar>
    <nuxt/>
    <Footer></Footer>
  </div>
</template>
<script>
import Toolbar from '~/components/Toolbar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Toolbar,
    Footer,
  },

  mounted () {

  },

  async fetch ({ store }) {
    console.log('Server Fetch')
    await store.dispatch('category/FETCH_CATEGORIES')
    await store.dispatch('post/FETCH_LATEST_POSTS')
    await store.dispatch('comment/FETCH_LATEST_COMMENTS')
  },

  async created () {
    await this.$store.dispatch('category/FETCH_CATEGORIES')
    await this.$store.dispatch('post/FETCH_LATEST_POSTS')
    await this.$store.dispatch('comment/FETCH_LATEST_COMMENTS')
    if (process.client) {
      const accessToken = this.$cookie.get('accessToken')
      this.$store.commit('auth/SET_ACCESSTOKEN', accessToken)
      await this.$store.dispatch('visit/VISIT')
    }
  }
}
</script>
<style>

</style>
