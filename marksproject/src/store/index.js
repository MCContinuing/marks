import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";

//安装插件
Vue.use(Vuex)
//创建store对象

const state = {
  index:1,
  }

export default new Vuex.Store({
  state: state,
  mutations,
  actions: {
  },
  modules: {
  }
})

//将任务添加到任务列表中
//数组常用方法push/pop/unshift/shift/sort/reverse/map/filter/reduce
//this.$store.tasksList['old'].push(produce)
//改用mutations方法
//this.$store.commit('addTask',produce)
