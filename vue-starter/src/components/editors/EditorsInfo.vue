<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      资讯发布
      <span class="text-muted"></span>
    </h4>

    <!-- <b-form @submit="onSubmit"> -->
    <b-form @submit.prevent="onSubmit">
      <b-card no-body>
        <b-card-body class="pb-2">
          <b-form-group label="标题">
            <b-input v-model="articleData.title" required/>
          </b-form-group>

          <b-form-group label="类别">
            <b-select
              v-model="articleData.category"
              :options="category"
            />
          </b-form-group>

          <b-form-group label="内容">
            <b-textarea v-model="articleData.content" :rows="3" required/>
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
    articleData: {
      title: '',
      category: 1,
      content: ''
    },
    cats: [],
    category: { 1: 'default' }
  }),
  created () {
  },
  destroyed () {
  },
  mounted () {
    this.getInfoCats()
  },
  methods: {
    getInfoCats () {
      var url = this.$host + '/info-cats/'
      this.$ajax.get(url).then(res => {
        this.cats = res.data
        for (var i=0; i<res.data.length;i++) {
          this.category[res.data[i].id] = res.data[i].name;
        }
      })
    },
    onSubmit () {
      var url = this.$host + '/infos/';
      var timestamp = Math.round(new Date().getTime() / 1000).toString();
      var username = 'admin'; // 暂时写死
      this.$ajax.post(url, {
        title: this.articleData.title,
        content: this.articleData.content,
        category: this.articleData.category,
        pub_timestamp: timestamp,
        author: username
      }, {
        responseType: 'json'
      }).then(response => {
        alert("发布成功")
        window.location.reload();
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
