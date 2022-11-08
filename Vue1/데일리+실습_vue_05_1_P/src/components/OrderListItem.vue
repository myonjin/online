<template>
  <div>
    <div class="box_flex2" style = "border: 1px solid black; border-radius: 10px 10px 10px 10px;"
  >
  <div style="display: flex; flex-direction: row; margin-left: 1.5em; ">
    <div style="margin-top: 0em;">
      <img class="size box_flex" :src="order.menu.image" alt="" style="border-radius: 10px 10px 10px 10px; 
      flex-direction: row; margin-right:1em;">
    </div>
    <span style="margin-top : 0.8em">
      <h3 style="margin : 0;">{{order.menu.title}}</h3>
      <h3 style="margin : 0;">{{order.size.name}}</h3>
    </span>
  </div>
    <h2 style="justify-content:center; margin-right: 1.5em;">{{order.size.price+order.menu.price}}원</h2>
  </div> 
  </div>
</template>

<script>
export default {
  name: 'OrderListItem',
  props: {
    order: Object,
  },
  methods:{

  },
  computed: {
    // totalPrice: function () {
    // },
  },
}
</script>

<style>
</style>