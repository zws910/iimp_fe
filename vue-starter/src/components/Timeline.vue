<template>
  <div class="row">
    <!-- <h4 class="font-weight-bold py-3 mb-4">时间轴</h4> -->
    <!-- <hr class="container-m-nx border-light mt-0 mb-4"> -->
    <!-- 时间轴代码写在下方 -->
    <div style="display:flex">
      <b-form-group label="开始日期">
        <input type="date" class="form-control" v-model="startDate">
      </b-form-group>
      <b-form-group style="margin-left:30px" label="结束日期">
        <input type="date" class="form-control" v-model="endDate">
      </b-form-group>
      <button
        class="btn btn-primary btn-sm"
        style="width:80px;height:37px;margin-top:25px;margin-left:30px"
        @click="filterEvents"
      >查看</button>
    </div>
    <div class="timebox mt-2">
      <div>
        <swiper class="swiper-container" :options="swiperMultipleSlides">
          <swiper-slide v-for="(item,i) in content" :key="i">
            <div class="timeline-line"></div>
            <div style="width:240px;">
              <div class="timeline-condenced mt-3" >
                <div class="timeline-header">
                  <span class="time-date">{{item.est_date | formatDate}}</span>
                  <b-btn
                    size="sm"
                    variant="default"
                    @click="seeEdit(item.id)"
                    v-show="is_employee"
                  >编辑</b-btn>
                  <b-btn class="btn-right" size="sm" variant="default" :id="item.id" v-b-modal="'f'+item.id" style="display:none">详情</b-btn>
                  <b-modal size="xl" :id="'f'+item.id" scrollable :title="item.title">
                    <div>
                      <b style="color:red">事件</b>
                      <pre class="my-4" v-html="item.content" wrap="soft"></pre>
                    </div>
                    <div>
                      <b style="color:red">更新</b>
                      <pre class="my-4" v-html="item.update" wrap="soft"></pre>
                    </div>
                    <div>
                      <b style="color:red">可行性分析</b>
                      <pre class="my-4" v-html="item.feasibility" wrap="soft"></pre>
                    </div>
                    <span>
                      <b style="color:red">标的</b>
                      <pre class="my-4" v-html="item.target" wrap="soft"></pre>
                    </span>
                    <div slot="modal-footer">
                      <!-- <b-btn class="modal-cancel" name="modal-cancel" slot="modal-cancel">生成</b-btn> -->
                      <b-btn
                        class="modal-ok"
                        variant="danger"
                        name="modal-ok"
                        @click="PlusDown(item.id)"
                      >下载</b-btn>
                    </div>
                  </b-modal>
                </div>
                <div class="timeline-title">
                   <h6 class="mt-2">{{item.title}}</h6>
                </div>
                 
                <div>
                  <div class="timeline-body">
                    <!-- <p
                      style="height:24px;overflow:hidden;font-size:14px;text-align:center"
                      class="card-text"
                    >{{item.title}}</p>-->
                    <ul class="list-group list-group-flush mt-3">
                      <!-- <li class="list-group-item">{{item.action}}</li> -->
                      <li class="list-group-item time-list-group">
                        <span class="title-span">事件内容</span>
                        <br>
                        <span>{{item.content}}</span>
                      </li>
                      <!-- <li
                      class="list-group-item"
                      style="word-wrap: break-word;overflow:hidden;text-overflow: ellipsis;height:157px;"
                    >
                      <span>{{item.target}}</span>
                      </li>-->
                    </ul>
                  </div>
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
        <div class="mt-2" style="display:flex;flex-wrap:wrap">
          <div
            style="width:420px;min-height:800px;overflow:hidden"
            v-for="(item,s) in list"
            :key="s"
          >
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
import { formatDate } from '@/common/date.js';
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
      user_id: sessionStorage.user_id || localStorage.user_id,
      token: sessionStorage.token || localStorage.token,
      username: "",
      nickname: "",
      is_employee: 0,

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
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      if (this.user_id && this.token) {
        var url = this.$host + "/user-profile/";
        this.$ajax
          .get(url, {
            headers: {
              Authorization: "JWT " + this.token
            },
            responseType: "json"
          })
          .then(res => {
            // 加载用户数据
            this.user_id = res.data.id;
            this.username = res.data.username;
            this.nickname = res.data.nickname;
            this.is_employee = res.data.is_employee;
            // console.log(this.is_employee)
          })
          .catch(error => {
            if (error.response.status == 401 || error.response.status == 403) {
              location.href = "/authentication/login";
            }
          });
      } else {
        location.href = "/authentication/login";
      }
    },
    get() {
      var url = this.$host + "/focus-events/?is_top=0";
      this.$ajax.get(url).then(res => {
        //  console.log(res.data)
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
      this.$router.push("/editors/events/" + id);
    },
    PlusDown(id) {
      var url = this.$host + "/event-report/?event_id=" + id;
      window.location.href = url;
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
  },
    filters: {
    formatDate (time) {
      var date = new Date(time)
      return formatDate(date, 'MM月dd日')
    }
  }
};
</script>
<style scope>
@import "../Timeline.css";
.swiper-slide {
  width: 250px !important;
  /* margin-right: 30px !important; */
  /* margin-left: 22px !important; */
  /* border-top: 1px solid rgb(253,60,47); */
  background: url('../../public/img/circle.png') no-repeat;
  background-position: 0px 5px;
  background-size: 10px 10px
  
}
.timeline-line{
    width: 242px;
    height: 1px;
    margin-top: 10px;
    margin-left: 9px;
    background: rgb(253,60,47);
}
</style>
<style src="@/vendor/libs/vue-awesome-swiper/vue-awesome-swiper.scss" lang="scss"></style>
