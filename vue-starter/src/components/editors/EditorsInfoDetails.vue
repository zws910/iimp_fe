<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      编辑资讯
      <span class="text-muted"></span>
    </h4>

    <!-- <b-form @submit="onSubmit"> -->
    <b-form @submit.prevent="onSubmit">
      <b-card no-body>
        <b-card-body class="pb-2">
          <b-form-group label="标题">
            <b-input v-model="infoData.title" required/>
          </b-form-group>
          
          <b-form-group label="类别">
            <b-select
              v-model="infoData.category"
              :options="category"
              class="flex-grow-1 col-3"
            />
          </b-form-group>

          <b-form-group label="内容">
            <b-textarea v-model="infoData.content" :rows="3" required/>
          </b-form-group>

          <b-form-group label="标的">
            <b-textarea v-model="infoData.targets" :rows="3" required/>
          </b-form-group>

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
  name: 'pages-infos-edit',
  metaInfo: {
    title: '编辑资讯'
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

    info_id: '',
    infoData: {},
    cats: [],
    category: { 8: 'default' },
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
    this.getInfoCats()
    this.renderInfos()
  },
  methods: {
    getInfoCats () {
      var url = this.$host + '/info-cats/'
      this.$ajax.get(url).then(res => {
        console.log(res.data)
        this.cats = res.data
        for (var i = 0; i < res.data.length; i++) {
          this.category[res.data[i].id] = res.data[i].name
        }
      })
    },
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
      this.info_id = this.$route.params.id
    },
    renderInfos () {
      var url = this.$host + '/infos-detail/' + this.info_id + '/'
      this.$ajax.get(url).then(response => {
        console.log(response.data)
        this.infoData = response.data
      })
    },
    // 点击提交
    onSubmit () {
      var url = this.$host + '/infos-detail/' + this.info_id + '/editors/'
      var username = this.username
      this.$ajax.put(url, {
        info_id: this.info_id,
        title: this.infoData.title,
        content: this.infoData.content,
        targets: this.infoData.targets,
        category: this.infoData.category
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
