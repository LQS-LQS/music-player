<template>
    <div class="searchInfo">
      <input type="text" v-model="searchInfo" >
      <!-- <router-link :to="`/more/${searchInfo}`" @click="search">搜索</router-link> -->
      <a @click="search">搜索</a>
    </div>
      
       <!-- <router-link 
        :to="{
          name:'Moree',
          params:{
            searchName:searchInfo
          }
        }"
        @click="search"
        >搜索</router-link> -->
    <!-- <router-view></router-view> -->
</template>

  

<script>
export default {
  data(){
    return{
      searchInfo:'',
    }
  },
  methods: {
    search(){
      // console.log(1)
      // if(this.searchInfo.trim())  return;
      if(!this.searchInfo.trim()) alert('不可以输入为空');
      this.$router.push({
          name:'More',
          params:{
            searchName:this.searchInfo
          }
      })
    }
  },
}
</script>

<style lang="less" scoped>
  .searchInfo{
    margin-top: 10px;
    display: flex;
    justify-content: space-evenly;
    input{
      height: 30px;
      border-radius: 20px;
      padding-left: 15px;
      width: 70%;
      border: 1px solid rgb(238,236,236);
    }
    a{
      display: inline-block;
      text-align: center;
      vertical-align: center;
      width: 15%;
      height: 30px;
      line-height:30px;
      background-color: aqua;
      border-radius: 10px;
      transform: translateY(3px);
    }
  }
  input:focus{
    outline: none;
    border: 1px solid red;
  }
</style>