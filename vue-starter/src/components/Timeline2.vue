<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">时间轴</h4>
    <hr class="container-m-nx border-light mt-0 mb-4">
    <!-- 时间轴代码写在下方 -->
    <div class="row">
      <div
        class="col-lg-3 col-md-3 col-xs-3 col-sm-3"
        style="border-right:1px solid;padding:0px"
        v-for="(item,i) in option"
        :key="i">
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
                                <rate :length="item.rating" :value="item.rating" :readonly="true"/>
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
       <div class="col-lg-9 col-md-9 col-xs-9 col-sm-9">
          <div class="row"> 
            <div class="col-lg-4 col-md-4 col-xs-4 col-sm-4" v-for="(item,i) in list" :key="i">
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
            </div>
           </div>
      </div> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'typography',
  metaInfo: {
    title: '内部信息管理平台 | 时间轴'
  },
  data () {
    return {
      list: [],
      option: []
    }
  },
  created () {
    this.get()
    this.getMore()
  },
  methods: {
    get () {
      var url = 'http://106.14.4.121:8000/focus-events/?is_top=0'
      this.$ajax.get(url).then(res => {
        console.log(res.data)
        this.list = res.data
      })
    },
    getMore () {
      var url = 'http://106.14.4.121:8000/focus-events/?is_top=1'
      this.$ajax.get(url).then(res => {
        console.log(res.data)
        this.option = res.data
      })
    }
  }
}
</script>
<style scope>
* {
  padding: 0;
}
.rat {
  color: red;
}

.moveUp {
  /*箭头占位符，规定宽高等*/
  width: 29px;
  height: 28px;
  display: inline-block;
  position: relative;
  cursor: pointer;
}
.moveUp:before,
.moveUp:after {
  /*伪元素相同属性提取*/
  content: "";
  border-color: transparent; /*边框颜色透明*/
  border-style: solid;
  position: absolute; /*绝对定位，分别定位before和after描绘的内容*/
}
.moveUp:before {
  /*伪元素before绘制箭头尾部矩形*/
  border: none;
  background: #555;
  height: 84%;
  width: 17%;
  top: -1%;
  left: 13px;
}
.moveUp:after {
  /*伪元素after绘制箭头的头部三角形*/
  left: 6px;
  top: 84%;
  border-width: 10px;
  border-top-color: #555;
}
.moveDown {
  width: 5px;
  height: 33px;
  display: inline-block;
  position: relative;
  cursor: pointer;
}
.move-line {
  width: 5px;
  height: 21px;
  display: inline-block;
  position: relative;
  cursor: pointer;
}
.moveDown:before,
.moveDown:after,
.move-line:before {
  content: "";
  border-color: transparent;
  border-style: solid;
  position: absolute;
}
.moveDown:before {
  border: none;
  background: #555;
  height: 103%;
  width: 30%;
  top: 0%;
  left: 224px;
}
.move-line:before {
  border: none;
  background: #555;
  height: 103%;
  width: 30%;
  top: 18%;
  left: -42px;
}
.moveDown:after {
  left: 218px;
  top: 98%;
  border-width: 7px;
  border-top-color: #555;
}

.arror {
  width: 100px;
  height: 31px;
  display: inline-block;
  position: relative;
}
.arror:before,
.arror:after {
  content: "";
  position: absolute;
  border-style: solid;
  border-color: transparent; /*统一规定边框颜色为透明色*/
}
.arror:before {
  width: 281px;
  height: 23px;
  border: 1px solid #000;
  border-bottom: 1px solid transparent;
  left: 77px;
  top: 13px;
}
.arror:after {
  /*三角形*/
  border-width: 7px;
  border-left-color: #555;
  top: 30px;
  left: 350px;
  transform: rotate(89deg);
}
.arror-l {
  width: 100px;
  height: 31px;
  display: inline-block;
  position: relative;
}
.arror-l:before,
.arror-l:after {
  content: "";
  position: absolute;
  border-style: solid;
  border-color: transparent; /*统一规定边框颜色为透明色*/
}
.arror-l:before {
  border-width: 7px;
  border-left-color: #555;
  top: 30px;
  left: -32px;
  transform: rotate(89deg);
}
.title-nav {
  position: absolute;
  top: 39px;
  left: 21px;
}
.title-nav-a {
  position: absolute;
  top: 39px;
  left: 163px;
}
.title-nav-b {
  position: absolute;
  top: 39px;
  left: 306px;
}
.title {
  width: 125px;
  height: 37px;
  margin: 0px;
  text-align: center;
}
.card-body {
  width: 125px;
  font-size: 12px;
  font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.arror-e {
  width: 100px;
  height: 20px;
  display: inline-block;
  position: relative;
}
.arror-e:before,
.arror-e:after {
  content: "";
  position: absolute;
  border-style: solid;
  border-color: transparent; /*统一规定边框颜色为透明色*/
}
.arror-e:before {
  border-width: 7px;
  border-left-color: #555;
  top: -7px;
  left: 56px;
  transform: rotate(270deg);
}
</style>
