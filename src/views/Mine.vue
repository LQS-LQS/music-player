<template>
  <div>
    <div class="title">
      我的歌曲：{{myMusicList.length}}首
    </div>
    <div class="neumorphic everyMusic" v-for="(item, index) in myMusicList" :key="index">
      <input
        type="color"
        name="color"
        id="color"
        value="#45494c"
        class="neumorphic"
      />
      <span class="first">{{ item.songName }}</span>
      <span class="second"><i>歌手：</i>{{ item.singerName }}</span>
      <div class="delete"><i class="fas fa-trash-alt" @click="deleteMusic(item.id)"></i></div>
      <div class="pause" @click="changeMode(index,item.id)" v-show="playIndex == index && isPlaying"><i class="fas fa-pause"></i></div>
      <div class="play" @click="changeMode(index,item.id)" v-show="!(playIndex == index) || isPlaying==false"><i class="fas fa-play"></i></div>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
import axios from 'axios'
export default {
  name:'Mine',
  computed:{
    ...mapState(['myMusicList','isPlaying']),
  },
  data(){
    return{
      playIndex:-1,
      prePlayIndex:-1,
      //isPlaying:false,
    }
  },
  methods: {
    ...mapMutations(['ChangeMusicUrl','DeleteMusic','ChangeIsPlaying','SetIsPlaying']),
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
    deleteMusic(id){
      this.DeleteMusic(id);
    },
  }
}
</script>

<style lang="less">
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
.delete{
  position: absolute;
  right: 50px;
  top: 15px;
  img{
    filter: drop-shadow(40px 40px yellow);
    border: 1px solid red;
  }
}
</style>