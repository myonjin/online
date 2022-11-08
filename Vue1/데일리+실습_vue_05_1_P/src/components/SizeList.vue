<template>
  <div class="width">
    <h1 class="sizego">2. 사이즈를 고르세요.</h1>
    <SizeListItem v-for="(size,index) in sizeList" :key="index" :size="size"/>
    
  </div>
</template>

<script>
import SizeListItem from './SizeListItem.vue';

export default {
  name: 'SizeList',
  components :{
    SizeListItem
  },
  methods: {
    onSelectMenu: function () {},
  },
  computed: {
    sizeList: function () {
      return this.$store.state.sizeList
    },
  },
}
</script>

<style>
.sizego{
  background-color: rgb(79, 195, 82);
  padding-right: 5px;
}
.drink{
  background-color: antiquewhite;
  padding-right: 5px;
}
.width{
  width: 500px;
}
</style>