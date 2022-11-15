<template>
  <div>
    <div name="media"></div>
    <audio 
      :src="musicUrl"
      name="media"
      ref="media"
      controls
      loop
      autoplay
    >
    <!-- http://m801.music.126.net/20220309171420/2df86d014bc0d9b7ca990e2899725046/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/4442982362/0e99/5b56/f906/136dfc1bcf0f129963c8df412f561626.mp3 -->
    </audio>
    <div class="fullScreen" ref="fullScreen" @click="showOnlyMusic"></div>
  </div>
  
</template>

<script>
import { mapState} from 'vuex'
export default {
  name:'Play',
  data(){
    return{
      id:1487528112,
    }
  },
  computed:{
    ...mapState(['currentTime','musicUrl','isPlaying'])
  },
  mounted(){
    let media = this.$refs.media;
    let height1 = document.documentElement.clientHeight - media.clientHeight;
    media.style.top = height1 + 'px';

    let fullScreen = this.$refs.fullScreen;
    let height2 = document.documentElement.clientHeight - fullScreen.clientHeight ;
    fullScreen.style.position = "fixed";
    fullScreen.style.bottom = '0px';
    // fullScreen.style.top = height2 + 'px';

    this.addEventHandle();

  },
  methods:{
    showOnlyMusic(){
      this.$router.push({
        name:'ShowOnlyMusic',
        params:{
          id:this.id
        }
      });
    },
    addEventHandle(){
      console.log(this.$refs.media)
      this.$refs.media.addEventListener('timeupdate',()=>{
        this.$store.commit('ChangeCurrentTime',this.$refs.media.currentTime)
      })
    }
  },
  watch:{
    isPlaying(value){
      if(value===false){
        this.$refs.media.pause();
      }else{
        this.$refs.media.play();
      }
    }
  }
}
</script>

<style>
audio[name='media']{
  width: 90%;
  height: 44px;
  position: fixed;
}
div[name="media"]{
  width: 100%;
  height: 44px;
}
.fullScreen{
  right: 1px;
  width: 10%;
  height: 44px;
  border-radius: 50%;
  background-color: aqua;
}
</style>