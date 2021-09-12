<template>
  <div>
    <my-add></my-add>
    <my-jian></my-jian>
  </div>
</template>
<script>
import JiaFa from "../src/components/jiafa";
import JianFa from "../src/components/jianfa";
export default {
  data() {
    return {};
  },
  components: {
    "my-add": JiaFa,
    "my-jian": JianFa,
  },
};
</script>
