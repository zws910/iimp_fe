<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <b-card no-body class="mb-4">
          <b-card-header header-tag="h6" class="with-elements">
            <div class="card-header-title">大幅拉升</div>
            <!-- <div class="card-header-elements ml-auto">
              <b-btn variant="default" style="float: right" v-b-modal.modal-scrollable>查看今日所有数据</b-btn>
              <b-modal id="modal-scrollable" scrollable title="Scrollable Content">
                <p class="my-4" v-for="i in 20" :key="i">
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                  in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>
              </b-modal>
            </div>-->
          </b-card-header>
          <b-card-body>
            <swiper class="swiper-container" :options="verticalSwiper" id="swiper-vertical">
              <swiper-slide v-for="data in abnormalData" :key="data.code">
                <div class="abnormal-alert">
                  <a href="javascript:void(0)">{{ data.author }}</a>
                  <span class="text-muted">发布于</span>
                  <!-- <a href="javascript:void(0)">Article Name</a> -->
                  <span class="text-muted small">{{ data.pub_timestamp*1000 | formatDate }}</span>
                  <p class="my-1">{{ data.title }}</p>
                  <p class="my-1">{{ data.content }}</p>
                  <!-- <p class="my-1">{{ data.targets }}</p> -->
                  <div class="clearfix">
                    <div class="news-item-intro">
                      <ul class="stock-group" v-for="target in data.targets" :key="target">
                        <li class="stock-group-item">
                          <span class="stock-group-name">{{ marketsData[target] | formatName }}</span>
                          <span class="stock-group-rate">{{ marketsData[target] | formatRate }}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <div slot="pagination" class="swiper-pagination"></div>
            </swiper>
            <!-- <h6 style="text-align:center; position: relative; top: 45%">暂时没有关注的股票有大幅拉升</h6> -->
          </b-card-body>
        </b-card>
      </div>

      <!-- 生成Plus内参 -->
      <div class="col-md-6">
        <small class="text-light font-weight-semibold">生成PLUS内参</small>
        <b-form>
          <b-form-group label="开始日期">
            <input type="date" class="form-control" v-model="startDate">
          </b-form-group>
          <b-form-group label="结束日期">
            <input type="date" class="form-control" v-model="endDate">
          </b-form-group>
        </b-form>
        <b-btn id="secondaryTooltip" title="如没有选择日期范围，生成" variant="primary" @click="handlePlus">生成</b-btn>
        <b-btn id="btn1" @click="handleDown">下载</b-btn>
      </div>

      <!-- 资讯流 -->
      <div class="col-md-6">
        <b-card no-body class="mb-4">
          <b-card-header>
            <a
              class="d-flex justify-content-between text-body"
              href="javascript:void(0)"
              v-b-toggle.accordion2-2
            >
              资讯流
              <div class="collapse-icon"></div>
            </a>
          </b-card-header>
          <b-collapse id="accordion2-2" visible accordion="accordion2">
            <b-card-body>
              <b-form-group label>
                <b-form-checkbox-group
                  v-model="selected"
                  :options="cat_options"
                  name="cat-filters"
                  @input="renderInfo"
                ></b-form-checkbox-group>
              </b-form-group>
            </b-card-body>
            <hr>
          </b-collapse>
          <b-card-body>
            <!-- 初次加载 -->
            <div class="media pb-1 mb-3" v-for="data in renderInfoList" :key="data.id">
              <img
                :src="`${publicUrl}img/avatars/9-small.png`"
                class="d-block ui-w-40 rounded-circle"
                alt
              >
              <div class="media-body ml-3">
                <a href="javascript:void(0)">{{ data.author }}</a>
                <span class="text-muted">发布于</span>
                <!-- <a href="javascript:void(0)">Article Name</a> -->
                <span class="text-muted small">{{ data.pub_timestamp*1000 | formatDate }}</span>
                <a
                  href="javascript:void(0)"
                  class="badge badge-default"
                >{{ data.category | formatCategory }}</a>
                <span class="news-item-title">{{ data.title }}</span>
                <pre
                  class="news-item-detail"
                  style="border:none;resize:none;width:100%;"
                  readonly
                  wrap="soft"
                  v-html="data.content"
                ></pre>
                <div class="clearfix">
                  <div class="news-item-intro">
                    <ul class="stock-group" v-for="target in data.targets" :key="target">
                      <li class="stock-group-item">
                        <span class="stock-group-name">{{ marketsData[target] | formatName }}</span>
                        <span class="stock-group-rate">{{ marketsData[target] | formatRate }}</span>
                      </li>
                    </ul>
                  </div>
                  <!-- <a href="javascript:void(0)" class="float-right text-lightest small">
                    <span class="ion ion-ios-thumbs-down"></span>
                  </a>
                  <a href="javascript:void(0)" class="float-right text-lightest small">
                    <span class="ion ion-ios-thumbs-up mr-2"></span>
                  </a>-->
                  <!-- <span class="float-left text-muted small">{{ data.pub_timestamp*1000 | formatDate }}</span> -->
                </div>
                <span>
                  <hr>
                </span>
              </div>
            </div>
          </b-card-body>
          <a
            href="javascript:void(0)"
            class="card-footer d-block text-center text-body small font-weight-semibold"
            @click="moreInfo"
          >加载更多</a>
        </b-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.swiper-container .swiper-slide {
  padding: 1px 46px;
  background: #ffffff;
}

