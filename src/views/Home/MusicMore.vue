<template>
  <div class="moreMusic">
    <div class="title">
      全部歌曲{{moreData.length}}
    </div>
    <div class="neumorphic everyMusic" v-for="(item, index) in moreData" :key="index">
      <input
        type="color"
        name="color"
        id="color"
        value="#45494c"
        class="neumorphic"
      />
      <span class="first">{{ item.name }}</span>
      <span class="second"><i>歌手：</i>{{ item.artists[0].name }}</span>
      <div class="plus"> <img src="../../../src/assets/jiahao.png" @click="addMusic(item.id,item.name,item.artists[0].name)"></div>
      <div class="pause"  @click="changeMode(index,item.id)" v-show="playIndex == index && isPlaying"><i class="fas fa-pause"></i></div>
      <div class="play"  @click="changeMode(index,item.id)" v-show="!(playIndex == index) || isPlaying==false"><i class="fas fa-play"></i></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {mapMutations, mapState} from 'vuex'
export default {
  name: "MusicMore",
  data() {
    return {
      moreData: [],
      playIndex:-1,
      prePlayIndex:-1,
      id:'',
    };
  },
  computed:{
    ...mapState(['isPlaying'])
  },
  methods: {
    ...mapMutations(['ChangeMusicUrl','AddMusic','ChangeIsPlaying','SetIsPlaying']),
    changeMode(index,id){
      this.playIndex = index;
      if(this.playIndex != this.prePlayIndex){
        this.SetIsPlaying();
        axios.get(`https://autumnfish.cn/song/url?id=${id}`)
        .then(response=>{
          console.log(response.data)
          let url = response.data.data[0].url;
          this.$store.commit('ChangeMusicUrl',url);
          this.$store.commit('ChangeMusicId',id);
        })
      }else{
        this.ChangeIsPlaying();
      }
      this.prePlayIndex = this.playIndex;
      this.id = id;
    },
    addMusic(id,songName,singerName){
      this.AddMusic({id,songName,singerName});
    }
  },
  created() {
    axios.get(`https://autumnfish.cn/search/?keywords=${this.$route.params.searchName}`)
    .then(response=>{
      console.log(response.data)
      this.moreData = response.data.result.songs;
    },err=>{
      console.log('请求失败了',err.message);//message是错误的原因
    })
  },
  beforeRouteEnter (to, from, next) {
    if(to.params.searchName.trim())
      next();
  }
};
</script>

<style scoped lang="less">
.neumorphic {
  margin-top: 6px;
  border-radius: 1rem;
  background: var(--color);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: -0.25rem -0.25rem 0.5rem rgba(255, 255, 255, 0.07),
    0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.12),
    -0.75rem -0.75rem 1.75rem rgba(255, 255, 255, 0.07),
    0.75rem 0.75rem 1.75rem rgba(0, 0, 0, 0.12),
    inset 8rem 8rem 8rem rgba(0, 0, 0, 0.05),
    inset -8rem -8rem 8rem rgba(255, 255, 255, 0.05);
  overflow: hidden;
}
input.neumorphic {
  width: 1rem;
  height: 1rem;
  border: 0;
  padding: 0;
  border-radius: 50%; /*圆形 */
  display: inline-block;
  border: 1px solid rgba(255, 255, 255, 0.5);
  cursor: pointer;
  overflow: hidden;
}
input[type="color"]::-webkit-color-swatch {
  opacity: 0;
}
.everyMusic{
  height: 50px;
  position: relative;
  span.first{
    margin-left: 10px;
  }
  span.second{
    display:block;
    margin-left: 25px;
  }
  .play,.pause{
    color: rgb(94, 83, 97);
    position: absolute;
    right: 20px;
    top: 15px;
  }
}
.title{
  text-align: center;
  font-weight: 700;
  color: #FE007F;
}
.plus{
  height: 20px;
  width: 20px;
  position: absolute;
  right: 45px;
  top: 13px;
}
</style>