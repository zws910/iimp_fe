<template>
  <sidenav :orientation="orientation" :class="curClasses">

    <!-- Inner -->
    <div class="sidenav-inner" :class="{ 'py-1': orientation !== 'horizontal' }">

      <sidenav-router-link icon="ion ion-md-desktop" to="/" :exact="true">首页</sidenav-router-link>
      <sidenav-router-link icon="ion ion-md-speedometer" to="/timeline" :exact="true">时间轴</sidenav-router-link>

      <!-- Markets -->
      <sidenav-menu icon="ion ion-md-pie">
        <template slot="link-text">行情</template>
        <sidenav-router-link to="/markets/unusual">盘中异动</sidenav-router-link>
        <!-- <sidenav-router-link to="/editors/focus">事件发布</sidenav-router-link> -->
      </sidenav-menu>

      <!-- Editors -->
      <sidenav-menu icon="ion ion-md-document" v-show="is_employee">
        <template slot="link-text">发布</template>
        <sidenav-router-link to="/editors/info">资讯发布</sidenav-router-link>
        <sidenav-router-link to="/editors/focus">事件发布</sidenav-router-link>
      </sidenav-menu>

    </div>
  </sidenav>
</template>

<script>
import { Sidenav, SidenavLink, SidenavRouterLink, SidenavMenu, SidenavHeader, SidenavBlock, SidenavDivider } from '@/vendor/libs/sidenav'

export default {
  name: 'app-layout-sidenav',
  components: {
    /* eslint-disable vue/no-unused-components */
    Sidenav,
    SidenavLink,
    SidenavRouterLink,
    SidenavMenu,
    SidenavHeader,
    SidenavBlock,
    SidenavDivider
    /* eslint-enable vue/no-unused-components */
  },

  props: {
    orientation: {
      type: String,
      default: 'vertical'
    }
  },

  data: () => ({
    user_id: sessionStorage.user_id || localStorage.user_id,
    token: sessionStorage.token || localStorage.token,
    username: '',
    nickname: '',
    is_employee: 0
  }),

  mounted () {
    this.checkLogin()
  },

  computed: {
    curClasses () {
      let bg = this.layoutSidenavBg

      if (this.orientation === 'horizontal' && (bg.indexOf(' sidenav-dark') !== -1 || bg.indexOf(' sidenav-light') !== -1)) {
        bg = bg
          .replace(' sidenav-dark', '')
          .replace(' sidenav-light', '')
          .replace('-darker', '')
          .replace('-dark', '')
      }

      return `bg-${bg} ` + (
        this.orientation !== 'horizontal'
          ? 'layout-sidenav'
          : 'layout-sidenav-horizontal container-p-x flex-grow-0'
      )
    }
  },

  methods: {
    isMenuActive (url) {
      return this.$route.path.indexOf(url) === 0
    },

    isMenuOpen (url) {
      return this.$route.path.indexOf(url) === 0 && this.orientation !== 'horizontal'
    },

    toggleSidenav () {
      this.layoutHelpers.toggleCollapsed()
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
    }
  }
}
</script>