#swiper-vertical {
  max-height: 195px;
}

.abnormal-alert {
  padding: 5px;
}
textarea {
  outline: none;
}
</style>
<style src="@/vendor/libs/vue-awesome-swiper/vue-awesome-swiper.scss" lang="scss"></style>

<script>
import Vue from "vue";
import { formatDate } from "@/common/date.js";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { SweetModal, SweetModalTab } from "sweet-modal-vue";

// 异动url
const unusualUrl = "http://qmx.jrjimg.cn/market.do";

// 异动类别 t
const unusualTypes = [
  { type: "大单买入", t: 5, d: 3, m: "sh" },
  { type: "大单卖出", t: 6, d: 4, m: "sh" },
  { type: "火箭发射", t: 12, d: 6, m: "sh" },
  { type: "高台跳水", t: 13, d: 7, m: "sh" },
  { type: "封涨停板", t: 8, d: 7, m: "sh" },
  { type: "封跌停板", t: 9, d: 7, m: "sh" }
];

// 板块
const info_cats_dic = [
  { id: 1, name: "淘股吧" },
  { id: 2, name: "36kr" },
  { id: 3, name: "e公司" },
  { id: 4, name: "选股宝" },
  { id: 5, name: "腾讯科技" },
  { id: 6, name: "深互动易" },
  { id: 7, name: "沪互动易" },
  { id: 8, name: "测试" }
];

const info_cats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// var stockSet = new Set()
// var stocks = []

