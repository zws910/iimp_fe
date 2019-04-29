<template>
  <div>
    <!-- <h4 class="font-weight-bold py-3 mb-4">
      主页
      <div class="text-muted text-tiny mt-1"><small class="font-weight-normal">Today is Tuesday, 8 February 2018</small></div>
    </h4> -->

    <div class="row">
      <div class="col-md-6 col-lg-12 col-xl-6 mb-4">
        <swiper class="swiper-container" :options="verticalSwiper" id="swiper-vertical">
        <swiper-slide v-for="data in abnormalData" :key="data.code">
              <div class="media-body ml-3">
                <a href="javascript:void(0)">{{ data.name }}</a>
                <span class="text-muted">{{ data.type }}</span>
                <!-- <a href="javascript:void(0)">Article Name</a> -->
                <span class="text-muted small">{{ data.event_timestamp }}</span>
                <p class="my-1">大幅拉升{{ data.target }}</p>
                <!-- <p class="my-1">{{ data.type }}</p> -->

                <span><hr></span>
              </div>
        </swiper-slide>
        <!-- <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide> -->
        <div slot="pagination" class="swiper-pagination"></div>
      </swiper>
      </div>
    </div>

    <div class="row">

      <div class="col-md-6 col-lg-12 col-xl-6">

        <!-- 资讯流 -->
        <b-card no-body class="mb-4">
          <b-card-header header-tag="h6">资讯流</b-card-header>
          <b-card-body>
            <!-- 初次加载 -->
            <div class="media pb-1 mb-3" v-for="data in renderInfoList" :key="data.id">
              <img :src="`${publicUrl}img/avatars/9-small.png`" class="d-block ui-w-40 rounded-circle" alt>
              <div class="media-body ml-3">
                <a href="javascript:void(0)">{{ data.author }}</a>
                <span class="text-muted">发布于</span>
                <!-- <a href="javascript:void(0)">Article Name</a> -->
                <span class="text-muted small">{{ data.pub_timestamp*1000 | formatDate }}</span>
                <p class="my-1">{{ data.title }}</p>
                <p class="my-1">{{ data.content }}</p>
                <div class="clearfix">
                  <div class="news-item-intro">
                    <ul class="stock-group" v-for="target in data.targets" :key="target">
                      <li class="stock-group-item">
                        <span class="stock-group-name">{{ marketsData[target] | formatName }}</span>
                        <span class="stock-group-rate">{{ marketsData[target] | formatRate }}</span>
                      </li>
                    </ul>
                  </div>
                  <a href="javascript:void(0)" class="float-right text-lightest small">
                    <span class="ion ion-ios-thumbs-down"></span>
                  </a>
                  <a href="javascript:void(0)" class="float-right text-lightest small">
                    <span class="ion ion-ios-thumbs-up mr-2"></span>
                  </a>
                  <!-- <span class="float-left text-muted small">{{ data.pub_timestamp*1000 | formatDate }}</span> -->
                </div>
                <span><hr></span>
              </div>
            </div>
          </b-card-body>
          <a href="javascript:void(0)" class="card-footer d-block text-center text-body small font-weight-semibold">SHOW MORE</a>
        </b-card>
        <!-- / Comments -->

      </div>
      <div class="col-md-6 col-lg-12 col-xl-6">

        <!-- Support tickets -->
        <b-card no-body class="mb-4">
          <b-card-header header-tag="h6">Support tickets</b-card-header>
          <b-card-body>
            <div class="pb-1 mb-3">
              <div class="badge badge-outline-warning float-right">Feature</div>
              <a href="javascript:void(0)">Lorem ipsum dolor sit amet, vis erat denique in.</a>&nbsp;
              <span class="text-muted">#34563</span>
              <br>
              <small class="text-muted">Created by <a href="javascript:void(0)" class="text-body">Mike Greene</a> &nbsp;·&nbsp; 1 day ago</small>
            </div>
            <div class="pb-1 mb-3">
              <div class="badge badge-outline-danger float-right">Bug</div>
              <a href="javascript:void(0)">Dicunt prodesset te vix.</a>&nbsp;
              <span class="text-muted">#34524</span>
              <br>
              <small class="text-muted">Created by <a href="javascript:void(0)" class="text-body">Leon Wilson</a> &nbsp;·&nbsp; 1 day ago</small>
            </div>
            <div class="pb-1 mb-3">
              <div class="badge badge-outline-success float-right">Question</div>
              <a href="javascript:void(0)">Sit meis deleniti eu, pri vidit meliore docendi ut?</a>&nbsp;
              <span class="text-muted">#34563</span>
              <br>
              <small class="text-muted">Created by <a href="javascript:void(0)" class="text-body">Allie Rodriguez</a> &nbsp;·&nbsp; 1 day ago</small>
            </div>
            <div class="pb-1 mb-3">
              <div class="badge badge-outline-secondary float-right">Enhancement</div>
              <a href="javascript:void(0)">Eu tantas offendit mnesarchum sit, vide novum ad pri.</a>&nbsp;
              <span class="text-muted">#34563</span>
              <br>
              <small class="text-muted">Created by <a href="javascript:void(0)" class="text-body"> Kenneth Frazier</a> &nbsp;·&nbsp; 1 day ago</small>
            </div>
            <div>
              <div class="badge badge-outline-danger float-right">Bug</div>
              <a href="javascript:void(0)">Dicunt prodesset te vix.</a>&nbsp;
              <span class="text-muted">#34524</span>
              <br>
              <small class="text-muted">Created by <a href="javascript:void(0)" class="text-body">Leon Wilson</a> &nbsp;·&nbsp; 1 day ago</small>
            </div>
          </b-card-body>
          <a href="javascript:void(0)" class="card-footer d-block text-center text-body small font-weight-semibold">SHOW MORE</a>
        </b-card>
        <!-- / Support tickets -->

      </div>
    </div>
  </div>
