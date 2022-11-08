<template>
  <div>
    <div  @click="addOrder" style="border-radius: 10px 10px 10px 10px; background-color: #3CB371;">
      <h1 style="text-align: center; color:white;">장바구니 담기</h1>
    </div>
    <div class="backcol">
      <h1>주문 내역 </h1>
      <h3>총{{totalOrderCount}}건: {{totalOrderPrice}}원</h3>
      <OrderListItem v-for="(order,index) in orderList" :key="index" :order="order"/>
    </div>
    <!-- {{orderList}} -->
  </div>
</template>

<script>
import OrderListItem from './OrderListItem.vue';

export default {
  name: 'OrderList',
  // data() {
  //   return {
  //     title : '카푸치노',
  //     name : '',
  //     price : '4500원',
  //     selected: false, //초기값,
  //     image:''
  //   }
  // },
  components: {
    OrderListItem,
  },
  methods:{
    addOrder() {
      this.$store.dispatch('addOrder')
    }
  },
  computed: {
    orderList: function () {
      return this.$store.state.orderList
    },
    totalOrderCount: function () {
      return this.$store.getters.totalOrderCount

    },
    totalOrderPrice: function () {
      return this.$store.getters.totalOrderPrice
    },
  },
}
</script>

<style>
.backcol{
  background-color: bisque;
}
</style>