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

  created () {
    this.$store.dispatch('category/FETCH_CATEGORIES')
    this.$store.dispatch('post/FETCH_LATEST_POSTS')
    this.$store.dispatch('comment/FETCH_LATEST_COMMENTS')
    if (process.client) {
      const accessToken = this.$cookie.get('accessToken')
      this.$store.commit('auth/SET_ACCESSTOKEN', accessToken)
      this.$store.dispatch('visit/VISIT')
    }
  }
}
</script>
<style>

</style>
