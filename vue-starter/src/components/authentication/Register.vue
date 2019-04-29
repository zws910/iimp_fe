<template>
  <div class="authentication-wrapper authentication-3">
    <div class="authentication-inner">

      <!-- Side container -->
      <!-- Do not display the container on extra small, small and medium screens -->
      <div class="d-none d-lg-flex col-lg-8 align-items-center ui-bg-cover ui-bg-overlay-container p-5" :style="`background-image: url('${publicUrl}img/bg/21.jpg');`">
        <div class="ui-bg-overlay bg-dark opacity-50"></div>

        <!-- Text -->
        <div class="w-100 text-white px-5">
          <h1 class="display-2 font-weight-bolder mb-4">JOIN US<br>PLUS+</h1>
          <!-- <div class="text-large font-weight-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula ex eu gravida faucibus. Suspendisse viverra pharetra purus. Proin fringilla ac lorem at sagittis. Proin tincidunt dui et nunc ultricies dignissim.
          </div> -->
        </div>
        <!-- /.Text -->
      </div>
      <!-- / Side container -->

      <!-- Form container -->
      <div class="d-flex col-lg-4 align-items-center bg-white p-5">
        <!-- Inner container -->
        <!-- Have to add `.d-flex` to control width via `.col-*` classes -->
        <div class="d-flex col-sm-7 col-md-5 col-lg-12 px-0 px-xl-4 mx-auto">
          <div class="w-100">

            <!-- Logo -->
            <div class="d-flex justify-content-center align-items-center">
              <div class="ui-w-60">
                <div class="w-100 position-relative" style="padding-bottom: 54%">
                  <svg class="w-100 h-100 position-absolute" viewBox="0 0 148 80" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="a" x1="46.49" x2="62.46" y1="53.39" y2="48.2" gradientUnits="userSpaceOnUse"><stop stop-opacity=".25" offset="0"></stop><stop stop-opacity=".1" offset=".3"></stop><stop stop-opacity="0" offset=".9"></stop></linearGradient><linearGradient id="e" x1="76.9" x2="92.64" y1="26.38" y2="31.49" xlink:href="#a"></linearGradient><linearGradient id="d" x1="107.12" x2="122.74" y1="53.41" y2="48.33" xlink:href="#a"></linearGradient></defs><path class="fill-primary" transform="translate(-.1)" d="M121.36,0,104.42,45.08,88.71,3.28A5.09,5.09,0,0,0,83.93,0H64.27A5.09,5.09,0,0,0,59.5,3.28L43.79,45.08,26.85,0H.1L29.43,76.74A5.09,5.09,0,0,0,34.19,80H53.39a5.09,5.09,0,0,0,4.77-3.26L74.1,35l16,41.74A5.09,5.09,0,0,0,94.82,80h18.95a5.09,5.09,0,0,0,4.76-3.24L148.1,0Z"></path><path transform="translate(-.1)" d="M52.19,22.73l-8.4,22.35L56.51,78.94a5,5,0,0,0,1.64-2.19l7.34-19.2Z" fill="url(#a)"></path><path transform="translate(-.1)" d="M95.73,22l-7-18.69a5,5,0,0,0-1.64-2.21L74.1,35l8.33,21.79Z" fill="url(#e)"></path><path transform="translate(-.1)" d="M112.73,23l-8.31,22.12,12.66,33.7a5,5,0,0,0,1.45-2l7.3-18.93Z" fill="url(#d)"></path></svg>
                </div>
              </div>
            </div>
            <!-- / Logo -->

            <h4 class="text-center text-lighter font-weight-normal mt-5 mb-0">注册新账户</h4>

            <!-- Form -->
            <form class="my-5" @submit.prevent="onSubmit">
              <b-form-group label="用户名">
                <b-input v-model="credentials.username" @blur="checkUsername" required/>
                <span v-show="error_name" style="color: red">{{ error_name_message }}</span>
              </b-form-group>
              <b-form-group label="昵称">
                <b-input v-model="credentials.nickname" @blur="checkNickname" required/>
                <span v-show="error_nickname" style="color: red">{{ error_nickname_message }}</span>
              </b-form-group>
              <b-form-group label="密码">
                <b-input type="password" v-model="credentials.password" required/>
                <span v-show="error_password" style="color: red">密码最少8位, 最长20位</span>
              </b-form-group>
              <b-form-group label="确认密码">
                <b-input type="password" v-model="credentials.password2" required/>
                <span v-show="error_check_password" style="color: red">两次输入的密码不一致</span>
              </b-form-group>
              <b-btn variant="primary" type="submit" :block="true" class="mt-4">注册</b-btn>
              <!-- <div class="text-light small mt-4">
                By clicking "Sign Up", you agree to our
                <a href="javascript:void(0)">terms of service and privacy policy</a>. We’ll occasionally send you account related emails.
              </div> -->
            </form>
            <!-- / Form -->

            <div class="text-center text-muted">
              已有账号？ <a href="/authentication/login">登录</a>
            </div>

          </div>
        </div>
      </div>
      <!-- / Form container -->

    </div>
  </div>
