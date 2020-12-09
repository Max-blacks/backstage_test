<template>
  <div class="common-footer">
    <p>
      Technology blog basic model, content to be determined！
    </p>
    <p>技术博客基础模型，内容待定</p>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {
    // 页面布局优化-页脚位置自适应
    this.$nextTick(() => {
      let f = document.getElementsByClassName("common-footer");
      let con = document.getElementsByClassName("container");

      con[0].style.paddingBottom = `${f[0].clientHeight}px`;
    });
  },
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
.common-footer {
  position: absolute;
  bottom: 0px;
  width: 100%;

  text-align: center;
  padding: 20px;

  border-top: 1px solid #f1f3f5;
}
</style>
