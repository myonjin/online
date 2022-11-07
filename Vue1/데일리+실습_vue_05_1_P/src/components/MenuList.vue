<template>
  <div class="menu-list">
    <h1 class="drink">1. 음료를 고르세요 &nbsp;</h1>
    <MenuListItem/>
    {{menuList}}
  </div>
</template>

<script>
import MenuListItem from './MenuListItem.vue';

export default {
  name: 'MenuList',
  components: {
    MenuListItem
  },
  computed: {
    menuList: function () {
      return this.$store.state.orderList
    },
  },
  methods: {
    selectMenu: function () {},
  },
}
</script>

<style>
.drink{
  background-color: antiquewhite;
  padding-right: 30px;
}
</style>