<template>
  <Layout :foot="true" :top="true">
    <section class="section block_one">
      <h1 class="title">{{ $t("Index.template") }}</h1>
      <span class="info">{{ $t("Index.templateDesc") }}</span>
    </section>
    <section class="section block_two">
      <div class="card card1">
        <div class="card-tit">
          {{ $t("Index.specAcomp") }}
        </div>
        <div class="card-top">
          <span class="card-tit1">{{ $t("Index.techManaSpec") }}</span>
          <span class="card-content">{{ $t("Index.specifications") }}</span>
          <span class="card-tit1">{{ $t("Index.commonComp") }}</span>
          <span class="card-content">{{ $t("Index.commonCompDesc") }}</span>
        </div>
        <div class="card-bottom"></div>
      </div>
      <div class="dots">
        <div class="dots__dot dot1"></div>
        <div class="dots__dot dot2"></div>
        <div class="dots__dot dot3"></div>
        <div class="dots__dot dot4"></div>
      </div>
      <div class="card">
        <div class="card-tit" style="width: 80px; margin-left: 37%">CI/CD</div>
        <div class="card-top">
          <g-image
            src="@/assets/img/test-platform-01.png"
            class="card-img"
          ></g-image>
        </div>
        <div class="card-bottom"></div>
      </div>
      <div class="dots dots2">
        <div class="dots__dot dot1"></div>
        <div class="dots__dot dot2"></div>
        <div class="dots__dot dot3"></div>
        <div class="dots__dot dot4"></div>
      </div>
      <div class="card card1">
        <div class="card-tit">
          {{ $t("Index.techService") }}
        </div>
        <div class="card-top">
          <!-- <span class="card_content2"
            ><a-icon style="color: #00835c" type="rocket" />&nbsp;&nbsp;{{
              $t("Index.effectAnalysis")
            }}</span
          > -->
          <div class="card_content2_box">
            <span class="card_content2"><a-icon style="color: #00835c" type="eye" />&nbsp;&nbsp;{{
              $t("Index.monitorAnalysis.title")
            }}</span>
              <span class="card_content2_child">
                {{$t("Index.monitorAnalysis.child")}}
              </span>
          </div>
          <div class="card_content2_box">
            <span class="card_content2"
              ><a-icon style="color: #00835c" type="file-text" />&nbsp;&nbsp;{{
                $t("Index.logAnalysis.title")
              }}</span
            >
            <span class="card_content2_child">
                {{$t("Index.logAnalysis.child")}}
            </span>
          </div>
          <div class="card_content2_box">
            <span class="card_content2"
              ><a-icon style="color: #00835c" type="pie-chart" />&nbsp;&nbsp;{{
                $t("Index.dataAnalysis.title")
              }}</span
            >
            <span class="card_content2_child">
                  {{$t("Index.dataAnalysis.child")}}
            </span>
          </div>
          <!-- <div class="card_content2_box">
            <span class="card_content2"
              ><a-icon style="color: #00835c" type="experiment" />&nbsp;&nbsp;{{
                $t("Index.qualityMeasure.title")
              }}</span
            >
            <span class="card_content2_child">
                  {{$t("Index.qualityMeasure.child")}}
            </span>
          </div> -->
        </div>
        <div class="card-bottom"></div>
      </div>
    </section>
    <section class="section blog_title">
      <h2>{{ $t("technology_stack") }}</h2>
    </section>
    <Card
      v-for="(stack, index) in stackLists"
      :key="stack.id"
      :stack="stack"
      v-if="index < 11"
    ></Card>
    <section
      v-if="stackLists.length > 10"
      class="section block-more"
      @click="
        $router
          .push({
            path: $tp('/stack-list'),
          })
          .catch(() => {})
      "
    >
      查看更多>>>
    </section>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      stackLists: [],
    };
  },
  metaInfo() {
    return {
      title: this.$t("title_home"),
    };
  },
  components: {
    Card: () => import("@/components/BlogLists.vue"),
  },
  async mounted() {
    const { data } = await this.$Ajax.get(
      `${process.env.GRIDSOME_API_URL}stacks?_sort=published_at:DESC`
    );
    this.stackLists = data;
  },
};
</script>

