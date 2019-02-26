<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-10 col-md-10 mx-auto">
        <div class="tagbox d-flex align-items-center">
          <h6>태그</h6>
          <template v-for="hashtag in hashtags">
            <span class="tag">{{ hashtag.title }}</span>
          </template>
        </div>
        <hr/>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  props: {
    hashtags: Array
  }
}
</script>
<style scoped>
.tagbox {
  margin: 30px 0;
}
.tag {
  cursor: pointer;
  font-weight: 600;
  padding-bottom: 8px;
  margin: 0 50px;
  font-size: 13px;
  font-family: 'Nanum Gothic', sans-serif;
}
.tag:hover {
  text-decoration: underline;
}
</style>
