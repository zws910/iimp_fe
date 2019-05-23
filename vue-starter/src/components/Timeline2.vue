<template>
  <div>
    <!-- <h4 class="font-weight-bold py-3 mb-4">时间轴</h4> -->
    <!-- <hr class="container-m-nx border-light mt-0 mb-4"> -->
    <!-- 时间轴代码写在下方 -->
          <div>
        <input type="date" name="" id="startDate" v-model="startDate">
        <input type="date" name="" id="endDate" v-model="endDate">
        <button class="btn btn-primary btn-sm" @click="filterEvents">查看</button>
      </div>
      <div style="width:100%;min-height:300px;background:#eee">
        <div>
          <swiper class="swiper-container" :options="swiperMultipleSlides">
            <swiper-slide v-for="(item,i) in content" :key="i">
              <div style="width:240px;padding-top:5px;">
                <div class="card card-condenced mt-3" style="max-width:20rem;height:260px">
                  <div class="card-header">
                    <span style="color:red">{{item.est_date}}</span>
                  </div>
                  <div>
                    <div class="card-body">
                      <p style="height:40px;overflow:hidden" class="card-text">{{item.content}}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">{{item.action}}</li>
                      <li class="list-group-item" style="word-wrap: break-word;">{{item.target}}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <div slot="button-prev" class="swiper-button-prev custom-icon">
                <i class="ion ion-ios-arrow-back text-muted small"></i>
              </div>
              <div slot="button-next" class="swiper-button-next custom-icon" @click="changeMore()">
                <i class="ion ion-ios-arrow-forward text-muted small"></i>
              </div>
          </swiper>
        </div>
      </div>
    <div>
      <div class="row">
        <div class="mt-2">
          <div style="width:420px;min-height:1000px" v-for="(item,s) in option" :key="s">
            <center>
              <b-button class="btn btn-default center-block mt-2">{{item.start_date}}</b-button>
              <br>
              <span class="moveUp"></span>
              <br>
              <b-button v-b-toggle="'f'+item.fid" :id="item.fid" variant="primary">{{item.f_title}}</b-button>
            </center>
            <b-collapse :id="'f'+item.fid">
              <div style="position:relative">
                <div no-body role="tablist">
                  <span class="moveDown"></span>
                  <span class="arror"></span>
                  <span class="arror-l"></span>
                  <div class="title-nav">
                    <b-button v-b-toggle.collapse-1-inner class="title">事件</b-button>
                    <b-collapse
                      id="collapse-1-inner"
                      accordion="my-accordion"
                      v-for="(item,a) in item.events"
                      :key="a"
                    >
                      <span class="arror-e"></span>
                      <span class="move-line"></span>
                      <b-card class="cardtest">
                        <div :rating="item.rating">
                          <small :class="{'rat':item.rating == '5'}">
                            <font style="vertical-align:center">
                              <font style="vertical-align:inherit">{{item.est_date}}</font>
                            </font>
                          </small>
                          <div :class="{'rat':item.rating == '5'}">
                            <font style="vertical-align:inherit">{{item.content}}</font>
                          </div>
                          <small class="pull-right" id="order">
                            <!-- <rate :length="item.rating" :value="item.rating" :readonly="true"/> -->
                            <star-rate :value="item.rating" :disabled="true"/>
                          </small>
                        </div>
                      </b-card>
                    </b-collapse>
                  </div>
                  <div class="title-nav-a">
                    <b-button v-b-toggle.collapse-2-inner class="title">操作</b-button>
                    <b-collapse
                      id="collapse-2-inner"
                      accordion="my-accordion"
                      v-for="(item,a) in item.events"
                      :key="a"
                    >
                      <span class="arror-e"></span>
                      <span class="move-line"></span>
                      <b-card>
                        <div class="ibox-content">
                          <div class="feed-activity-list">
                            <div class="feed-element">
                              <small>
                                <font style="vertical-align:center">
                                  <font style="vertical-align:inherit">{{item.est_date}}</font>
                                </font>
                              </small>
                              <div>
                                <font style="vertical-align:inherit">{{item.action}}</font>
                              </div>
                            </div>
                          </div>
                        </div>
                      </b-card>
                    </b-collapse>
                  </div>
                  <div class="title-nav-b">
                    <b-button v-b-toggle.collapse-3-inner class="title">标的</b-button>
                    <b-collapse
                      id="collapse-3-inner"
                      accordion="my-accordion"
                      v-for="(item,a) in item.events"
                      :key="a"
                    >
                      <span class="arror-e"></span>
                      <span class="move-line"></span>
                      <b-card>
                        <div class="ibox-content">
                          <div class="feed-activity-list">
                            <div class="feed-element">
                              <small>
                                <font style="vertical-align:center">
                                  <font style="vertical-align:inherit">{{item.est_date}}</font>
                                </font>
                              </small>
                              <div>
                                <font style="vertical-align:inherit">{{item.target}}</font>
                              </div>
                            </div>
                          </div>
                        </div>
                      </b-card>
                    </b-collapse>
                  </div>
                </div>
              </div>
            </b-collapse>
          </div>
        </div>

        <!-- <div style="width:420px" v-for="(item,i) in list" :key="i">
            <div>
            <center>
              <b-button class="btn btn-default center-block mt-2">{{item.start_date}}</b-button>
              <br>
              <span class="moveUp"></span>
              <br>
              <b-button v-b-toggle="'f'+item.fid" :id="item.fid" variant="primary">{{item.f_title}}</b-button>
            </center>
            <div>
              <b-collapse :id="'f'+item.fid">
                <div style="position:relative">
                  <div no-body role="tablist">
                    <span class="moveDown"></span>
                    <span class="arror"></span>
                    <span class="arror-l"></span>
                    <div class="title-nav">
                      <b-button v-b-toggle.collapse-1-inner class="title">事件</b-button>
                      <b-collapse
                        id="collapse-1-inner"
                        accordion="my-accordion"
                        v-for="(item,a) in item.events"
                        :key="a"
                      >
                        <span class="arror-e"></span>
                        <span class="move-line"></span>
                        <b-card>
                          <div class="ibox-content">
                            <div class="feed-activity-list">
                              <div class="feed-element">
                                <div :rating="item.rating">
                                  <small :class="{'rat':item.rating == '5'}">
                                    <font style="vertical-align:center">
                                      <font style="vertical-align:inherit">{{item.est_date}}</font>
                                    </font>
                                  </small>
                                  <div :class="{'rat':item.rating == '5'}">
                                    <font style="vertical-align:inherit">{{item.content}}</font>
                                  </div>
                                  <small class="pull-right" id="order">
                                    <rate
                                      :length="item.rating"
                                      :value="item.rating"
                                      :readonly="true"
                                    />
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </b-card>
                      </b-collapse>
                    </div>
                    <div class="title-nav-a">
                      <b-button v-b-toggle.collapse-2-inner class="title">操作</b-button>
                      <b-collapse
                        id="collapse-2-inner"
                        accordion="my-accordion"
                        v-for="(item,a) in item.events"
                        :key="a"
                      >
                      <span class="arror-e"></span>
                        <span class="move-line"></span>
                        <b-card>
                          <div class="ibox-content">
                            <div class="feed-activity-list">
                              <div class="feed-element">
                                <small>
                                  <font style="vertical-align:center">
                                    <font style="vertical-align:inherit">{{item.est_date}}</font>
                                  </font>
                                </small>
                                <div>
                                  <font style="vertical-align:inherit">{{item.action}}</font>
                                </div>
                              </div>
                            </div>
                          </div>
                        </b-card>
                      </b-collapse>
                    </div>
                    <div class="title-nav-b">
                      <b-button v-b-toggle.collapse-3-inner class="title">标的</b-button>
                      <b-collapse
                        id="collapse-3-inner"
                        accordion="my-accordion"
                        v-for="(item,a) in item.events"
                        :key="a"
                      >
                      <span class="arror-e"></span>
                        <span class="move-line"></span>
                        <b-card>
                          <div class="ibox-content">
                            <div class="feed-activity-list">
                              <div class="feed-element">
                                <small>
                                  <font style="vertical-align:center">
                                    <font style="vertical-align:inherit">{{item.est_date}}</font>
                                  </font>
                                </small>
                                <div>
                                  <font style="vertical-align:inherit">{{item.target}}</font>
                                </div>
                              </div>
                            </div>
                          </div>
                        </b-card>
                      </b-collapse>
                    </div>
                  </div>
                </div>
              </b-collapse>
            </div>
            </div>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import StarRate from 'vue-cute-rate'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'typography',
  metaInfo: {
    title: '内部信息管理平台 | 时间轴'
  },
  components: {
    StarRate,
    swiper,
    swiperSlide
  },
  data () {
    return {
      startDate: '',
      endDate: '',
      list: [],
      option: [],
      content: [],
      swiperMultipleSlides: {
        slidesPerView: 6,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  created () {
    this.get()
    this.getMore()
    this.changeMore()
  },
  mounted () {
    // this.filterEvents()
    this.renderEvents()
  },
  methods: {
    get () {
      var url = this.$host + '/focus-events/?is_top=0'
      this.$ajax.get(url).then(res => {
        // console.log(res.data)
        this.list = res.data
      })
    },
    getMore () {
      var url = this.$host + '/focus-events/?is_top=1'
      this.$ajax.get(url).then(res => {
        // console.log(res.data)
        this.option = res.data
      })
    },
    changeMore () {
      var url = this.$host + '/focus-events/?is_top=0'
      this.$ajax.get(url).then(res => {
        console.log(res.data)
        this._data = res.data
      })
    },
    // 根据日期筛选事件
    filterEvents () {
      var url = this.$host + '/events/'
      console.log(this.startDate)
      console.log(this.endDate)
      this.$ajax.get(
        url, {
          params: {
            start_date: this.startDate,
            end_date: this.endDate
          }
        }
      ).then(res => {
        // console.log(res)
        this.content = res.data
        console.log(this.content)
        this.$forceUpdate()
      })
    },
    renderEvents () {
      var url = this.$host + '/events/'
      console.log(this.startDate)
      console.log(this.endDate)
      this.$ajax.get(
        url, {
          params: {
            start_date: this.startDate,
            end_date: this.endDate
          }
        }
      ).then(res => {
        // console.log(res)
        this.content = res.data
        console.log(this.content)
        // this.$forceUpdate()
      })
    }
  }
}
</script>
<style scope>
@import "../Timeline.css";
</style>
<style src="@/vendor/libs/vue-awesome-swiper/vue-awesome-swiper.scss" lang="scss"></style>
