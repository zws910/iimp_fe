<template>
  <b-navbar toggleable="lg" :variant="getLayoutNavbarBg()" class="layout-navbar align-items-lg-center container-p-x">

    <!-- Brand -->
    <b-navbar-brand to="/">PLUS+</b-navbar-brand>

    <!-- Sidenav toggle -->
    <b-navbar-nav class="align-items-lg-center mr-auto mr-lg-4" v-if="sidenavToggle">
      <a class="nav-item nav-link px-0 ml-2 ml-lg-0" href="javascript:void(0)" @click="toggleSidenav">
        <i class="ion ion-md-menu text-large align-middle" />
      </a>
    </b-navbar-nav>

    <!-- Navbar toggle -->
    <b-collapse is-nav id="app-layout-navbar">
      <!-- Divider -->
      <hr class="d-lg-none w-100 my-2">

      <b-navbar-nav class="align-items-lg-center">
        <!-- Search -->
        <label class="nav-item navbar-text navbar-search-box p-0 active">
          <i class="ion ion-ios-search navbar-icon align-middle"></i>
          <span class="navbar-search-input pl-2">
            <input type="text" class="form-control navbar-text mx-2" placeholder="Search..." style="width:200px">
          </span>
        </label>
      </b-navbar-nav>

      <b-navbar-nav class="align-items-lg-center ml-auto">
        <!-- 消息提醒 -->
        <!-- <b-nav-item-dropdown no-caret :right="!isRTL" class="demo-navbar-notifications mr-lg-3">
          <template slot="button-content">
            <i class="ion ion-md-notifications-outline navbar-icon align-middle"></i>
            <span class="badge badge-primary badge-dot indicator"></span>
            <span class="d-lg-none align-middle">&nbsp; Notifications</span>
          </template>

          <div class="bg-primary text-center text-white font-weight-bold p-3">
            4 New Notifications
          </div>
          <b-list-group flush>
            <b-list-group-item href="javascript:void(0)" class="media d-flex align-items-center">
              <div class="ui-icon ui-icon-sm ion ion-md-home bg-secondary border-0 text-white"></div>
              <div class="media-body line-height-condenced ml-3">
                <div class="text-dark">Login from 192.168.1.1</div>
                <div class="text-light small mt-1">
                  Aliquam ex eros, imperdiet vulputate hendrerit et.
                </div>
                <div class="text-light small mt-1">12h ago</div>
              </div>
            </b-list-group-item>

            <b-list-group-item href="javascript:void(0)" class="media d-flex align-items-center">
              <div class="ui-icon ui-icon-sm ion ion-md-person-add bg-info border-0 text-white"></div>
              <div class="media-body line-height-condenced ml-3">
                <div class="text-dark">You have <strong>4</strong> new followers</div>
                <div class="text-light small mt-1">
                  Phasellus nunc nisl, posuere cursus pretium nec, dictum vehicula tellus.
                </div>
              </div>
            </b-list-group-item>

            <b-list-group-item href="javascript:void(0)" class="media d-flex align-items-center">
              <div class="ui-icon ui-icon-sm ion ion-md-power bg-danger border-0 text-white"></div>
              <div class="media-body line-height-condenced ml-3">
                <div class="text-dark">Server restarted</div>
                <div class="text-light small mt-1">
                  19h ago
                </div>
              </div>
            </b-list-group-item>

            <b-list-group-item href="javascript:void(0)" class="media d-flex align-items-center">
              <div class="ui-icon ui-icon-sm ion ion-md-warning bg-warning border-0 text-dark"></div>
              <div class="media-body line-height-condenced ml-3">
                <div class="text-dark">99% server load</div>
                <div class="text-light small mt-1">
                  Etiam nec fringilla magna. Donec mi metus.
                </div>
                <div class="text-light small mt-1">
                  20h ago
                </div>
              </div>
            </b-list-group-item>
          </b-list-group>

          <a href="javascript:void(0)" class="d-block text-center text-light small p-2 my-1">Show all notifications</a>
        </b-nav-item-dropdown> -->

        <!-- 新邮件 -->
        <!-- <b-nav-item-dropdown no-caret :right="!isRTL" class="demo-navbar-messages mr-lg-3">
          <template slot="button-content">
            <i class="ion ion-ios-mail navbar-icon align-middle"></i>
            <span class="badge badge-primary badge-dot indicator"></span>
            <span class="d-lg-none align-middle">&nbsp; Messages</span>
          </template>

          <div class="bg-primary text-center text-white font-weight-bold p-3">
            4 New Messages
          </div>
          <b-list-group flush>
            <b-list-group-item href="javascript:void(0)" class="media d-flex align-items-center">
              <img :src="`${publicUrl}img/avatars/6-small.png`" class="d-block ui-w-40 rounded-circle" alt>
              <div class="media-body ml-3">
                <div class="text-dark line-height-condenced">Sit meis deleniti eu, pri vidit meliore docendi ut.</div>
                <div class="text-light small mt-1">
                  Mae Gibson &nbsp;·&nbsp; 58m ago
                </div>
              </div>
            </b-list-group-item>

            <b-list-group-item href="javascript:void(0)" class="media d-flex align-items-center">
              <img :src="`${publicUrl}img/avatars/4-small.png`" class="d-block ui-w-40 rounded-circle" alt>
              <div class="media-body ml-3">
                <div class="text-dark line-height-condenced">Mea et legere fuisset, ius amet purto luptatum te.</div>
                <div class="text-light small mt-1">
                  Kenneth Frazier &nbsp;·&nbsp; 1h ago
                </div>
              </div>
            </b-list-group-item>

            <b-list-group-item href="javascript:void(0)" class="media d-flex align-items-center">
              <img :src="`${publicUrl}img/avatars/5-small.png`" class="d-block ui-w-40 rounded-circle" alt>
              <div class="media-body ml-3">
                <div class="text-dark line-height-condenced">Sit meis deleniti eu, pri vidit meliore docendi ut.</div>
                <div class="text-light small mt-1">
                  Nelle Maxwell &nbsp;·&nbsp; 2h ago
                </div>
              </div>
            </b-list-group-item>

            <b-list-group-item href="javascript:void(0)" class="media d-flex align-items-center">
              <img :src="`${publicUrl}img/avatars/11-small.png`" class="d-block ui-w-40 rounded-circle" alt>
              <div class="media-body ml-3">
                <div class="text-dark line-height-condenced">Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.</div>
                <div class="text-light small mt-1">
                  Belle Ross &nbsp;·&nbsp; 5h ago
                </div>
              </div>
            </b-list-group-item>
          </b-list-group>

          <a href="javascript:void(0)" class="d-block text-center text-light small p-2 my-1">Show all messages</a>
        </b-nav-item-dropdown> -->

        <!-- Divider -->
        <div class="nav-item d-none d-lg-block text-big font-weight-light line-height-1 opacity-25 mr-3 ml-1">|</div>

        <b-nav-item-dropdown :right="!isRTL" class="demo-navbar-user">
          <template slot="button-content">
            <span class="d-inline-flex flex-lg-row-reverse align-items-center align-middle">
              <img :src="`${publicUrl}img/avatars/1.png`" alt class="d-block ui-w-30 rounded-circle">
              <span class="px-1 mr-lg-2 ml-2 ml-lg-0">{{ nickname }}</span>
            </span>
          </template>

          <b-dd-item><i class="ion ion-ios-person text-lightest"></i> &nbsp; 我的资料</b-dd-item>
          <!-- <b-dd-item><i class="ion ion-ios-mail text-lightest"></i> &nbsp; Messages</b-dd-item> -->
          <b-dd-item><i class="ion ion-md-settings text-lightest"></i> &nbsp; 账号管理</b-dd-item>
          <b-dd-divider />
          <b-dd-item @click="logout"><i class="ion ion-ios-log-out text-danger"></i> &nbsp; 退出</b-dd-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>

  </b-navbar>
</template>

<script>
export default {
  name: 'app-layout-navbar',

  props: {
    sidenavToggle: {
      type: Boolean,
      default: true
    }
  },

  data: () => ({
    user_id: sessionStorage.user_id || localStorage.user_id,
    token: sessionStorage.token || localStorage.token,
    username: '',
    nickname: '',
    is_employee: ''
  }),

  mounted () {
    this.checkLogin()
  },

  methods: {
    toggleSidenav () {
      this.layoutHelpers.toggleCollapsed()
    },

    getLayoutNavbarBg () {
      return this.layoutNavbarBg
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

    logout () {
      sessionStorage.clear()
      localStorage.clear()
      location.href = '/authentication/login'
    }
  }
}
</script>
