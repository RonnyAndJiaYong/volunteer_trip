<template>
  <div>
      <v-header v-bind:volunteer="volunteer"></v-header>
        <div class="tab">
          <div class="tab-item">

            <router-link to="/volunteerPost">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-road__easyiconnet"></use>
              </svg>
              <span class="icon-font">招募帖</span>
            </router-link>
          </div>
          <div class="tab-item">
              <router-link to="/diary">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-iceberg__easyiconnet"></use>
                </svg>
                <span class="icon-font">旅记</span>
              </router-link>
          </div>
          <div class="tab-item">
              <router-link to="/voiceMap">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-lake__easyiconnet1"></use>
                </svg>
                <span class="icon-font"> 声音地图</span>
              </router-link>
          </div>
          <div class="tab-item">
            <router-link to="/personal">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-reindeer__easyiconnet"></use>
              </svg>
              <span class="icon-font"> 我</span>
            </router-link>
          </div>
        </div>
        <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/headers/headers.vue'

  export default {
      data(){
        return {
          volunteer: {}
        }
      },
      created(){
      },
      components: {
        'v-header': header
      }
  }
</script>


<style lang="stylus" rel='stylesheet/stylus'>
  @import "../static/stylus/mixin"
  .tab
    position:fixed;
    bottom:0;
    display:flex
    flex-direction :row;
    padding-top :3px;
    width:100%;
    height:55px;
    line-height:40px;
    background-color:rgba(140,180,250,0.8);
    font-family :FangSong;

    .tab-item
      flex:1;
      &>a
        display :flex;
        flex-direction:column;//定义项目的对齐方向
        align-items:center ;//定义项目在交叉轴上
        width :100%;
        height :100px;
        font-size: 8px;
        font-weight :800;
        text-align:center;
        color: rgba(77,85,93,1)
        .icon
          order :0;
          width: 2.5em;
          height: 2.5em;
          vertical-align: -0.15em;
        .icon-font
          order :1;
          margin-top :-0.5em;
        &.router-link-active
          color:rgba(230,60,230,1);
          background:rgba(233,233,233,0.6);
          border-radius :50%;
</style>
