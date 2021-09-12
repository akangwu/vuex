<template>
  <div>
    <h3>当前最新的count值为：{{ count }}</h3>
    <h2>{{ $store.getters.showNum }}</h2>
    <h2>{{ showNum }}</h2>
    <button @click="handler1">-1</button>
    <button @click="handler2">-N</button>
    <button @click="handler3">async-1</button>
    <button @click="handler4">async-N</button>
  </div>
</template>
<script>
import { mapState } from "vuex"; //使用mapState辅助函数来获取state中的数值
import { mapMutations, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["showNum"]),
  },
  methods: {
    ...mapMutations(["jianOne", "jianN"]),
    ...mapActions(["asyncJianOne", "asyncJianN"]),
    handler1() {
      this.jianOne();
    },
    handler2() {
      this.jianN(4);
    },
    handler3() {
      this.asyncJianOne();
    },
    handler4() {
      this.asyncJianN(4);
    },
  },
};
</script>
