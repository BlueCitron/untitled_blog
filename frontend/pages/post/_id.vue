<template>
<div>

  <MasterHead
  :mainTitle="$store.state.post.post.title || ''"
  :subTitle="$store.state.post.post.category.title || ''"
  ></MasterHead>

  <!-- Post Content -->
  <article>
    <div class="container">
      <div class="row">
        <div class="col-lg-10 col-md-10 mx-auto">
            <!-- <div v-html="$store.state.post.post.content"></div> -->
            <div id="viewer"></div>
            <div class="d-flex justify-content-end" v-if="$store.state.auth.accessToken">
              <button class="btn">수정</button>
              <button class="btn" @click="deletePost($store.state.post.post)">삭제</button>
            </div>
          <hr/>
        </div>
      </div>

    </div>
  </article>

  <Hashtag
  :hashtags="$store.state.post.post.hashtags"
  ></Hashtag>

  <!-- <RelativeArticle></RelativeArticle> -->

  <CommentWindow></CommentWindow>

</div>
</template>
<script>
import Hashtag from '~/components/Hashtag.vue'
import RelativeArticle from '~/components/RelativeArticle.vue'
import CommentWindow from '~/components/CommentWindow.vue'
import MasterHead from '~/components/MasterHead.vue'
import 'tui-editor/dist/tui-editor.min.css'
import 'tui-editor/dist/tui-editor-contents.min.css'
import 'codemirror/lib/codemirror.css'
//import Viewer from 'tui-editor/dist/tui-editor-Viewer.min.js'

export default {
  components: {
    Hashtag,
    RelativeArticle,
    CommentWindow,
    MasterHead,
  },

  getters: {

  },

  methods: {
    async insertComment ({ writer, password, content }) {
      const { dispatch } = this.$store
      const { id } = this.$route.params
      await dispatch('comment/INSERT_COMMENT', { writer, password, content, post: id })
      await dispatch('comment/FETCH_COMMENTS', { post_id: id })
    },

    async deletePost (post) {
      const { id } = post
      const { data } = await this.$store.dispatch('post/DELETE_POST', { id })
      const { success } = data
      if (success) {
        this.$router.push('/')
      }
    }
  },

  mounted () {
    const Viwer = require('tui-editor/dist/tui-editor-Viewer.min.js')
    var editor = new Viwer({
        el: document.querySelector('#viewer'),
        //height: '300px',
        initialValue: this.$store.state.post.post.content
      });
  },

  created () {

  },

  async fetch ({ route, store}) {
    const { id } = route.params
    await store.dispatch('post/FETCH_POST', { id })
    await store.dispatch('comment/FETCH_COMMENTS', { post_id: id })
  }
}
</script>
<style scoped>

</style>