export default {
  name: "dashboard-1",
  metaInfo: {
    title: "主页"
  },
  components: {
    swiper,
    swiperSlide,
    SweetModal,
    SweetModalTab
  },
  data: () => ({
    limit: 20,
    infoData: [],
    renderInfoList: [],
    items: [],
    stocks: [],
    stockSet: new Set(),
    codeSet: new Set(),
    marketsData: {},
    unusualData: [],
    abnormalData: [],
    downUrl: "",
    startDate: "",
    endDate: "",
    selected: [11, 12],
    cat_options: [
      { text: "测试", value: 8 },
      { text: "一线", value: 11 },
      { text: "内线", value: 12 }
    ],

    swiperWithPagination: {
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    },

    verticalSwiper: {
      direction: "vertical",
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    },

    polling_real_market: null,
    polling_unusual_data: null,
    polling_abnormal: null
  }),
  created() {
    // this.initWebSocket()
    this.pollRealMarket();
    this.pollAbnormal();
  },
  mounted() {
    this.renderInfo();
    this.getRealMarket();
    // this.renderInfoWeek();
  },
  beforeDestroy() {
    clearInterval(this.polling_real_market);
    // clearInterval(this.polling_unusual_data)
    clearInterval(this.polling_abnormal);
  },
  destroyed() {
    // this.websock.close()
  },
  methods: {
    initWebSocket() {
      const wsuri = "ws://127.0.0.1:8000/info-push/";
      // const wsuri = 'wss://realtime-prod.wallstreetcn.com/ws'
      this.websock = new WebSocket(wsuri);
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onclose = this.websocketclose;
    },
    websocketonopen() {
      console.log("open!");
      let actions = {
        command: "ENTER_CHANNEL",
        data: { chann_name: "baoer-msg-pc-724", cursor: "" }
      };
      this.websocketsend(JSON.stringify(actions));
    },
    websocketonerror() {
      this.initWebSocket();
    },
    websocketonmessage(e) {
      const redata = JSON.parse(e.data);
      console.log(redata);
      this.infoData = redata;
    },
    websocketsend(Data) {
      this.websock.send(Data);
    },
    websocketclose(e) {
      console.log("断开连接", e);
    },

    // 加载信息
    renderInfo() {
      var url = this.$host + "/infos/";
      this.$ajax
        .get(url, {
          params: {
            limit: this.limit,
            cat_id: JSON.stringify(this.selected)
          }
        })
        .then(res => {
          for (var i = 0; i < res.data.length; i++) {
            var target_str = res.data[i].targets;
            if (target_str) {
              var target_list = target_str.split(",");
              target_list.pop();
              res.data[i].targets = target_list;
              var temp = this.stocks.concat(target_list);
              this.stocks = temp;
            }
          }
          this.renderInfoList = res.data;
        });
    },

    // 点击加载更多信息
    moreInfo() {
      var url = this.$host + "/infos/";
      this.limit = this.limit + 20
      this.$ajax
        .get(url, {
          params: {
            limit: this.limit,
            cat_id: JSON.stringify(this.selected)
          }
        })
        .then(res => {
          console.log(res)
          for (var i = 0; i < res.data.length; i++) {
            var target_str = res.data[i].targets;
            if (target_str) {
              var target_list = target_str.split(",");
              target_list.pop();
              res.data[i].targets = target_list;
              var temp = this.stocks.concat(target_list);
              this.stocks = temp;
            } 
          }
          this.renderInfoList = res.data;
        })
    },

    // 加载上周信息
    renderInfoWeek() {
      var url = this.$host + "/info-week/";
      this.$ajax
        .get(url, {
          params: {
            cat_id: info_cats
          }
        })
        .then(res => {
          console.log(res.data);
        });
    },

    // 请求 实时涨跌行情
    getRealMarket() {
      var url = this.$host + "/real-market/";

      for (var i = 0; i < this.stocks.length; i++) {
        this.stockSet.add(this.stocks[i]);
      }
      var queryStr = "";
      for (let item of this.stockSet) {
        queryStr += item + ",";
      }

      if (queryStr) {
        this.$ajax
          .get(url, {
            params: {
              query: queryStr
            }
          })
          .then(response => {
            this.marketsData = response.data;
          });
      }
    },

    pollRealMarket() {
      this.polling_real_market = setInterval(() => {
        this.getRealMarket();
      }, 10000);
    },

    // 请求 异动提醒 大幅拉升 (选股宝爬虫)
    getAbnormal() {
      this.$ajax.get(this.$host + "/abnormal/").then(res => {
        console.log(res.data);
        this.abnormalData = res.data;
      });
    },

    pollAbnormal() {
      this.polling_abnormal = setInterval(() => {
        this.getAbnormal();
      }, 10000);
    },

    // 跳转 查看今日所有大幅拉升
    toDailyAbnormal() {
      var url = this.$host + "/markets/daily-abnormal/";
      window.open(url);
    },
    showSlideModal() {
      this.$refs.slideModal.show();
    },
    hideSlideModal() {
      this.$refs.slideModal.hide();
    },

    handlePlus() {
      var url = this.$host + "/inside/";
      document.getElementById("btn1").style.display = "block";
      this.$ajax
        .get(url, {
          params: {
            start_date: this.startDate,
            end_date: this.endDate
          }
        })
        .then(res => {
          var filename = res.data.filename;
          this.downUrl = this.$host + "/inside-down/?filename=" + filename;
          console.log(this.downUrl);
        });
    },

    handleDown() {
      location.href = this.downUrl;
    }
  },

  filters: {
    // 时间戳转换时间
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    },
    // 取股票名称
    formatName(data) {
      if (data) {
        var name = data[0];
        return name;
      }
    },

    // 转换涨跌幅百分比
    formatRate(data) {
      if (data) {
        var rate = data[1];
        var newRate = rate.toFixed(2);
        newRate += "%";
        return newRate;
      }
    },

    // 转换category
    formatCategory(data) {
      const cat_dic = {
        8: "测试",
        9: "观点",
        10: "养家",
        11: "一线",
        12: "内线"
      };
      var newData = cat_dic[data];
      return newData;
    }
  }
};
</script>
