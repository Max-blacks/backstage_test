<template>
  <Layout :foot="true" :top="true">
    <!-- 文章头 -->
    <div class="stack-title">
      <h1 class="title">{{ stackData.title }}</h1>
      <p class="date">
        {{ dateFormat("YYYY-mm-dd HH:MM:SS", stackData.published_at) }}
      </p>
      <div class="author-info-title">
        <g-image class="img1" src="../assets/img/portrait.jpg" />
        <p>{{ $t("author") }}：{{ stackData.author }}</p>
      </div>
      <hr class="hr1" />
    </div>

    <!-- 文章内容部分 -->
    <div class="stack-content">
      <div v-html="$show(stackData.content)" class="content" />

      <!-- 作者信息部分 -->
      <div class="author-info">
        <p>{{ $t("author") }}：{{ stackData.author }}</p>
        <g-image class="img2" src="../assets/img/portrait.jpg" />
      </div>
    </div>
  </Layout>
</template>

<script>
import dateFormat from "@/assets/js/dateFormat.js";
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      dateFormat,
      stackData: {},
    };
  },
  created() {},
  async mounted() {
    const { data } = await this.$Ajax.get(
      `${process.env.GRIDSOME_API_URL}stacks/${this.$route.query.id}`
    );
    this.stackData = data;
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
@media screen and(max-width: 1708px) {
  .author-info {
    display: none;
  }
  .author-info-title {
    display: flex !important;
    align-items: center;
  }
  .stack-title {
    max-width: 900px !important;
  }
  .stack-content {
    max-width: 900px !important;
  }
}

.stack-title {
  margin-right: auto;
  margin-left: auto;
  max-width: 1300px;

  padding: 32px;
  padding-bottom: 10px;

  .title {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 15px;
    color: #4ca986;
  }
  .date {
    font-size: 14px;
    color: #919aa3;
    line-height: 20px;
    margin-bottom: 15px;
  }
  .hr1 {
    background-color: #4ca986;
  }
  .author-info-title {
    min-height: 50px;
    border-radius: 4px;
    font-weight: 900;
    display: none;
    margin-bottom: 24px;
    padding: 20px;
    box-shadow: 0 4px 15px 0 rgba(7, 42, 68, 0.1);
    // flex-direction: column;
    .img1 {
      width: 50px;
      height: 50px;
      margin-right: 15px;
    }
  }
}
.stack-content {
  margin-right: auto;
  margin-left: auto;
  max-width: 1300px;

  padding: 32px;

  position: relative;
  // overflow-x: scroll;
  line-height: 2;

  .content {
    overflow-x: scroll;
  }

  .author-info {
    width: 200px;
    min-height: 200px;
    border-radius: 4px;
    position: absolute;
    top: 32px;
    left: -200px;
    font-weight: 900;
    padding: 20px;
    box-shadow: 0 4px 15px 0 rgba(7, 42, 68, 0.1);
    text-align: center;
    .img2 {
      width: 150px;
      height: 150px;
      margin-top: 15px;
    }
  }
}
</style>
