<template>
  <div id="app">
    <h1 style="text-align: center;">Coffee Order App</h1>
    <!-- <input type="text" @keyup.enter="updateMenuList"> -->
    <div class="box">
      <MenuListVue/> 
      <SizeListVue/>
    </div>
    <OrderListVue/>
  </div>
</template>

<script>
import MenuListVue from './components/MenuList.vue';
import SizeListVue from './components/SizeList.vue';
import OrderListVue from './components/OrderList.vue';

export default {
  name: 'App',
  components:{
    MenuListVue,
    SizeListVue,
    OrderListVue,
  },
  methods:{
    
  }
}
</script>

<style>
  .box {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  padding: 10px;
  margin: 10px;
}

ul {
  list-style: none;
}
</style>
