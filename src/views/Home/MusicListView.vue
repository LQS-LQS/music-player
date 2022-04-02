<template >
  <div class="collection-block" v-if="list.bannerurl">
    <div class="title">
      <h3>{{ list.name }}</h3>
    </div>
    <router-link :to="`/more/${list.name}`">
      <img :src="list.bannerurl" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "MusicListView",
  props: ["list"],
  methods: {

  },
};
</script>

<style lang="less" scoped>
.collection-block {
  display: inline-block;
  width: 50%;
  background-color: #f8f8f8;
  padding: 5px 0px;
  .title {
    text-align: center;
    margin: 14px 0 18px;
    h3 {
      font-weight: 700;
      font-size: 15px;
      display: block;
      flex: 1 1 0%;
    }
  }
}

.item {
  overflow: hidden;
  white-space: nowrap;
  padding: 0 10px;
  margin-bottom: 10px;
}

.btn-more,
.gray,
.main,
.clear-padding {
  font-size: 12px;
}
.btn-more {
  text-align: right;
  color: #333;
}
.gray {
  color: #999;
}
.main {
  overflow:hidden;
	text-overflow:ellipsis;
	white-space:nowrap;
  margin-top: 4px;
}
.clear-padding {
  padding: 0 !important;
}
</style>