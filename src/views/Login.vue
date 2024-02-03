<script setup>
import utils from "../utils/commonUtils";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import { reactive, toRefs, ref, getCurrentInstance, toRaw } from "vue";

const api = getCurrentInstance().proxy.$api;
const router = useRouter();

//登录用户信息
let userInfo = reactive({
  username: "",
  email: "",
  password: "",
  verifyPassword: "",
});
let isShowLogin = reactive({ value: true });
//切换登录框或者注册框
let switchHandler = () => {
  isShowLogin.value = !isShowLogin.value;
  utils.clearObj(userInfo);
};

//登录事件
let loginHandler = async () => {
  let res = await api.login(userInfo);
  if (res && res.code == 200) {
    //将用户信息存入本地存储
    localStorage.setItem("userInfo", JSON.stringify(res.data));
    ElMessage.success("登录成功！");
    //跳转到首页
    router.push({ path: "/" });
  } else {
    ElMessage.error(res.message);
  }
};

//注册事件
let registerHandler = async () => {
  //判断参数为空
  if (userInfo.username == null || userInfo.username == "") {
    ElMessage.error("请输入用户名");
    return;
  }
  if (userInfo.email == null || userInfo.email == "") {
    ElMessage.error("请输入邮箱");
    return;
  }
  if (userInfo.password == null || userInfo.password == "") {
    ElMessage.error("请输入密码");
    return;
  }
  if (userInfo.verifyPassword == null || userInfo.verifyPassword == "") {
    ElMessage.error("请确认密码");
    return;
  }

  let res = await api.register(userInfo);
  if (res && res.code == 200) {
    //清空用户的输入信息
    utils.clearObj(userInfo);
    ElMessage.success("注册成功，请登录！");
    //切换到登录框
    isShowLogin.value = true;
  } else {
    ElMessage.error(res.message);
  }
};

//邮箱校验
let verifyEmail = (rule, value, callback) => {
  var emailRegExp = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
  var emailRegExp1 = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  if (value == null || value == "") {
    callback(new Error("请输入邮箱"));
  } else if (
    (!emailRegExp.test(value) && value != "") ||
    (!emailRegExp1.test(value) && value != "")
  ) {
    callback(new Error("请输入有效邮箱格式！"));
  } else {
    callback();
  }
};
//密码校验
let verifyPassword = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请再次输入密码"));
  } else if (value !== userInfo.password) {
    callback(new Error("两次输入的密码不一致"));
  } else {
    callback();
  }
};
//表单校验属性
let formRules = reactive({
  username: [
    {
      required: true,
      trigger: "blur",
      message: "请输入用户名",
    },
  ],
  email: [
    {
      required: true,
      validator: verifyEmail,
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      trigger: "blur",
      message: "请输入密码",
    },
  ],
  verifyPassword: [
    {
      required: true,
      validator: verifyPassword,
      trigger: "blur",
    },
  ],
});
let formRef = null;
</script>

<template>
  <el-container class="login">
    <el-header>
      <el-image src="/src/assets/logo.png" fit="fit" />
      <div class="info">
        <el-link href="https://www.baidu.com" type="info" :underline="false"
          >官网</el-link
        >
        <el-link href="https://www.baidu.com" type="info" :underline="false"
          >文档</el-link
        >
        <el-link href="https://www.baidu.com" type="info" :underline="false"
          >社区</el-link
        >
      </div>
    </el-header>
    <el-main>
      <div class="slogan">
        <el-image src="/src/assets/logo.png" fit="fit" />
        <span>A simple and easy to use Java log component</span>
        <span>Support 10 billion logs</span>
        <span>It is more convenient to query the log</span>
      </div>
      <div class="dialog">
        <!-- 登录框 -->
        <div class="login-dialog" v-if="isShowLogin.value">
          <div class="title">登录</div>
          <el-form :model="userInfo" :ref="formRef" :rules="formRules">
            <el-form-item prop="email">
              <el-input
                type="email"
                v-model="userInfo.email"
                placeholder="请输入邮箱"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                type="password"
                v-model="userInfo.password"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
            <el-form-item class="buttons">
              <el-button
                type="primary"
                style="width: 144px; height: 50px"
                @click="loginHandler"
                >登录</el-button
              >
              <el-button
                style="width: 144px; height: 50px"
                @click="switchHandler"
                >去注册</el-button
              >
            </el-form-item>
          </el-form>
        </div>

        <!-- 注册框 -->
        <div class="resgiter-dialog" v-else>
          <div class="title">注册</div>
          <el-form :model="userInfo" :ref="formRef" :rules="formRules">
            <el-form-item prop="username">
              <el-input
                type="email"
                v-model="userInfo.username"
                placeholder="请输入用户名"
              ></el-input>
            </el-form-item>
            <el-form-item prop="email">
              <el-input
                type="email"
                v-model="userInfo.email"
                placeholder="请输入邮箱"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                type="password"
                v-model="userInfo.password"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
            <el-form-item prop="verifyPassword">
              <el-input
                type="password"
                v-model="userInfo.verifyPassword"
                placeholder="请确认密码"
              ></el-input>
            </el-form-item>
            <el-form-item class="buttons">
              <el-button
                type="primary"
                style="width: 144px; height: 50px"
                @click="registerHandler"
                >注册</el-button
              >
              <el-button
                style="width: 144px; height: 50px"
                @click="switchHandler"
                >去登录</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<style scoped>
.login {
  width: 100vw;
  height: 100vh;
}
.login .el-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #fff;
  background: rgb(52, 58, 64) !important;
  width: 100%;
  height: 60px;
  padding: 0 20px;
}
.login .el-header .el-image {
  width: 150px;
  height: 60px;
}
.login .el-header .info {
  margin-left: auto;
}
.login .el-header .el-link {
  margin-right: 20px;
  font-size: 18px;
  font-weight: bolder;
}
.login .el-main {
  background: url("/src/assets/background.png") 0% 0% repeat;
  width: 100%;
  height: calc(100vh - 60px);
}

.el-main .slogan {
  position: absolute;
  left: 100px;
  top: 120px;
  display: flex;
  flex-direction: column;
  text-align: left;
}
.el-main .slogan .el-image {
  width: 500px;
  height: 140px;
}
.el-main .slogan span {
  font-family: Avenir-Medium;
  font-size: 21px;
}
.el-main .dialog {
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 15px;
  float: right;
  width: 450px;
  height: 450px;
  background: #fff;
  border-radius: 10px;
}
.el-main .dialog .el-form .el-input {
  width: 300px;
  margin-top: 5px;
  height: 50px;
}
.el-main .dialog .el-form .buttons {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
}
.el-main .login-dialog,
.el-main .register-dialog {
  margin: 20px;
}
.el-main .title {
  font-size: 32px;
  margin-bottom: 20px;
}
</style>>