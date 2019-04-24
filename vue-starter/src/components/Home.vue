<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      主页
      <div class="text-muted text-tiny mt-1"><small class="font-weight-normal">Today is Tuesday, 8 February 2018</small></div>
    </h4>

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
                <!-- <p class="my-1">{{ data.content }}</p> -->
                <div class="clearfix">
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

<script>
import Vue from 'vue'
import { formatDate } from '@/common/date.js'

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

const info_cats = "1,2,3,4,5,6,7,8";


export default {
  name: 'dashboard-1',
  metaInfo: {
    title: '主页'
  },
  components: {
  },
  data: () => ({
    infoData: [],
    renderInfoList: [],
  }),
  created () {
    // this.initWebSocket()
  },
  mounted () {
    this.renderInfo()
  },
  beforeDestroy () {
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
      let actions = {"command":"ENTER_CHANNEL","data":{"chann_name":"baoer-msg-pc-724","cursor":""}}
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

    renderInfo () {
      var url = this.$host + '/infos/';
      this.$ajax.get(
        url, {
          params: {
            limit: 30,
            cat_id : info_cats
          }
        }
      ).then(res => {
        this.renderInfoList = res.data;
      })
    }
  },
  
  filters: {
    // 时间戳转换时间
    formatDate (time) {
      var date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd hh:mm')
    }
  }
}
</script>
