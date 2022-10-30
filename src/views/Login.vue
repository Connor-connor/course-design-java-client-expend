<template>
  <!-- <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">用户名</label>
        <input
          type="text"
          v-model="username"
          name="username"
          class="form-control"
          :class="{ 'is-invalid': !username }"
        />
        <div v-show="!username" class="invalid-feedback">请输入用户名</div>
      </div>
      <div class="form-group">
        <label htmlFor="password">口令</label>
        <input
          type="password"
          v-model="password"
          name="password"
          class="form-control"
          :class="{ 'is-invalid': !password }"
        />
        <div v-show="!password" class="invalid-feedback">请输入口令</div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">登录</button>
      </div>
    </form>
  </div> -->

  <div class="login-container">
    <div class="logo">
      <a class="sdu-logo" href="javascript:"></a>
      <span class="line"></span>
      <span class="title">教学信息管理系统</span>
    </div>

    <el-form class="login-form" autocomplete="on" label-position="left">
      <div class="title-container">
        <!-- 教学信息管理系统 -->
        <h3 class="title">欢迎登录<br/>教学信息管理系统</h3>

      </div>

      <div>
        <el-radio-group v-model="radio1" size="large" >
          <el-radio-button label="学生" />
          <el-radio-button label="教工" />
          <el-radio-button label="管理员" />
        </el-radio-group>
      </div>

      <el-form-item>
        <!-- 用户名图标 -->
        <span class="svg-container">
          <i class="el-icon-user-solid"></i>
        </span>
        <!-- 用户名输入框 -->
        <!--ref="username"  做标记,类似于id(选择器)
            v-model="username"  双向数据绑定
                                1. 语法：v-mode:value="xxx" 或简写为 v-model="xxx"
                                2. 特点：数据不仅能从 data 流向页面，还能从页面流向data
            placeholder="Username"
            name="username"
            type="text"
            tabindex="1"
            autocomplete="on"-->
        <el-input
            ref="username"
            v-model="username"
            placeholder="Username"
            name="username"
            type="text"
            tabindex="1"
            autocomplete="on"
        />
      </el-form-item>
      <!-- 这是导致鼠标经过文本框时有一个提示气泡的东西，具体是什么不清楚 -->
      <!--      <el-tooltip>-->
      <el-form-item>
        <!-- 密码图标 -->
        <span class="svg-container">
            <i class="el-icon-key"></i>
        </span>
        <!-- 密码输入框 -->
        <el-input
            v-model="password"
            type="password"
            placeholder="Password"
            name="password"
        />
        <!-- 这是显示密码图标?目前没有效果 -->
        <span class="show-pwd">
            <svg-icon icon-class="password" />
        </span>
        <!-- 目前只是装装样子 -->
        <i class="el-icon-view"></i>


      </el-form-item>
      <!--      </el-tooltip>-->
      <div>


      </div>
      <div class="mb-2 flex text-sm">
        <el-checkbox class="remembered" v-model="remembered" label="十天免登录" size="large" />
        <a href="#" class="forget-pwd">忘记密码?</a><br/>
      </div>


      <!--      <input type="checkbox" class="select-user-type" name="user-type" value="stu">学生
            <input type="checkbox" class="select-user-type" name="user-type" value="staff">教工
            <input type="checkbox" class="select-user-type" name="user-type" value="uroot">管理员
            -->


      <!-- 登录按钮 -->
      <el-button
          type="primary"
          style="width: 48%; margin-bottom: 30px"
          @click="handleSubmit"
      >登录</el-button
      >
      <el-button
          class="user-register"
          type="primary"
          style="width: 48%; margin-bottom: 30px"
          @click="handleSubmit"
      >注册</el-button
      >
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  beforeMount() {
    this.$store.commit("logout");
  },
  methods: {
    handleSubmit() {
      const { username, password } = this;
      if (username && password) {
        this.$store
            .dispatch("login", {
              username: username,
              password: password,
            })
            .catch(() => {
              this.$message({
                message: " 用户名或密码错误",
                type: "warnning",
              });
            });
      }
    },
  },
};
</script>



