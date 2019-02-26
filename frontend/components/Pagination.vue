<template>
  <div class="mt-4 mb-5">
    <div class="d-flex justify-content-center">
        <button class="btn" @click="movePage('prev')">이전페이지</button>
        <div class="pageinfo d-flex align-items-center justify-content-center">
          {{ `${currentPage} / ${totalPage || 1}`}}
        </div>
        <button class="btn" @click="movePage('next')">다음페이지</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    movePage: Function,
    totalPage: [ String, Number],
    currentPage: [ String, Number],
  }
}
</script>
<style scoped>
.pageinfo {
  width: 80px;
  margin: 0 20px;
  cursor: pointer;
}

</style>
