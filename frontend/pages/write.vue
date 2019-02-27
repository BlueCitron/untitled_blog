<template>
<div>

  <header class="masthead" style="background-image: url('/home-bg.jpg')">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-10 col-md-10 mx-auto">
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
      <div class="col-lg-10  col-md-10 mx-auto">

        <div class="write-box">

          <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
              <button
              class="btn btn-outline-dark btn-sm dropdown-toggle font-weight-normal"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">{{ category.title || 'CATEGORY' }}</button>
              <div class="dropdown-menu">
                <template v-for="category in $store.state.category.list">
                  <a
                  class="dropdown-item"
                  @click="changeCategory(category)">{{ category.title }}</a>
                </template>
              </div>
            </div>
            <input type="text" class="form-control" placeholder="제목을 입력해주세요" v-model="title">
          </div>

          <div id="editSection"></div>

          <div class="input-group input-group-sm mt-3 mb-3">
            <input  type="text"
                    class="form-control"
                    placeholder="태그를 입력해주세요"
                    v-model="hashtag"
                    @keyup.enter="addHashtag(hashtag)"
                    >
          </div>

          <h6>태그</h6>

          <div class="d-flex" style="height: 60px;">
            <template v-for="(hashtag, index) in hashtags">
              <button class="btn" @click="removeHashtag(index)">{{ hashtag }}</button>
            </template>
          </div>
          <div class="d-flex justify-content-center mt-3">
            <button type="button" class="btn btn-outline-dark w-25 mx-2">임시저장</button>
            <button type="button" class="btn btn-outline-dark w-25 mx-2" @click="write()">작성하기</button>
          </div>

        </div>
      </div>
    </div>
  </div>

</div>
</template>
<script>
import 'tui-editor/dist/tui-editor.min.css'
import 'tui-editor/dist/tui-editor-contents.min.css'
import 'codemirror/lib/codemirror.css'
//import 'tui-editor/dist/tui-editor-Editor.min.js'

export default {

  components: {

  },

  data () {
    return {
      editor: {},
      category: {},
      title: '',
      // content: '',
      hashtag: '',
      hashtags: [ 'Lorem', 'itsum' ],
    }
  },

  methods: {
    write () {
      if (this.category.id == null) {
        alert('카테고리를 선택해주세요.')
        return
      }

      this.$store.dispatch('post/INSERT_POST', {
        title: this.title,
        content: this.editor.getHtml(),
        category: this.category.id,
        hashtags: this.hashtags,
      })
        .then(({ data }) => {
          const { success } = data
          if (success) {
            this.$router.push('/')
          }
        })
    },

    addHashtag (hashtag) {
      this.hashtags.push(hashtag)
      this.hashtag = ''
    },

    removeHashtag (index) {
      this.hashtags.splice(index, 1)
    },

    changeCategory (category) {
      this.category = category
    },
  },

  mounted() {
    // 인증
    const accessToken = this.$store.state.auth.accessToken || this.$cookie.get('accessToken')
    if (!accessToken) {
      this.$router.push('/login')
    }

    const ToastEditor = require('tui-editor/dist/tui-editor-Editor.min.js')
    this.editor = new ToastEditor({
      el: document.querySelector('#editSection'),
      initialEditType: 'wysiwyg',
      height: '700px'
    })
  }
}
</script>
<style scoped>
.container {
  height: 1000px;
}
input:focus {
  outline: none;
}
</style>
