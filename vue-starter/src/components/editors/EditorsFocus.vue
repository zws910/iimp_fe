<template>
  <div>
    <div class="row">
      <b-form @submit.prevent="focusSubmit" class="col-6">
        <b-card no-body >
          <h4 class="font-weight-bold ml-4 mt-4">
            焦点发布
          </h4>
          <b-card-body class="pb-2">
            <b-form-group label="标题">
              <b-input v-model="focusData.title" required/>
            </b-form-group>

            <b-form-group label="开始日期">
              <input type="date" class="form-control" v-model="focusData.startDate">
            </b-form-group>

            <b-form-group label="结束日期">
              <input type="date" class="form-control" v-model="focusData.endDate">
            </b-form-group>

            <!-- <b-form-group label="Keywords">
              <b-input v-model="articleData.meta.keywords" />
            </b-form-group>-->
          </b-card-body>

          <div class="text-right mb-3 mr-4">
          <b-btn variant="primary" type="submit">提交</b-btn>&nbsp;
          <!-- <b-btn variant="default">Cancel</b-btn> -->
          </div>
        </b-card>
      </b-form>

      <b-form @submit.prevent="eventSubmit" class="col-6">
        <b-card no-body >
          <h4 class="font-weight-bold ml-4 mt-4">
            事件发布
          </h4>
          <b-card-body class="pb-2">
            <!-- <b-form-group label="标题">
              <b-input v-model="articleData.title" required/>
            </b-form-group> -->

            <b-form-group label="选择焦点">
              <b-select
                v-model="eventData.focus"
                :options="focus"
              />
            </b-form-group>

            <b-form-group label="事件内容">
              <b-textarea v-model="eventData.content" :rows="3" required/>
            </b-form-group>

            <b-form-group label="事件日期">
              <input type="date" class="form-control" v-model="eventData.date">
            </b-form-group>

            <b-form-group label="操作">
              <b-input v-model="eventData.action" required/>
            </b-form-group>

            <b-form-group label="标的">
              <b-input v-model="eventData.target" required/>
            </b-form-group>

            <b-form-group label="评级">
              <star-rate v-model="eventData.rating" />
            </b-form-group>

            <!-- <b-form-group label="Keywords">
              <b-input v-model="articleData.meta.keywords" />
            </b-form-group>-->
          </b-card-body>

          <div class="text-right mb-3 mr-4">
          <b-btn variant="primary" type="submit">提交</b-btn>&nbsp;
          <!-- <b-btn variant="default">Cancel</b-btn> -->
          </div>
        </b-card>
      </b-form>
    </div>
  </div>
</template>

<style lang="scss">
.ql-container.ql-snow {
  height: 400px;
}
</style>

<script>
import { constants } from 'crypto'
import StarRate from 'vue-cute-rate'
// import Multiselect from 'vue-multiselect'

export default {
  name: 'pages-article-edit',
  metaInfo: {
    title: '资讯发布'
  },
  components: {
    StarRate
  },
  data: () => ({
    focusData: {
      title: '',
      startDate: '',
      endDate: ''
    },
    eventData: {
      focus: 5,
      content: '',
      date: '',
      action: '',
      target: '',
      rating: 0
    },
    focusList: [],
    focus: { 5: '默认' },
    category: { 1: 'default' }
  }),
  created () {
  },
  destroyed () {
  },
  mounted () {
    // this.getInfoCats()
    this.getFocus()
  },
  methods: {
    getFocus () {
      var url = this.$host + '/focus/'
      this.$ajax.get(url, {
        params: { is_top: 0 }
      }).then(res => {
        // this.focusList = res.data
        for (var i = 0; i < res.data.length; i++) {
          this.focus[res.data[i].id] = res.data[i].title
        }
        // console.log(this.focusList);
      })
    },
    focusSubmit () {
      var url = this.$host + '/focus/'
      var username = 'admin'
      var postData = {
        title: this.focusData.title,
        start_date: this.focusData.startDate,
        end_date: this.focusData.endDate,
        author: username,
        is_top: 0
      }
      this.$ajax.post(url, postData, {
        responseType: 'json'
      }).then(response => {
        alert('发布成功')
        window.location.reload()
      }).catch(error => {
        if (error.response.status == 400) {
          console.log(error.response.data)
        } else {
          console.log(error.response.status)
        }
      })
    },
    eventSubmit () {
      var url = this.$host + '/events/'
      var username = 'admin'
      var postData = {
        content: this.eventData.content,
        est_date: this.eventData.date,
        action: this.eventData.action,
        target: this.eventData.target,
        author: username,
        focus_id: this.eventData.focus,
        rating: this.eventData.rating
      }

      this.$ajax.post(url, postData, {
        responseType: 'json'
      }).then(response => {
        alert('发布成功')
        window.location.reload()
      }).catch(error => {
        if (error.response.status == 400) {
          console.log(error.response.data)
        } else {
          console.log(error.response.status)
        }
      })
    }
  }
}
</script>
