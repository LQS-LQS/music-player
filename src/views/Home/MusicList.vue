<template>
  <div class="musicView">
    <music-list-view v-for="item,index in list" :key="index" :list="list[index]"></music-list-view>
  </div>
</template>

<script>
import MusicListView from './MusicListView.vue'
export default {
  name:'MusicList',
  components:{MusicListView},
  data() {
    return {
      list:[
        {name:'慢音乐',bannerurl:'http://imge.kugou.com/v2/mobile_class_banner/%7Bsize%7D/6f96931ffde89cd1860cd2f9af1b39f2.jpg'},
        {name:'情歌',bannerurl:'http://imge.kugou.com/v2/mobile_class_banner/%7Bsize%7D/23335d179783c0f2b5c3ededfaa9b594.jpg'},
        {name:'劲歌热舞',bannerurl:'http://imge.kugou.com/v2/mobile_class_banner/%7Bsize%7D/5fe25b1fb274e7f33027dbc287d3a2a3.jpg'},
        {name:'抒情歌曲',bannerurl:'http://imge.kugou.com/v2/mobile_class_banner/%7Bsize%7D/db144362e0c2f045ee0216ddcdf5fd70.jpg'},
        {name:'欧美音乐',bannerurl:'http://imge.kugou.com/v2/mobile_class_banner/%7Bsize%7D/41344e747e69153ba2bd463c2ccfc18f.jpg'},
        {name:'男团女团',bannerurl:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimge.kugou.com%2Fstdmusic%2F20160809%2F20160809164941834022.jpg&refer=http%3A%2F%2Fimge.kugou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649577575&t=d2e7c0a2d8736419db8e7ffb2fb5e162'},
        ]
    }
  },
}
</script>

<style lang="less">

</style>