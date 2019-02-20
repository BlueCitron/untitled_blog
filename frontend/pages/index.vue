<template>
<div>

  <header class="masthead" style="background-image: url('/home-bg.jpg')">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="site-heading">
            <h1>Clean Blog</h1>
            <span class="subheading">A Blog Theme by Start Bootstrap</span>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div class="container">
    <div class="row">
      <div class="col-lg-10 col-md-10 mx-auto">

        <div class="post-preview">
          <a href="post.html">
            <h2 class="post-title">Failure is not an option</h2>
            <h3 class="post-subtitle">Many say exploration is part of our destiny, but it’s actually our duty to future generations.</h3>
          </a>
          <p class="post-meta">
            <span>Node.js</span> |
            <span>2019.02.19 14:21:38</span>
          </p>
        </div>
        <hr>
        <div class="post-preview">
          <a href="post.html">
            <h2 class="post-title">Failure is not an option</h2>
            <h3 class="post-subtitle">Many say exploration is part of our destiny, but it’s actually our duty to future generations.</h3>
          </a>
          <p class="post-meta">
            <span>Node.js</span> |
            <span>2019.02.19 14:21:38</span>
          </p>
        </div>
        <hr>
        <div class="post-preview">
          <a href="post.html">
            <h2 class="post-title">Failure is not an option</h2>
            <h3 class="post-subtitle">Many say exploration is part of our destiny, but it’s actually our duty to future generations.</h3>
          </a>
          <p class="post-meta">
            <span>Node.js</span> |
            <span>2019.02.19 14:21:38</span>
          </p>
        </div>
        <hr>
        <div class="post-preview">
          <a href="post.html">
            <h2 class="post-title">Failure is not an option</h2>
            <h3 class="post-subtitle">Many say exploration is part of our destiny, but it’s actually our duty to future generations.</h3>
          </a>
          <p class="post-meta">
            <span>Node.js</span> |
            <span>2019.02.19 14:21:38</span>
          </p>
        </div>
        <hr>
        <div class="post-preview">
          <a href="post.html">
            <h2 class="post-title">Failure is not an option</h2>
            <h3 class="post-subtitle">Many say exploration is part of our destiny, but it’s actually our duty to future generations.</h3>
          </a>
          <p class="post-meta">
            <span>Node.js</span> |
            <span>2019.02.19 14:21:38</span>
          </p>
        </div>
        <hr>
        <!-- Pager -->
        <!-- <div class="clearfix">
          <a class="btn btn-outline-secondary btn-outline float-right" href="#">Older Posts &rarr;</a>
        </div> -->
        <Pagination></Pagination>

      </div>
    </div>
  </div>

</div>
</template>
<script>
import Pagination from '~/components/pagination.vue'

export default {
  components: {
    Pagination,
  }
}
</script>
<style scoped>
.post-title, .post-subtitle, .post-meta {
  font-family: 'Nanum Gothic', sans-serif;
}
.post-title {
  font-size: 30px !important;
  font-weight: 300;
}
.post-subtitle {
  font-size: 16px;
}
.post-meta {
  font-size: 14px;
  font-style: normal;
}
</style>
