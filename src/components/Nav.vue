<template>
  <div>
    <div class="extra"></div>
    <div class="top">
      <ul class="top-nav">
        <div class="left fas fa-arrow-left" @click="goBack"></div>
        <li><router-link to="/" exact>首页</router-link></li>
        <li><router-link to="/topic">榜单</router-link></li>
        <li><router-link to="/mine">我的</router-link></li>
        <li><router-link to="/search">搜索</router-link></li>
      </ul>  
    </div>
  </div>
  
     
</template>

<script>
export default {
  name:'Nav',
  methods: {
    goBack(){
      this.$router.back();
    }
  },
}
</script>

<style lang="less" scoped>
  .extra{
    height: 41px;
  }
  .top{
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 41px;
  }
  .top-nav{
    z-index: 9999;
    height: 41px;
    display: flex;
    flex-direction: row;
    background-color: #fff;
    .left{
      float: left;
      margin-top: 14px;
      width:30px;
    }
    li{
      color: black;
      flex-grow: 1;
      flex-shrink: 2;
      text-align: center;
      padding-top: 10px;
      a{
        display: block;
        padding-bottom: 8px;
      }
      .active{
        color: red;
        border-bottom: 2px red solid;
      }
    }
  }
  
</style>