</template>

<!-- Page -->
<style src="@/vendor/styles/pages/authentication.scss" lang="scss"></style>

<script>
import { truncate, truncateSync } from 'fs'
export default {
  name: 'pages-authentication-register-v3',
  metaInfo: {
    title: '注册'
  },
  data: () => ({
    credentials: {
      username: '',
      nickname: '',
      password: '',
      password2: ''
    },
    error_name: false,
    error_nickname: false,
    error_password: false,
    error_check_password: false,
    error_name_message: '',
    error_nickname_message: ''

  }),
  methods: {
    // 检查用户名
    checkUsername () {
      var len = this.credentials.username.length
      if (len < 5 || len > 20) {
        this.error_name_message = '请输入5-20个字符的用户名'
        this.error_name = true
      } else {
        this.error_name = false
      }
      // 检查重名
      if (this.error_name == false) {
        this.$ajax.get(this.$host + '/usernames/' + this.credentials.username + '/count/', {
          responseType: 'json'
        }).then(response => {
          if (response.data.count > 0) {
            this.error_name_message = '用户名已存在'
            this.error_name = true
          } else {
            this.error_name = false
          }
        }).catch(error => {
          console.log(error)
        })
      }
    },
    // 检查昵称
    checkNickname () {
      var len = this.credentials.nickname.length
      if (len < 5 || len > 20) {
        this.error_nickname_message = '请输入5-20个字符的昵称'
        this.error_nickname = true
      } else {
        this.error_nickname = false
      }
      // 检查重名
      if (this.error_nickname == false) {
        this.$ajax.get(this.$host + '/nicknames/' + this.credentials.nickname + '/count/', {
          responseType: 'json'
        }).then(response => {
          if (response.data.count > 0) {
            this.error_nickname_message = '昵称已存在'
            this.error_nickname = true
          } else {
            this.error_nickname = false
          }
        }).catch(error => {
          console.log(error)
        })
      }
    },
    // 检查密码
    checkPwd () {
      var len = this.credentials.password.length
      if (len < 8 || len > 20) {
        this.error_password = true
      } else {
        this.error_password = false
      }
    },
    // 检查确认密码
    checkCpwd () {
      if (this.password != this.password2) {
        this.error_check_password = true
      } else {
        this.error_check_password = false
      }
    },
    // 点击注册
    onSubmit () {
      this.checkUsername()
      this.checkPwd()
      this.checkCpwd()

      if (this.error_name == false && this.error_password == false && this.error_check_password == false) {
        this.$ajax.post(this.$host + '/users/', {
          username: this.credentials.username,
          password: this.credentials.password,
          password_repeat: this.credentials.password2
        }, {
          responseType: 'json'
        }).then(response => {
          // 记录用户的登录状态
          sessionStorage.clear()
          localStorage.clear()

          localStorage.token = response.data.token
          localStorage.username = response.data.username
          localStorage.user_id = response.data.id

          location.href = '/'
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
}
</script>
