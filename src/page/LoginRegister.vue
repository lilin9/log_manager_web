<template>
  <div class="common-layout">
    <el-container>
      <!-- 页头 -->
      <el-header>
        <div class="logo">
          <el-image
            src="/src/assets/logo.png"
            style="width: 40px; height: 40px"
          ></el-image>
          <span class="title">通用日志管理系统</span>
        </div>
      </el-header>
      <!-- 主体 -->
      <el-main>
        <el-row :gutter="20">
          <el-col :span="14" class="left"></el-col>
          <el-col :span="10" class="right">
            <!-- 登录框 -->
            <div class="form" v-if="isLogin">
              <el-form ref="ruleFormRef" status-icon class="demo-ruleForm">
                <el-form-item>
                  <el-input placeholder="用户名" size="large" />
                </el-form-item>
                <el-form-item>
                  <el-input
                    type="password"
                    autocomplete="off"
                    placeholder="密码"
                    size="large" />
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="userLogin">登录</el-button>
                  <el-button @click="isLogin = !isLogin">注册</el-button>
                </el-form-item>
              </el-form>
            </div>
            <!-- 注册框 -->
            <div class="form" v-if="!isLogin">
              <el-form ref="ruleFormRef" status-icon class="demo-ruleForm">
                <el-form-item>
                  <el-input placeholder="用户名" size="large" />
                </el-form-item>
                <el-form-item>
                  <el-input
                    type="password"
                    autocomplete="off"
                    placeholder="密码"
                    size="large" />
                </el-form-item>
                <el-form-item>
                  <el-input
                    type="password"
                    autocomplete="off"
                    placeholder="确认密码"
                    size="large"
                  />
                </el-form-item>
                <el-form-item>
                  <el-button type="primary">注册</el-button>
                  <el-button @click="isLogin = !isLogin">登录</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import {useRouter} from "vue-router";
import { ref } from "vue";
export default {
  name: "LoginRegister",
  setup() {
    //控制登录框和注册框的显隐
    let isLogin = ref(true);
    //获取路由
    const router = useRouter();

    //登录点击事件
    function userLogin() {
      router.push({path: "/index"});
    }

    return { isLogin, userLogin };
  },
};
</script>

<style scoped>
.el-header {
  display: flex;
  background-color: #2c2f31;
  color: #ffffff;
  justify-content: space-between;
}
.el-header .logo {
  display: flex;
  align-items: center;
}
.el-header .logo .title {
  margin: 0 10px;
}

.el-main {
  height: calc(100vh - 60px);
  padding: 0 10px;
}
.el-row {
  height: calc(100vh - 60px);
  widows: calc(100vh);
  background-image: url("../assets/bg.jpg");
  background-size: cover;
  background-position: 0 -200px;
}
/* 登录与注册框 */
.form {
  position: relative;
  top: 7%;
  width: 450px;
  height: 450px;
  background-color: rgb(44, 47, 49);
  align-content: center;
  border-radius: 10px;
}
.form .el-form {
  position: absolute;
  width: 245px;
  height: 225px;
  margin: 112px 92px;
}
.form .el-form .el-button {
  width: 100px;
}
.form .el-form .el-button:first-of-type {
  margin-right: 22px;
}
.form .el-form .el-button:last-of-type {
  margin-left: 22px;
}
/* 登录与注册框 */
</style>