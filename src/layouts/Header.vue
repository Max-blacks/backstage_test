<template>
  <div class="common-header">
    <div
      class="left-block"
      @click="$router.push({ path: $tp('/') }).catch(() => {})"
    >
      <g-image src="@/assets/img/favicon.png" width="28"></g-image>
      <span class="title">rdev_portal</span>
    </div>
    <div class="right-block">
      <a-menu mode="horizontal">
        <a-menu-item
          key="stack01"
          @click="
            $router
              .push({
                path: $tp('/stack-list'),
              })
              .catch(() => {})
          "
        >
          {{ $t("technology_stack") }}
        </a-menu-item>
        <a-menu-item
          key="stack02"
          @click="$router.push({ path: $tp('/about') })"
        >
          {{ $t("about") }}
        </a-menu-item>
        <a-menu-item
          key="stack03"
          @click="$router.push({ path: $tp('/price') })"
        >
          {{ $t("custom_B") }}
        </a-menu-item>
        <a-menu-item
          key="stack04"
          @click="$router.push({ path: $tp('/price') })"
        >
          {{ $t("custom_C") }}
        </a-menu-item>
        <!-- <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper"
            ><a-icon type="folder-open" />{{ $t("custom_B") }}</span
          >
          <a-menu-item-group title="4.x">
            <a-menu-item key="setting:1"> 4.3.1 </a-menu-item>
            <a-menu-item key="setting:2"> 4.2.1 </a-menu-item>
          </a-menu-item-group>
          <a-menu-item-group title="3.x">
            <a-menu-item key="setting:3"> 3.4.1 </a-menu-item>
            <a-menu-item key="setting:4"> 3.2.1 </a-menu-item>
          </a-menu-item-group>
        </a-sub-menu> -->
        <!-- <a-menu-item key="login">
          <a
            @click="$router.push({ path: '/login' })"
            target="_blank"
            rel="noopener noreferrer"
            >{{ $t("login") }}</a
          >
        </a-menu-item>
        <a-menu-item key="signup">
          <a
            target="_blank"
            rel="noopener noreferrer"
            @click="$router.push({ path: '/sign-up' })"
            >注册</a
          >
        </a-menu-item> -->
      </a-menu>
      <!-- <a-button @click="$router.push({ path: $tp('/login') })">{{
        $t("login")
      }}</a-button> -->
      <I18N></I18N>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {
    I18N: () => import("@/components/I18n.vue"),
  },
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {
    goHome() {
      this.$router
        .push({
          path: this.$tp("/"),
        })
        .catch(() => {});
    },
  },
  filter: {},
  computed: {},
  watch: {},
};
</script>

<style lang="less" scoped>
.common-header {
  height: 63px;
  padding: 0 32px;
  // border-bottom: 1px solid #f1f3f5;

  display: flex;
  align-items: center;
  flex-wrap: wrap;

  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;

  position: sticky;
  top: 0;

  background: #f5f5f5;
  opacity: 0.9;

  z-index: 999;

  .left-block {
    display: flex;
    align-items: center;

    cursor: pointer;

    margin-right: 30px;
    .title {
      font-size: 20px;
      font-weight: 600;
      display: inline-block;

      margin-left: 8px;
    }
  }
  .right-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* width: 100%; */
    flex: 1;
    // 定制化菜单样式
    .ant-menu-horizontal {
      border-bottom: none;
      font-weight: 600;
      background: #f5f5f5;
      .ant-menu-item,
      .ant-menu-submenu {
        border-bottom: none;
        &:hover {
          border-bottom: none;
          color: #00a672;
        }
      }
      .ant-menu-item-selected,
      .ant-menu-submenu-active {
        border-bottom: none;
      }
    }
  }
}
</style>
