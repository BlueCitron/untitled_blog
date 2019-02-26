<template>
  <header class="masthead" style="background-image: url('/home-bg.jpg')">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-10 col-md-10 mx-auto">
          <div class="site-heading">
            <h1 class="font-weight-light">{{ mainTitle }}</h1>
            <span class="subheading subTitle">{{ subTitle }}</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  props: {
    mainTitle: String,
    subTitle: String,
  }
}
</script>
<style scoped>

</style>
