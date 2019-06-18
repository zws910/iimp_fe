<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      编辑事件
      <span class="text-muted"></span>
    </h4>

    <!-- <b-form @submit="onSubmit"> -->
    <b-form @submit.prevent="onSubmit">
      <b-card no-body>
        <b-card-body class="pb-2">
          <b-form-group label="标题">
            <b-input v-model="eventData.title"/>
          </b-form-group>

          <b-form-group label="内容">
            <b-textarea v-model="eventData.content" :rows="3"/>
          </b-form-group>

          <b-form-group label="最新进展">
            <b-textarea v-model="eventData.update" :rows="3"/>
          </b-form-group>

          <b-form-group label="可行性分析">
            <b-textarea v-model="eventData.feasibility" :rows="3"/>
          </b-form-group>

          <b-form-group label="标的">
            <b-textarea v-model="eventData.target" :rows="3"/>
          </b-form-group>

          <!-- <b-form-group label="Keywords">
            <b-input v-model="articleData.meta.keywords" />
          </b-form-group>-->
        </b-card-body>
      </b-card>

      <div class="text-right mt-3">
        <b-btn type="submit" variant="primary">提交</b-btn>&nbsp;
        <!-- <b-btn variant="default">Cancel</b-btn> -->
      </div>
    </b-form>
  </div>
</template>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style src="@/vendor/libs/vue-multiselect/vue-multiselect.scss" lang="scss"></style>
<style src="@/vendor/libs/vue-quill-editor/typography.scss" lang="scss"></style>
<style src="@/vendor/libs/vue-quill-editor/editor.scss" lang="scss"></style>

<style lang="scss">
.ql-container.ql-snow {
  height: 400px;
}
</style>

<script>
import { constants } from 'crypto'
// import Multiselect from 'vue-multiselect'

export default {
  name: 'pages-article-edit',
  metaInfo: {
    title: '资讯发布'
  },
  components: {
    // Multiselect,
    // quillEditor: () => import('vue-quill-editor/dist/vue-quill-editor').then(m => m.quillEditor).catch(() => {})
  },
  data: () => ({
    user_id: sessionStorage.user_id || localStorage.user_id,
    token: sessionStorage.token || localStorage.token,
    username: '',
    nickname: '',
    is_employee: '',

    event_id: '',
    eventData: {},
  }),
  created () {
    this.getId()
    this.checkLogin()
  },
  beforeDestroy() {
  },
  destroyed () {
  },
  mounted () {
    this.renderEvents()
  },
  methods: {
    checkLogin () {
      if (this.user_id && this.token) {
        var url = this.$host + '/user-profile/'
        this.$ajax.get(url, {
          headers: {
            'Authorization': 'JWT ' + this.token
          },
          responseType: 'json'
        }).then(res => {
          // 加载用户数据
          this.user_id = res.data.id
          this.username = res.data.username
          this.nickname = res.data.nickname
          this.is_employee = res.data.is_employee
        }).catch(error => {
          if (error.response.status == 401 || error.response.status == 403) {
            location.href = '/authentication/login'
          }
        })
      } else {
        location.href = '/authentication/login'
      }
    },
    getId () {
      this.event_id = this.$route.params.id
    },
    renderEvents () {
      var url = this.$host + '/events-detail/' + this.event_id + '/'
      this.$ajax.get(url).then(response => {
        console.log(response.data)
        this.eventData = response.data
      })
    },
    // 点击提交
    onSubmit () {
      var url = this.$host + '/events-detail/' + this.event_id + '/editors/'
      var username = this.username
      console.log(this.event_id)
      this.$ajax.put(url, {
        event_id: this.event_id,
        title: this.eventData.title,
        content: this.eventData.content,
        update: this.eventData.update,
        target: this.eventData.target,
        feasibility: this.eventData.feasibility
      }, {
        responseType: 'json'
      }).then(response => {
        alert('编辑成功')
        window.location.reload()
      })
        .catch(error => {
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
