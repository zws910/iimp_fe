<template>
  <div class="row">
    <!-- <h4 class="font-weight-bold py-3 mb-4">时间轴</h4> -->
    <!-- <hr class="container-m-nx border-light mt-0 mb-4"> -->
    <!-- 时间轴代码写在下方 -->
    <div>
      <input type="date" name id="startDate" v-model="startDate">
      <input type="date" name id="endDate" v-model="endDate">
      <button class="btn btn-primary btn-sm" @click="filterEvents">查看</button>
    </div>
    <div style="width:100%;min-height:300px;background:#eee;">
      <div>
        <swiper class="swiper-container" :options="swiperMultipleSlides">
          <swiper-slide v-for="(item,i) in content" :key="i">
            <div style="width:240px;padding-top:5px;">
              <div
                class="card card-condenced mt-3"
                style="max-width:20rem;height:470px;margin-bottom:10px"
              >
                <div class="card-header">
                  <span style="color:red">{{item.est_date}}</span>
                  <b-btn size="sm" variant="default" @click="seeEdit(item.id)">编辑</b-btn>
                  <b-btn size="sm" variant="default" :id="item.id" v-b-modal="'f'+item.id">详情</b-btn>
                  <b-modal size="xl" :id="'f'+item.id" scrollable :title='item.title'>
                    <pre class="my-4" v-html="item.content" wrap="soft"></pre>
                    <span>
                      <p style="color:red">标的</p>
                      <pre class="my-4" v-html="item.target" wrap="soft"></pre>
                    </span>

                     <div slot="modal-footer" class="w-100">
                      <p class="float-left">Modal Footer Content</p>
                      <b-button
                        variant="primary"
                        size="sm"
                        class="float-right"
                        @click="show=false"
                      >
                        Close
                      </b-button>
                    </div>
                  </b-modal>
                </div>
                <div>
                  <div class="card-body">
                    <p
                      style="height:24px;overflow:hidden;font-size:14px;text-align:center"
                      class="card-text"
                    >{{item.title}}</p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{{item.action}}</li>
                    <li
                      class="list-group-item"
                      style="word-wrap: break-word;overflow:hidden;text-overflow: ellipsis;height:120px;"
                    >
                      <span>{{item.content}}</span>
                    </li>
                    <li
                      class="list-group-item"
                      style="word-wrap: break-word;overflow:hidden;text-overflow: ellipsis;height:157px;"
                    >
                      <span>{{item.target}}</span>
                    </li>
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
      <div>
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
      </div>
    </div>
  </div>
</template>

<script>
import StarRate from "vue-cute-rate";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "typography",
  metaInfo: {
    title: "内部信息管理平台 | 时间轴"
  },
  components: {
    StarRate,
    swiper,
    swiperSlide
  },
  data() {
    return {
      startDate: "",
      endDate: "",
      list: [],
      option: [],
      content: [],
      swiperMultipleSlides: {
        slidesPerView: 6,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  created() {
    this.get();
    this.getMore();
    this.changeMore();
  },
  mounted() {
    this.filterEvents();
  },
  methods: {
    get() {
      var url = this.$host + "/focus-events/?is_top=0";
      this.$ajax.get(url).then(res => {
        // console.log(res.data)
        this.list = res.data;
      });
    },
    getMore() {
      var url = this.$host + "/focus-events/?is_top=1";
      this.$ajax.get(url).then(res => {
        // console.log(res.data)
        this.option = res.data;
      });
    },
    changeMore() {
      var url = this.$host + "/focus-events/?is_top=0";
      this.$ajax.get(url).then(res => {
        console.log(res.data);
        this._data = res.data;
      });
    },
    // 查看编辑页面
    seeEdit(id) {
      this.$router.push('/editors/events/'+id)
    },
    // 根据日期筛选事件
    filterEvents() {
      var url = this.$host + "/events/";
      console.log(this.startDate);
      console.log(this.endDate);
      this.$ajax
        .get(url, {
          params: {
            start_date: this.startDate,
            end_date: this.endDate
          }
        })
        .then(res => {
          // console.log(res)
          this.content = res.data;
          console.log(res.data);
          this.$forceUpdate();
        });
    }
  }
};
</script>
<style scope>
@import "../Timeline.css";
/* .swiper-slide{
  margin-right:54px !important;
} */
</style>
<style src="@/vendor/libs/vue-awesome-swiper/vue-awesome-swiper.scss" lang="scss"></style>