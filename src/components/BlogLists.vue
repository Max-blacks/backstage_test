// 技术栈帖子列表块儿
<template>
  <section class="section block_lists">
    <p class="stack_date">
      {{ dateFormat("YYYY-mm-dd HH:MM:SS", $props.stack.published_at) }}
    </p>
    <h3
      class="stack_title"
      @click="
        $router.push({ path: $tp('/stack'), query: { id: $props.stack.id } })
      "
    >
      {{ $props.stack.title }}
    </h3>
    <p class="stack_author">{{ $props.stack.author }}</p>
    <p class="stack_summary">
      {{ $props.stack.summary }}
    </p>
  </section>
</template>

<script>
import dateFormat from "@/assets/js/dateFormat.js";
export default {
  name: "",
  components: {},
  props: ["stack"],
  data() {
    return {
      dateFormat,
    };
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
.block_lists {
  // box-shadow: 0 4px 15px 0 rgba(7, 42, 68, 0.1);
  border-radius: 4px;
  padding: 32px;

  margin-bottom: 20px;
  background-color: #fff;
  transition: all 0.2s linear;

  .stack_date {
    font-size: 14px;
    color: #919aa3;
    line-height: 20px;
  }
  .stack_title {
    margin: 12px 0;
    font-size: 20px;
    line-height: 28px;
    color: #4ca986;

    cursor: pointer;
  }
  .stack_author {
    font-size: 14px;
    color: #36435c;
    line-height: 20px;
  }
  .stack_summary {
    margin-top: 20px;
    // margin-bottom: 32px;
    font-size: 14px;
    line-height: 20px;
    color: #919aa3;
  }

  &:hover {
    transform: translate3d(0, -2px, 0);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
}
.section {
  margin-right: auto;
  margin-left: auto;
  max-width: 1300px;
}
</style>
