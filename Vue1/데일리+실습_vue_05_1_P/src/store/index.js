import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderList: [
    ],
    menuList: [{
      title : '아메리카노',
      price : 3000,
      selected: false, //초기값,
      image:'https://source.unsplash.com/featured/?americano'
    },
    {
      title : '라떼',
      price : 4000,
      selected: false, //초기값,
      image:'https://source.unsplash.com/featured/?latte'
    },
    {
      title : '카푸치노',
      price : 4500,
      selected: false, //초기값,
      image:'https://source.unsplash.com/featured/?cappuccino'
    }

  ],
    sizeList: [{
      name:'small',
      price: 0,
      selected: false,//초기값
    },
    {
      name:'mediun',
      price: 500,
      selected: false,//초기값
    },{
      name:'large',
      price: 1000,
      selected: false,//초기값
    },
  ],
  },
  getters: {
    totalOrderCount(state){
      return state.orderList.length
    },
    totalOrderPrice(state){
      // console.log('여기')
      // console.log(state.orderList)
      // console.log(state.orderList)
      const menuPrice = state.orderList.reduce((total,current) => {
          // console.log(total)
          return total + current.menu.price
        
      }, 0)
      const sizePrice = state.orderList.reduce((total,current) => {
          return total + current.size.price
        
      }, 0)
      // const ageSum = friends.reduce((accumulator, currentObject) => {
      //   return accumulator + currentObject.age;
      // }, 0);


      return menuPrice + sizePrice
    }
  },
  mutations: {
    ADDORDER: function (state) {
    
      const selectedMenu = state.menuList.filter((menu) =>{
          return menu.selected === true
      })
      const selectedSize = state.sizeList.filter((size) =>{
          return size.selected === true
      })
      const order = {
        menu : selectedMenu[0],
        size : selectedSize[0],
      }

      state.orderList.push(order)
    },
    UPDATEMENULIST: function (state,selectedMenu) {
      // console.log(selectedMenu)
      // console.log(state.menuList)
      // console.log(state.menuList[0].selected)
      // console.log(state.menuList[0].selected)
      // state.menuList.selected = selectedMenu
      state.menuList = state.menuList.map((menu) => {
        if (menu === selectedMenu){
          menu.selected = !menu.selected
        }
        return menu
      })  
    },
    UPDATESIZELIST: function (state,selectedSize) {
      // console.log(state.sizeList.selected)
      state.sizeList = state.sizeList.map((size) => {
        if (size === selectedSize){
          size.selected = !size.selected
        }
        return size
      })
    }
  },
  actions: {
    updateMenuList(context,selectedMenu){
      // console.log('2222')
      // console.log(context)
      // console.log('2222')
      context.commit('UPDATEMENULIST',selectedMenu)
    },
    updateSizeList(context,selectedSize){
      
      context.commit('UPDATESIZELIST',selectedSize)
    },
    addOrder(context){
      context.commit('ADDORDER')     
    }
    

  },
  modules: {
  },
 })
