<template>
  <div>
    <a-result
      status="404"
      title="404"
      sub-title="Sorry, the page you visited does not exist."
    >
      <template #extra>
        <a-button type="primary" @click="$router.push({ path: $tp('/') })">
          Back Home
        </a-button>
      </template>
    </a-result>
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
</style>
