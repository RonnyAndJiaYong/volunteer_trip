<template>
  <div class="volunteer">
  <!-- 义工招募 -->
    <div v-for="v in volunteers">
      <router-link :to="{path: '/volunteerPostDetail', query: {id: v.id}}">
        <section class="recruit">
          <figure class="recruit-icon">
            <img v-bind:src="v.icon" v-bind:alt="v.author" />
          </figure>
          <article class="recruit-art">
            <h1 class="art-header">
              <p>{{v.title}}</p>
              <small>发布于&nbsp;<a v-bind:href="v.author_link">{{v.author}}</a></small>
            </h1>
            <p class="art-footer">
              <span>{{v.love}}回应</span>
              <span>{{v.time}}</span>
            </p>
          </article>
        </section>
      </router-link>
    </div>
  </div>

</template>

<script type='text/ecmascript-6'>
  import networkService from 'Service/networkService.js';
  export default {
    data() {
      return {
        volunteers: ''
      };
    },
    mounted() {
      networkService.send('queryVolunteerPage').then(res => {
        this.volunteers = res.volunteerPage;
      });
    }
  }
</script>


<style lang="stylus" rel='stylesheet/stylus'>
.volunteer
  // background-image:url("../../../static/images/nav-backgroung.jpg")
.recruit
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  border: 1px solid #CCC;
  border: none;
  padding: 15px;
  margin: 8px 0;
  background: #FFF;
  box-sizing: border-box;
  .recruit-icon
    width: 10%;
    height: 100%;
    text-align: left;
    margin: 0;
    margin-right: 10px;
    img
      width: 30px;
      vertical-align: middle;
      border-radius: 50%;
      cursor: pointer;
  .recruit-art
    width: 85%;
    .art-header
      width: 100%;
      font-size: 14px;
      font-weight: normal;
      margin-top: 0;
      color: #404040;
      p
        width: 100%;
        margin-top: 0;
        margin-bottom: 5px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      small
        color: #F30;
        a
          text-decoration: none;
          color: #6CF;
    .art-footer
      display: flex;
      display: -webkit-flex;
      flex-direction: row;
      justify-content: space-between;
      color: #999;
      margin-top: 10px;
      margin-bottom: 0;
      &>span
        font-size: 12px;

</style>
