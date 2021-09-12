<template>
  <div>
    <h3>当前最新的count值为：{{ $store.state.count }}</h3>
    <button @click="handler1">+1</button>
    <button @click="handler2">+N</button>
    <button @click="handler3">async+1</button>
    <button @click="handler4">async+N</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handler1() {
      //想要调用vuex中mutations中定义的同步方法，可以使用commit来实现
      this.$store.commit("addOne");
    },
    handler2() {
      // commit的作用就是调用mutations中的定义的函数
      this.$store.commit("addN", 3);
    },
    handler3() {
      this.$store.dispatch("asyncAddOne");
    },
    handler4() {
      this.$store.dispatch("asyncAddN", 10);
    },
  },
};
</script>
