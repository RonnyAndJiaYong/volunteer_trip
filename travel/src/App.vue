<template>
  <div>
      <v-header v-bind:volunteer="volunteer"></v-header>
        <div class="tab">
          <div class="tab-item">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-lake__easyiconnet1"></use>
             </svg>
              <router-link to="/volunteerPost">招募帖</router-link>
          </div>
          <div class="tab-item">
              <router-link to="/diary">旅记</router-link>
          </div>
          <div class="tab-item">
              <router-link to="/voiceMap">声音地图</router-link>
          </div>
          <div class="tab-item">
            <router-link to="/personal">我</router-link>
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
    width:100%
    height:40px;
    line-height:40px
    .tab-item
      flex:1
      &>a
        display: block;
        width :100%;
        font-size: 8px;
        text-align:center;
        color: rgba(77,85,93,1)
        &.router-link-active
          color:rgba(155,150,140,0.8)
</style>
