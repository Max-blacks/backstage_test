<template>
  <Layout :foot="true" :top="true">
    <div class="about-us">
      <g-image
        src="@/assets/img/about-02.jpg"
        style="width: 100%; height: max-content; margin-top: 20px"
      ></g-image>
      <div class="introduction">
        <h1 class="title-level-one">{{ $t('About.about') }}</h1>
        <h2 class="title-level-two">{{ $t('About.introductionTitle') }}</h2>
        <hr class="in-hr" />
        <div class="in-info">
          {{ $t('About.introduction') }}
        </div>
        <h2 class="title-level-two">{{ $t('About.developer') }}</h2>
        <hr class="in-hr" />
        <div class="in-info">
          <p>{{ $t('About.frontEnd') }}vue</p>
          <p>{{ $t('About.backend') }}cms</p>
          <p>{{ $t('About.framework') }}gridsome</p>
          <p>{{ $t('About.protocol') }}graphql</p>
          <p>{{ $t('About.deployment') }}docker</p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$t("title_home"),
    };
  },
};
</script>

<style lang="less" scoped>
@media screen and(max-width: 1300px) {
  .about-us {
    max-width: 900px !important;
  }
}
.about-us {
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;

  .introduction {
    margin-top: 20px;
  }
  .title-level-one {
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 24px;
  }
  .title-level-two {
    font-size: 26px;
    font-weight: 500;
  }
  .in-hr {
    background-color: #4ca986;
    height: 2px;
    margin-bottom: 10px;
  }
  .in-info {
    font-size: 16px;
    margin-bottom: 20px;
  }
}
</style>
