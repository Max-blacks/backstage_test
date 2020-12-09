<template>
  <Layout :foot="true" :top="true">
    <div class="stack-list">
      <h1>{{ $t("technology_stack") }}</h1>
    </div>
    <div class="card-list">
      <Card
        v-for="(stack) in stackLists"
        :key="stack.id"
        :stack="stack"
      ></Card>
    </div>
  </Layout>
</template>

<script>
export default {
  name: "",
  metaInfo() {
    return {
      title: this.$t("title_list"),
    };
  },
  components: {
    Card: () => import("@/components/BlogLists.vue"),
  },
  props: {},
  data() {
    return {
      stackLists: [],
    };
  },
  created() {},
  async mounted() {
    const { data } = await this.$Ajax.get(
      `${process.env.GRIDSOME_API_URL}stacks?_sort=published_at:DESC`
    );
    this.stackLists = data;
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
@media screen and(max-width: 1300px) {
  .stack-list {
    max-width: 900px !important;
  }
  .card-list {
    max-width: 900px !important;
  }
}
.stack-list {
  margin-right: auto;
  margin-left: auto;
  max-width: 1300px;
  font-size: 20px;
  font-weight: 600;
  padding: 30px;
}
.card-list {
  margin-right: auto;
  margin-left: auto;
  max-width: 1300px;
}
</style>
