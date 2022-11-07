<template>
  <div>
    <h1 class="sizego">2. 사이즈를 고르세요.</h1>
    <sizeListItem/>
    {{sizeList}}
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
}
</style>