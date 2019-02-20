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

        <div class="write-box mt-5">

          <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
              <button class="btn btn-outline-dark btn-sm dropdown-toggle font-weight-normal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">CATEGORY</button>
              <div class="dropdown-menu">
                <a class="dropdown-item active" href="#">Nodejs</a>
                <a class="dropdown-item" href="#">Vuejs</a>
                <a class="dropdown-item" href="#">Javascript</a>
                <div role="separator" class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
            <input type="text" class="form-control" placeholder="제목을 입력해주세요">
          </div>

          <div id="editSection"></div>

          <div class="d-flex justify-content-center mt-3">
            <button type="button" class="btn btn-outline-dark w-25 mx-2">임시저장</button>
            <button type="button" class="btn btn-outline-dark w-25 mx-2">작성하기</button>
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
  middleware: 'editor',
  components: {

  },

  mounted() {
    const ToastEditor = require('tui-editor/dist/tui-editor-Editor.min.js')
    new ToastEditor({
      el: document.querySelector('#editSection'),
      initialEditType: 'wysiwyg',
      height: '800px'
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
