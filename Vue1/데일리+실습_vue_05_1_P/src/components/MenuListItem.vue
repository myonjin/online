<template>
  <div class="box_flex box_menu" style = "border: 1px solid black; border-radius: 10px 10px 10px 10px;"
  :class="{'selected_color':menu.selected}" @click="updateMenuList"  >

    <img class="size box_flex" :src="menu.image" alt="">
    <h2 >{{menu.title}}</h2>
    <h2>{{menu.price}}원</h2>
  </div>
</template>

<script>

export default {
  name: 'MenuListItem',
  props: {
    menu: Object,
  },
  methods: {
    updateMenuList (){
      this.$store.dispatch('updateMenuList',this.menu)
      
    }
  },
}
</script>
<style>
.box_menu {
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  padding: 0;
  margin: 0;
}
.selected_color {
  background-color: #3CB371;
}
.box_flex{
  display : flex;
  justify-content: space-around;
}
.size {
  margin-top: 1em;
  width: 40px;
  height: 40px;
}
</style>