</template>

<style>
.swiper-container .swiper-slide {
  padding: 5rem 0;
  text-align: center;
  font-size: 1.5rem;
  background: #ffffff;
}

#swiper-vertical {
  max-height: 195px;
}
</style>
<style src="@/vendor/libs/vue-awesome-swiper/vue-awesome-swiper.scss" lang="scss"></style>

<script>
import Vue from 'vue'
import { formatDate } from '@/common/date.js'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

// 异动url
const unusualUrl = 'http://qmx.jrjimg.cn/market.do'

// 异动类别 t
const unusualTypes = [
  { 'type': '大单买入', 't': 5, 'd': 3, 'm': 'sh' },
  { 'type': '大单卖出', 't': 6, 'd': 4, 'm': 'sh' },
  { 'type': '火箭发射', 't': 12, 'd': 6, 'm': 'sh' },
  { 'type': '高台跳水', 't': 13, 'd': 7, 'm': 'sh' },
  { 'type': '封涨停板', 't': 8, 'd': 7, 'm': 'sh' },
  { 'type': '封跌停板', 't': 9, 'd': 7, 'm': 'sh' }
]

// 板块
const info_cats_dic = [
  { id: 1, name: '淘股吧' },
  { id: 2, name: '36kr' },
  { id: 3, name: 'e公司' },
  { id: 4, name: '选股宝' },
  { id: 5, name: '腾讯科技' },
  { id: 6, name: '深互动易' },
  { id: 7, name: '沪互动易' },
  { id: 8, name: '测试' }
]

const info_cats = '1,2,3,4,5,6,7,8,9,10,11,12'

// var stockSet = new Set()
// var stocks = []

