<template>
  <div class="detail">
    <figure class="detail-icon">
      <img :src="detail.icon" :alt="detail.author" />
      <figcaption>{{detail.author}}</figcaption>
      <span>{{detail.time}}</span>
    </figure>

    <section class="detail-content">
      <header class="content-head">
        <h1>{{detail.title}}</h1>
      </header>

      <article class="content-main">
        <toggle v-for="(t, i) in detail.text" :content="t" :key="i"></toggle>
          
      </article>

      <footer class="content-foot">
        <span>{{detail.love}}回应</span>
      </footer>
    </section>

  </div>
</template>

<script type="text/ecmascript-6">
  import getVolunteer from '../../api/test.js';

  export default {
    data() {
      return {
        detail: ''
      };
    },
    // props: ['id'],
    mounted() {
      getVolunteer().then(res => {
        this.detail = res[this.$route.query.id];
      });
    },
    components: {
      'toggle': {
        template: `<p v-if="bool" v-html="content.txt">{{content.txt}}</p>
                  <figure class="figureImg" v-else>
                    <img :src="content.txt" alt="#" />
                  </figure>`,
        props: ['content'],
        computed: {
          bool: function() {
            if (/^http/.test(this.content.txt)) {
              return false;
            } else {
              return true;
            }
          }
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .detail
    margin: 20px 25px;
    .detail-icon
      display: flex;
      display: -webkit-flex;
      flex-direction: row;
      align-items: center;
      font-size: 14px;
      margin: 0;
      img
        width: 30px;
        height: 30px;
        margin-right: 10px;
        border-radius: 50%;
      figcaption
        text-align: right;
        color: #F30;
      span
        flex-grow: 2;
        text-align: right;
        color: #999;
    .detail-content
      color: #333;
      .content-head
        margin: 15px 0;
        h1
          text-align: center;
          font-size: 16px;
          font-weight: bold;
          line-height: 22px;
      .content-main
        p
          font-szie: 14px;
          line-height: 24px;
        .figureImg
          text-align: center;
          margin: 0;
          img
            width: 100%;
            height: 220px;
            margin-bottom: 10px;
      .content-foot
        margin-top: 5px;
        margin-bottom: 15px;
        span
          float: right;
          font-size: 14px;
          color: #999;
</style>