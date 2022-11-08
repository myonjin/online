<template>
  <div class="box_flex box_size" style = "border: 1px solid black; border-radius: 10px 10px 10px 10px;"
  :class="{'selected_color':size.selected}" @click="updateSizeList"  >
    <!-- <img class="size box_flex" :src="size.image" alt=""> -->
    <h2 >{{size.name}}</h2>
    <h2>{{size.price}}원</h2>
  </div>
</template>

<script>
export default {
  name: 'SizeListItem',
  props: {
    size: Object,
  },
  methods: {
    updateSizeList (){
      this.$store.dispatch('updateSizeList',this.size)
      
    }
}
}
</script>

<style>
.box_size {
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
.box_flex2{
  display : flex;
  justify-content: space-between;
}
.size {
  margin-top: 1em;
  width: 40px;
  height: 40px;
}
</style>