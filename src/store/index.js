import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);
Vue.config.devtools = true;

const state = {
  isPlaying: false,
  musicId:'',
  musicUrl:'',
  currentTime:0,
  myMusicList:JSON.parse( localStorage.getItem('list') ) || [],
}

const mutations = {
  ChangeCurrentTime(state,value){
    state.currentTime = value;
  },
  ChangeMusicUrl(state,value){
    state.musicUrl = value;
  },
  ChangeMusicId(state,value){
    state.musicId = value;
  },
  AddMusic(state,obj){
    state.myMusicList.unshift(obj);
    localStorage.setItem('list',JSON.stringify(state.myMusicList) );
  },
  DeleteMusic(state,id){
    state.myMusicList = state.myMusicList.filter(item=>item.id!=id);
    localStorage.setItem('list',JSON.stringify(state.myMusicList) );
  },
  ChangeIsPlaying(state){
    state.isPlaying = !state.isPlaying;
  },
  SetIsPlaying(state){
    state.isPlaying = true;
  }
}
export default new Vuex.Store({
  state,
  mutations,
})
