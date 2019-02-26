<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-10 col-md-10 mx-auto">
        <h6>댓글</h6>

        <Comment
        :comments="$store.state.comment.list"
        v-on:selectComment="selectComment"
        ></Comment>
        <!-- <div class="comment-area" v-for="comment in this.$store.state.comment.list">


          <div class="commentor-info">
            <h6 class="commentor">
              {{ comment.writer }}
            </h6>
            <small class="comment-date">
              {{ $moment(comment.createdAt).format('YYYY-MM-DD HH:mm:ss') }}
            </small>
            <small class="comment-date">
              | <span @click="commentToDelete = comment.id" data-toggle="modal" data-target="#exampleModal">삭제</span>
              | <span>답글</span>
            </small>
          </div>

          <p>
            {{ comment.content }}
          </p>

          <hr/>
        </div> -->

        <div class="comment-info">
          <input
          type="text"
          class="comment-name"
          placeholder="이름"
          v-model="writer"/>
          <input
          type="password"
          class="comment-password"
          placeholder="비밀번호"
          v-model="password"/>
        </div>

        <textarea
        class="comment"
        placeholder="댓글을 입력해주세요."
        rows="8"
        v-model="content"
        ></textarea>

        <div class="float-right">
          <button
          type="button"
          class="btn btn-outline-secondary"
          @click="insertComment({ writer, password, content })">댓글남기기</button>
        </div>

      </div>
    </div>

    <!-- 댓글 삭제 확인창 -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">댓글 비밀번호</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Password" v-model="commentPassword">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-sm" data-dismiss="modal">취소</button>
            <button
            type="button"
            class="btn btn-danger btn-sm"
            data-dismiss="modal"
            @click="deleteComment({ comment_id: selectedComment.id, password: commentPassword })"
            >삭제</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Comment from './Comment.vue'

export default {
  components: {
    Comment,
  },

  data () {
    return {
      writer: '',
      password: '',
      content: '',
      selectedComment: {},
      commentPassword: '',
    }
  },
  methods: {
    selectComment (comment) {
      this.selectedComment = comment
      this.selectedComment.toggle = true
      comment.toggle = true
    },

    async insertComment ({ writer, password, content }) {
      const { dispatch } = this.$store
      const { id } = this.$route.params
      try {
        await dispatch('comment/INSERT_COMMENT', { writer, password, content, post: id })
        await dispatch('comment/FETCH_COMMENTS', { post_id: id })
        this.writer = ''
        this.password = ''
        this.content  = ''
      } catch (error) {
        console.log('Error from methods/insertComment', error)
      }
    },

    async deleteComment ({ comment_id, password }) {
      const { dispatch } = this.$store
      const { id } = this.$route.params
      try {
        await dispatch('comment/DELETE_COMMENT', { comment_id, password })
        await dispatch('comment/FETCH_COMMENTS', { post_id: id })
        this.commentPassword = ''
      } catch (error) {
        alert('비밀번호가 일치하지 않습니다')
        this.commentPassword = ''
      }
    }
  }
}
</script>
<style scoped>
.comment-area {
  margin: 20px 0;
}
.comment-area p {
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 14px;
  margin: 15px 0;
}
.commentor-info {
  font-family: 'Nanum Gothic', sans-serif;
  display: flex;
  align-items: center;
}
.commentor {
  font-weight: 400;
}
.comment-date {
  font-size: 12px;
  color: #999;
  margin-left: 15px;
  padding-bottom: 7px;
}
.comment-date span {
  cursor: pointer;
}
.child-comment {
  padding-left: 100px;
}
.comment-info {
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 12px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  margin-top: 15px;
}
.comment-name, .comment-password {
  width: 49%;
  padding: 0 10px;
}
.comment {
  width: 100%;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 12px;
}
</style>
