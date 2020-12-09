<template>
  <div>
    <a-select
      style="width: 8<!-- -->0px"
      v-model="currentLocale"
      @change="localeChanged"
    >
      <a-select-option
        v-for="locale in availableLocales"
        :key="locale"
        :value="locale"
      >
        {{ $t(locale) }}
      </a-select-option>
    </a-select>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      currentLocale: this.$i18n.locale.toString(),
      availableLocales: this.$i18n.availableLocales,
    };
  },
  created() {},
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {
    localeChanged() {
      this.$router.push({
        path: this.$tp(this.$route.path, this.currentLocale, true),
      });
    },
  },
  filter: {},
  computed: {},
  watch: {},
};
</script>

<style lang="less" scoped>
</style>
