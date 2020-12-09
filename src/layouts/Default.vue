<template>
  <div class="layout">
    <Header v-if="$props.top"></Header>
    <div class="container"><slot /></div>
    <Footer v-if="$props.foot"></Footer>
  </div>
</template>

<script>
export default {
  name: "",
  components: {
    Header: () => import("./Header.vue"),
    Footer: () => import("./Footer.vue"),
  },
  props: ["foot","top"],
  data() {
    return {};
  },
  created() {},
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {},
  filter: {},
  computed: {},
  watch: {},
};
</script>

<style lang="less" scoped>
.layout {
  position: relative;
  min-height: 100%;
  .container {
  }
}
</style>
