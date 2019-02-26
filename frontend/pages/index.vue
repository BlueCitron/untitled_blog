<template>
<div>

  <MasterHead
  :mainTitle="$store.state.category.category.title || `BlueCitron's Blog`"
  subTitle="Javascript & Node.js & Vue.js"
  ></MasterHead>

  <div class="container">
    <div class="row">
      <div class="col-lg-10 col-md-10 mx-auto">

        <template v-for="post in this.$store.state.post.list">
          <div class="post-preview">
            <a :href="`/post/${post.id}`">
              <h2 class="post-title">{{ post.title || '' }}</h2>
              <h3 class="post-subtitle">{{ contentFilter(post.content) }}</h3>
            </a>
            <p class="post-meta">
              <span>{{ post.category.title }}</span> |
              <span>{{ $moment(post.createdAt).format('YYYY.MM.DD HH:mm:ss')}}</span>
            </p>
          </div>
          <hr>
        </template>

        <Pagination
        :movePage="this.movePage"
        :totalPage="$store.state.post.pageinfo.totalPage"
        :currentPage="$store.state.post.pageinfo.page"
        ></Pagination>

      </div>
    </div>
  </div>

</div>
</template>
<script>
import MasterHead from '~/components/MasterHead.vue'
import Pagination from '~/components/Pagination.vue'

export default {
  components: {
    Pagination,
    MasterHead,
  },

  methods: {
    contentFilter (content) {
      const originalText = content.replace(/(<([^>]+)>)/ig,'')
      if (originalText.length > 500) {
        return originalText.slice(0, 500) + '...'
      } else {
        return originalText
      }
    },

    movePage (flag) {
      const { state, dispatch, commit } = this.$store
      const { pageinfo } = this.$store.state.post
      const { category } = this.$store.state.category
      const { page, total } = pageinfo
      if (flag === 'prev') {
        if (page == 1) {
          return
        } else {
          this.$store.commit('post/SET_PAGE', (page/1) - 1)
          this.$store.dispatch('post/FETCH_POSTS', { page: (page/1) - 1, category: category.id })
        }
      } else if (flag == 'next') {
        if (page >= total) {
          return
        } else {
          commit('post/SET_PAGE', (page/1) + 1)
          dispatch('post/FETCH_POSTS', { page: (page/1) + 1, category: category.id })
        }
      }
    }
  },

  created () {
    const { page } = this.$store.state.post.pageinfo
    this.$store.dispatch('post/FETCH_POSTS', { page })
  },
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
