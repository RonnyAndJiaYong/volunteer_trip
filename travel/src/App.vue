<template>
  <div>
      <v-header v-bind:volunteer="volunteer"></v-header>
        <div class="tab border-1px">
          <div class="tab-item border1px">
              <router-link to="/volunteer">义工小站</router-link>
          </div>
          <div class="tab-item">
              <router-link to="/onroad">在旅途</router-link>
          </div>
          <div class="tab-item">
              <router-link to="/story">故事</router-link>
          </div>
        </div>
        <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/headers/headers.vue'
  const ERR_OK = 0

  export default {
      data(){
        return {
          volunteer: {}
        }
      },
      created(){
        // GET /someUrl
        this.$http.get('/api/volunteer').then((response) => {
          // get body data
          var resData = response.body
          if (resData.errno === ERR_OK){
              this.volunteer = resData.data
          }
        }, response => {
          // error callback
        })
      },
      components: {
        'v-header': header
      }
  }
</script>


<style lang="stylus" rel='stylesheet/stylus'>
  @import "../static/stylus/mixin"
  .tab
    display:flex
    width:100%
    height:40px;
    line-height:40px
    border-1px(rgb(0,0,0))
    .tab-item
      display :flex
      flex:1
      &>a
        display: block
        font-size: 14px;
        color: rgba(77,85,93,1)
        &.active
          color:rgba(240,20,20,1)

</style>
