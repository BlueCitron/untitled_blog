<template>
  <div>
    <script src="/bootstrap.bundle.min.js"></script>
    <!-- 
    <script src="/clean-blog.min.js"></script>
    -->
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
  }
}
</script>
<style>

</style>