<style lang="less" scoped>
@media screen and(max-width: 1300px) {
  .section {
    max-width: 900px !important;
  }
  .card {
    height: auto !important;
    margin-right: 15px !important;
    padding: 14px !important;
    .card-tit {
      margin-top: -37px !important;
    }
    .card-img {
      height: auto !important;
    }
  }
  .block_one {
    padding: 0px 100px 30px 100px !important;
  }
  .dots{
    display: none!important;
  }
}
.section {
  margin-right: auto;
  margin-left: auto;
  max-width: 1300px;
}
.block_one {
  padding: 0px 200px;
  border-radius: 4px;
  padding-bottom: 30px;

  .title {
    font-size: 46px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 28px;
    color: #00835c;
    margin-top: 40px;
  }
  .info {
    font-size: 18px;
    font-weight: 500;
    text-align: left;
    color: #00835c;
  }
}
.block_two {
  padding: 50px 0px;
  border-radius: 4px;
  display: flex;
  position: relative;
  .dots {
    width: 4%;
    height: 5px;
    // background: #00835c;
    position: absolute;
    top: 50%;
    left: 30.6%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .dots__dot{
      width: 10%;
      height: 5px;
      // background: #00835c;
      border-radius: 90%;
      animation-duration: 0.3s;
      animation-timing-function: linear;
      animation-delay: 0s;
      animation-iteration-count: infinite;
      animation-direction: normal;
      animation-fill-mode: none;
      animation-play-state: running;
      animation-name: moveInOutX;
    }
    .dot1{
      background: rgba(10, 135, 98, 0.4);
    }
    .dot2{
      background: rgba(10, 135, 98, 0.6);
    }
    .dot3{
      background: rgba(10, 135, 98, 0.8);
    }
    .dot4{
      background: rgba(10, 135, 98, 1);
    }
  }
  .dots2 {
    left: 65.4%;
  }
  .card {
    height: 400px;
    flex: calc(1 / 3);
    margin-right: 60px;
    border-radius: 4px;
    border: 1px solid rgba(0, 166, 114, 0.4);
    padding: 40px;
    cursor: pointer;
    // .card-tit-box{
    //   display: flex;
    //   justify-content: center;
    //   position: relative;
    // }
    .card-tit {
      min-width: 50px;
      padding: 0 15px;
      height: 35px;
      line-height: 35px;
      background: #000;
      color: #fff;
      font-size: 18px;
      text-align: center;
      border-radius: 3px;
      margin-top: -57px;
      margin-bottom: 36px;
      // font-weight: 800;
    }

    .card-top {
      height: 100%;
      .card-tit1 {
        display: block;
        font-size: 16px;
        font-weight: 800;
        margin-bottom: 10px;
        color: #000;
      }
      .card-content {
        display: block;
        margin-bottom: 20px;
        color: #000;
        line-height: 22px;
        font-size: 13px;
      }
      .card_content2_box{
        margin-bottom: 20px;
        .card_content2 {
        display: block;
        // color: #00835c;
        color: #000;
        font-size: 16px;
        font-weight: 800;
        margin-bottom: 5px;
        margin-left: -10px;
      }
      .card_content2_child{
        color: #000;
        font-size: 13px;
        margin-left: 14px;
        }
      }
      .card-img {
        width: 100%;
        height: 100%;
      }
    }
    .card-bottom {
      height: 0%;
    }

    &:nth-last-child(1) {
      margin-right: 0;
    }
  }
  .card:hover {
    box-shadow: 0px 0px 10px rgba(0, 166, 114, 0.3);
  }
  .card1 {
    .card-tit {
    }
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.blog_title {
  font-size: 22px;
  padding: 0 10px 20px 10px;
}
.block-more {
  color: #00835c;
  cursor: pointer;
  text-align: center;

  padding-top: 10px;
  font-size: 16px;
}
</style>
