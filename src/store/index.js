import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  }, // 状态管理
  mutations: {
    // 只能通过mutations更改state中的数据，推荐使用，便于数据的集中管理
    addOne(state) {
      //mutations里面方法都有一个形参，这个形参就是state
      state.count++;
    },
    addN(state, step) {
      state.count += step;
    },

    jianOne(state) {
      state.count--;
    },
    jianN(state, step) {
      state.count -= step;
    },
  }, // 同步处理函数
  actions: {
    asyncAddOne(context) {
      setTimeout(() => {
        context.commit("addOne"); //通过commit修改mutations中的方法
      }, 1000);
    },
    asyncAddN(context, step) {
      setTimeout(() => {
        context.commit("addN", step);
      }, 2000);
    },
    asyncJianOne(context) {
      setTimeout(() => {
        context.commit("jianOne");
      }, 1000);
    },
    asyncJianN(context, step) {
      setTimeout(() => {
        context.commit("jianN", step);
      }, 1000);
    },
  }, // 同步和异步函数都可以在这里写
  // getters相当于vue中的计算属性
  getters: {
    showNum: (state) => {
      return `当前最新值是${state.count}`;
    },
  },
  modules: {}, // 模版
});
