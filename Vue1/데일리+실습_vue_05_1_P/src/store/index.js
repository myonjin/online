import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderList: [],
    menuList: [{
      title : '아메리카노',
      price : 3000,
      selected: true, //초기값,
      image:'<https://source.unsplash.com/featured/?americano>'
    }],
    sizeList: [{
      name:'small',
      price: 500,
      selected: true,//초기값
    }],
  },
  getters: {
  },
  mutations: {
    addOrder: function (state,orderItem) {
      state.orderList.push(orderItem)

    },
    UPDATEMENULIST: function (state,selectedMenu) {
      // console.log(selectedMenu)
      // console.log(state)
      // console.log(state.menuList[0])
      // console.log(state.menuList[0].selected)
      state.menuList.selected = selectedMenu
    },
    updateSizeList: function (state,selectedSize) {
      state.sizeList.selected = selectedSize
    },
  },
  actions: {
    updateMenuList(context,selectedMenu){
      // console.log('2222')
      // console.log(context)
      // console.log('2222')
      context.commit('UPDATEMENULIST',selectedMenu)
    },

  },
  modules: {
  }
})