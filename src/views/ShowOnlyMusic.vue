<template>
  <div class="main" scroll="no">
    <img src="../../src/assets/jiahao.png" @click="addMusic(musicId)" />
    <div class="img-wrapper">
      <img
        src="https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg"
      />
    </div>
    <div class="lrcContainer">
      <div class="lrc" ref="lrc">
        <p
          v-for="(item, key, index) in LRC"
          :key="index"
          class="lrc-p"
          :class="{
            active:
              currentTime * 10 > allKeys[index] &&
              currentTime * 10 < allKeys[index + 1],
          }"
        >
          <span>{{ item }}{{ scrollLRC(index) }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
import axios from 'axios'
export default {
  name:'ShowOnlyMusic',
  computed:{
    ...mapState(['currentTime','musicUrl','musicId'])
  },
  data() {
    return {
      LRC:{},
      musicIyric:'',
      allKeys:[],
    }
  },
  methods: {
    ...mapMutations(['AddMusic']),
    scrollLRC(index){
      if(this.currentTime*10 > this.allKeys[index] && 
        this.currentTime*10 < this.allKeys[index+1]){
        this.$refs.lrc.style.top = -(30*(index-2)) + 'px';
      }
    },
    getLRC(musicId){
      axios.get(`https://autumnfish.cn/lyric/?id=${musicId}`)
      .then(response=>{
        console.log('4\n'+response.data)
        this.musicIyric = response.data.lrc.lyric;
        let LRC = {};
        let arr = this.musicIyric.split('[');
        let temp,time,sec,min;
        for(let i=1;i<arr.length;i++){
          temp = arr[i].split(']');
          time = temp[0]; //获取时间字符串xx:yy.zzz
          min = parseInt( time.slice(0,2) );//获取分钟
          sec = min*60 + parseInt( time.slice(3) ) + time[6]*0.1;//获取每一句歌词对应的事件
          LRC[sec*10] = temp[1].split("\n")[0];
          this.allKeys.push(sec*10);
        }
        this.LRC = LRC;
      });
    },
    addMusic(id){
    axios.get(`https://autumnfish.cn/search/?keywords=${id}`)
    .then(response=>{
      console.log(response.data)
        this.AddMusic({id:id,
          songName:response.data.result.songs[0].name,
          singerName:response.data.result.songs[0].artists[0].name
        })
      });
    },
  },
  mounted() {
    this.getLRC(this.musicId);
  },
  watch:{
    musicId(value){
      this.getLRC(value);
    }
  }
}
</script>

<style scoped lang="less">
.main > img {
  width: 40px;
  float: right;
}
.img-wrapper {
  width: 200px;
  margin: 10px auto;
  img {
    transition: rotateX(360deg), infinite, rotateY(360deg), 1s;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    animation: test 5s infinite linear;
    -webkit-animation: test 5s infinite linear;
  }
}
.lrcContainer {
  width: 100%;
  height: 400px;
  overflow: scroll;
  position: relative;
  .lrc {
    width: 100%;
    position: absolute;
    top: 0px;
    transition: top, 1s;
    .lrc-p {
      text-align: center;
      height: 30px;
      line-height: 30px;
      transition: 1s color;
      overflow: hidden;
    }
  }
  .up30 {
    margin-top: -30px;
  }
}
.active {
  color: red;
  font-size: 20px;
}
@keyframes test {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
}
</style>