export default {
  name: 'dashboard-1',
  metaInfo: {
    title: '主页'
  },
  components: {
    swiper,
    swiperSlide
  },
  data: () => ({
    infoData: [],
    renderInfoList: [],
    items: [],
    stocks: [],
    stockSet: new Set(),
    codeSet: new Set(),
    marketsData: {},
    unusualData: [],
    abnormalData: [],

    swiperWithPagination: {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    },

    verticalSwiper: {
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    },

    polling_real_market: null,
    polling_unusual_data: null,
    polling_abnormal: null
  }),
  created () {
    // this.initWebSocket()
    this.pollRealMarket()
    this.pollUnusualData()
    this.pollAbnormal()
  },
  mounted () {
    this.renderInfo()
    this.getRealMarket()
    this.renderInfoWeek()
  },
  beforeDestroy () {
    clearInterval(this.polling_real_market)
    clearInterval(this.polling_unusual_data)
    clearInterval(this.polling_abnormal)
  },
  destroyed () {
    // this.websock.close()
  },
  methods: {
    initWebSocket () {
      const wsuri = 'ws://127.0.0.1:8000/info-push/'
      // const wsuri = 'wss://realtime-prod.wallstreetcn.com/ws'
      this.websock = new WebSocket(wsuri)
      this.websock.onmessage = this.websocketonmessage
      this.websock.onopen = this.websocketonopen
      this.websock.onerror = this.websocketonerror
      this.websock.onclose = this.websocketclose
    },
    websocketonopen () {
      console.log('open!')
      let actions = { 'command': 'ENTER_CHANNEL', 'data': { 'chann_name': 'baoer-msg-pc-724', 'cursor': '' } }
      this.websocketsend(JSON.stringify(actions))
    },
    websocketonerror () {
      this.initWebSocket()
    },
    websocketonmessage (e) {
      const redata = JSON.parse(e.data)
      console.log(redata)
      this.infoData = redata
    },
    websocketsend (Data) {
      this.websock.send(Data)
    },
    websocketclose (e) {
      console.log('断开连接', e)
    },

    // 加载信息
    renderInfo () {
      var url = this.$host + '/infos/'
      this.$ajax.get(
        url, {
          params: {
            limit: 30,
            cat_id: info_cats
          }
        }
      ).then(res => {
        for (var i = 0; i < res.data.length; i++) {
          var target_str = res.data[i].targets
          if (target_str) {
            var target_list = target_str.split(',')
            target_list.pop()
            res.data[i].targets = target_list
            var temp = this.stocks.concat(target_list)
            this.stocks = temp
          }
        }
        this.renderInfoList = res.data
      })
    },

    // 加载上周信息
    renderInfoWeek () {
      var url = this.$host + '/info-week/'
      this.$ajax.get(
        url, {
          params: {
            cat_id: info_cats
          }
        }
      ).then(res => {
        console.log(res.data)
      })
    },

    // 请求 实时涨跌行情
    getRealMarket () {
      var url = this.$host + '/real-market/'

      for (var i = 0; i < this.stocks.length; i++) {
        this.stockSet.add(this.stocks[i])
      }
      var queryStr = ''
      for (let item of this.stockSet) { queryStr += item + ',' }

      if (queryStr) {
        this.$ajax.get(url, {
          params: {
            query: queryStr
          }
        }).then(response => {
          this.marketsData = response.data
        })
      }
    },

    pollRealMarket () {
      this.polling_real_market = setInterval(() => {
        this.getRealMarket()
      }, 10000)
    },

    // 请求异动信息
    getUnusualData () {
      var url = this.$host + '/my-radar/'

      for (var i = 0; i < this.stocks.length; i++) {
        var full_code = this.stocks[i]
        var code = full_code.slice(0, 6)
        this.codeSet.add(code)
      }
      var queryStr = ''
      for (let item of this.codeSet) { queryStr += item + ',' }
      console.log(queryStr)

      if (queryStr) {
        this.$ajax.get(url, {
          params: {
            zxg_codes: queryStr
          }
        }).then(response => {
          // this.unusualData = response.data;
          console.log(response.data)
        })
      }
    },

    pollUnusualData () {
      this.polling_unusual_data = setInterval(() => {
        this.getUnusualData()
      }, 10000)
    },

    // 请求 异动提醒 大幅拉升
    getAbnormal () {
      this.$ajax.get(
        this.$host + '/abnormal/'
      ).then(res => {
        console.log(res.data)
        // this.abnormalData =res.data;
      }
      )
      // console.log(this.items)
    },

    pollAbnormal () {
      this.polling_abnormal = setInterval(() => {
        this.getAbnormal()
      }, 10000)
    }
  },

  filters: {
    // 时间戳转换时间
    formatDate (time) {
      var date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd hh:mm')
    },
    // 取股票名称
    formatName (data) {
      if (data) {
        var name = data[0]
        return name
      }
    },

    // 转换涨跌幅百分比
    formatRate (data) {
      if (data) {
        var rate = data[1]
        var newRate = rate.toFixed(2)
        newRate += '%'
        return newRate
      }
    }
  }
}
</script>
