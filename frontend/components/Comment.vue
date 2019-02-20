<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-10 col-md-10 mx-auto">
        <h6>댓글</h6>

        <div class="comment-area" v-for="item in [1, 2, 3]">

          <div class="commentor-info">
            <h6 class="commentor">BlueCitron</h6>
            <small class="comment-date">2019-02-19 18:56:35</small>
            <small class="comment-date">
              | <span>삭제</span>
              | <span>답글</span>
            </small>
          </div>

          <p>
            댓글을달았습니다 제가
          </p>

          <hr/>
        </div>

        <div class="comment-info">
          <input type="text" class="comment-name" placeholder="이름"/>
          <input type="password" class="comment-password" placeholder="비밀번호"/>
        </div>

        <textarea
        class="comment"
        placeholder="댓글을 입력해주세요."
        rows="8"
        ></textarea>

        <div class="float-right">
          <button type="button" class="btn btn-info">댓글남기기</button>
        </div>

      </div>
    </div>

  </div>
</template>
<script>
export default {

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
