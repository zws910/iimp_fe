<template>
  <div>

    <!-- <b-container fluid class="col-6" style="margin: 0px"> -->
    <b-container fluid>
      <h4>盘中异动</h4>
      <b-row>
        <b-col md="6" class="my-1">
          <b-form-group label-cols-sm="3" label="过滤器：" class="mb-0">
            <b-input-group>
              <b-form-input v-model="filter" placeholder=""></b-form-input>
              <b-input-group-append>
                <b-button :disabled="!filter" @click="filter = ''">清除</b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>

        <!-- <b-col md="6" class="my-1">
          <b-form-group label-cols-sm="3" label="Sort" class="mb-0">
            <b-input-group>
              <b-form-select v-model="sortBy" :options="sortOptions">
                <option slot="first" :value="null">-- none --</option>
              </b-form-select>
              <b-form-select v-model="sortDesc" :disabled="!sortBy" slot="append">
                <option :value="false">Asc</option> <option :value="true">Desc</option>
              </b-form-select>
            </b-input-group>
          </b-form-group>
        </b-col> -->

        <!-- <b-col md="6" class="my-1">
          <b-form-group label-cols-sm="3" label="Sort direction" class="mb-0">
            <b-input-group>
              <b-form-select v-model="sortDirection" slot="append">
                <option value="asc">Asc</option> <option value="desc">Desc</option>
                <option value="last">Last</option>
              </b-form-select>
            </b-input-group>
          </b-form-group>
        </b-col> -->

        <b-col md="6" class="my-1">
          <b-form-group label-cols-sm="3" label="每页显示：" class="mb-0">
            <b-form-select v-model="perPage" :options="pageOptions"></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>

      <b-table
      show-empty
      stacked="md"
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      @filtered="onFiltered"
      >
        <template slot="actions" slot-scope="row">
          <!-- <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
            Info modal
          </b-button> -->
          <b-button size="sm" @click="row.toggleDetails">
            {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
          </b-button>
        </template>

        <template slot="row-details" slot-scope="row">
          <b-card>
            <ul>
              <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
            </ul>
          </b-card>
        </template>
      </b-table>

      <b-row>
        <b-col md="6" class="my-1">
          <b-pagination
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            class="my-0"
          ></b-pagination>
        </b-col>
      </b-row>

    </b-container>

  </div>
</template>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style src="@/vendor/libs/vue-multiselect/vue-multiselect.scss" lang="scss"></style>
<style src="@/vendor/libs/vue-quill-editor/typography.scss" lang="scss"></style>
<style src="@/vendor/libs/vue-quill-editor/editor.scss" lang="scss"></style>

<style lang="scss">
</style>

<script>
export default {
  name: 'pages-article-edit',
  metaInfo: {
    title: '盘中异动'
  },
  components: {
  },
  data: () => ({
    // polling
    polling_myradar: null,

    infoData: [],
    renderInfoList: [],
    items: [],
    fields: [
      { key: 'name', label: '股票名称', sortable: true, sortDirection: 'desc' },
      { key: 'code', label: '股票代码', sortable: true, class: 'text-center' },
      { key: 'price', label: '最新价', sortable: true, sortDirection: 'desc' },
      { key: 'range', label: '涨跌幅', sortable: true, sortDirection: 'desc' },
      { key: 'type', label: '异动类型', sortable: true, sortDirection: 'desc' },
      { key: 'clock', label: '异动时间', sortable: true, sortDirection: 'desc' },
      // { key: 'isActive', label: 'is Active' },
      { key: 'actions', label: 'Actions' }
    ],
    totalRows: 1,
    currentPage: 1,
    perPage: 5,
    pageOptions: [5, 10, 15],
    sortBy: null,
    sortDesc: false,
    sortDirection: 'asc',
    filter: null,
    infoModal: {
      id: 'info-modal',
      title: '',
      content: ''
    },
    zxgCodes: '600519,603908,300090,300552,000725,300066,000061,300182,600320'

  }),
  created () {
    // this.initWebSocket()
    this.pollMyradar()
  },
  mounted () {
  },
  beforeDestroy () {
    clearInterval(this.polling_myradar)
  },
  destroyed () {
    // this.websock.close()
  },
  methods: {
    // 请求 我的自选股异动
    getMyRadar () {
      this.$ajax.get(
        this.$host + '/my-radar/', {
          params: {
            zxg_codes: this.zxgCodes
          }
        }
      ).then(res => {
        console.log(res.data)
        this.items = res.data
        this.totalRows = this.items.length
      }
      )
    },
    pollMyradar () {
      this.polling_myradar = setInterval(() => {
        this.getMyRadar()
      }, 10000)
    },

    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }

  }
}
</script>