<!-- 这个style是修改文本框的 -->
<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */
/* 1.完善在Chrome浏览器时登陆界面的input标签 使用记住密码之后颜色和背景不一致;
  2.目前的rgb值是 #2d3a4b 修改的rgb值是 #283443;
  3.修复光标使用Chrome记录的账号之后变黑色;
  4.移除 .title-container .title 重复的font-weight: 400;
*/

$bg: #fff;
$light_gray: #fff;
$light_black: #000000;
$cursor: #000000;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 9px 10px 12px 15px;
      color: $light_black;
      --el-input-placeholder-color: #424242;
      height: 47px;
      caret-color: $cursor; // 插入光标的颜色

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    padding: 0 40px 0 0px;
    border: 1px solid rgba(103, 76, 76, 0.1); // 输入框边框线条
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #111111;
  }

  //.el-button {
  //  --el-button-background-color: #9b0d14;
  //  --el-button-hover-color: #832f1f;
  //  --el-button-active-background-color: #832f1f;
  //}
}
</style>

<style lang="scss" scoped>
:root {
  --el-color-primary: #9b0d14;
}
//$bg: #2d3a4b;
$bg: #ffffff;
$dark_gray: #363232;
$light_gray: #eee;
$light_red: #9b0d14;
$dark_red: #832f1f;

// 总的样式
.login-container {
  min-height: 100% !important;
  width: 100%;

  //background-color: $bg;
  background: url("/indexbg.jpg");
  /* 背景图垂直、水平均居中 */
  background-position: center center;
  /* 背景图不平铺 */
  background-repeat: no-repeat;
  /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
  background-attachment: fixed;
  /* 让背景图基于容器大小伸缩 */
  background-size: cover;
  /* 设置背景颜色，背景图加载过程中会显示背景色 */
  background-color: #464646;

  overflow: hidden;

  .logo {
    float: left;
    margin-left: 50px;
    width: 100%;
    height: 148px;
  }
  .sdu-logo {
    float: left;
    margin: 0;
    width: 243px;
    height: 148px;
    background: url(/SDUlogo.png) no-repeat 0 0;
    background-size: 100%;
  }
  .logo .line {
    height: 58px;
    border-left: 1px solid #fff;
    float: left;
    width: 20px;
    margin: 45px 0 0 0px;
  }
  .logo .title {
    float: left;
    font-size: 28px;
    color: #fff;
    margin-top: 50px;
  }

  // 整个表格的样式
  .login-form {
    background: #ffffff;
    background: rgb(255,255,255,.7);
    float: right;
    //position: fixed;
    //top:50%;
    //right:10%;
    //边框圆角
    border-radius:25px;
    //阴影 左右 上下 虚实 颜色
    box-shadow: 5px 5px 25px #797979;
    //width: 520px;
    width: 500px;
    max-width: 100%;
    //padding: 160px 35px 0;
    padding: 40px 35px 0;
    margin: 200px 200px;
    overflow: hidden;
  }

  // 用户类型选择器
  .el-radio-group {
    margin-bottom: 22px;
    //border: 1px solid rgba(103, 76, 76, 0.1); // 输入框边框线条
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #111111;
  }
  .el-radio-button {
    border: -1px solid rgba(103, 76, 76, 0.1); // 输入框边框线条
  }

  // 这是啥小提示的样式?哪里用到了?
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  // 图标的样式
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  // 标题容器样式
  .title-container {
    position: relative;
    // 标题h3文本样式
    .title {
      font-size: 28px;
      color: $light_red;
      //margin: 0px auto 40px auto;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
  // 显示密码的图标样式
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  // 十天免登录样式
  .remembered {
    position: relative;
    left: -156px;
    color: #343434;
    font-weight: 600;
  }

  // 忘记密码样式
  .forget-pwd {
    position: relative;
    left: 150px;
    margin-bottom: 1000px;
    color: #343434;
    font-weight: 600;
    font-size: 14px;
    text-decoration: none; /*下划线*/
  }
  .forget-pwd:hover {
    color: #9b0d14;
  }



  // 这是什么????跟下面的有关
  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>
