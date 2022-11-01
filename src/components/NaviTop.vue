<template>
  <div class="toposition">


  <div class="navi">
    <div class="sdu-logo">
<!--      <a class="sdu-logo" href="javascript:"></a>-->
      <img src="SDUlogo-red.png" />
    </div>





    <el-row class="user-name">
      <el-col :span="40">
        <el-dropdown>
          <span class="user-name-link">
            李浩鹏<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item :icon="Plus">个人信息</el-dropdown-item>
              <el-dropdown-item :icon="CirclePlusFilled">设置</el-dropdown-item>
              <el-dropdown-item :icon="CirclePlus">退出</el-dropdown-item>
<!--              <el-dropdown-item :icon="Check">Action 4</el-dropdown-item>
              <el-dropdown-item :icon="CircleCheck">Action 5</el-dropdown-item>-->
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-col>
    </el-row>
    <div class="user-logo">
      <img src="user-logo.jpg"/>
    </div>
    <div class="search-button">
      <form action="" class="search-bar">
        <input type="search" name="search" pattern=".*\S.*" required>
        <button class="search-btn" type="submit">
          <span>Search</span>
        </button>
      </form>
    </div>


    <!--    <el-menu class="header" mode="horizontal" router>
          <el-menu-item index="/" class="menu-item">Home</el-menu-item>
          <template v-for="(v, i) in listA" :key="i">
            <template v-if="v.children.length > 0">
              <el-submenu :index="i.toString()">
                <template #title>
                  <span class="menu-item">{{ v.title }}</span>
                </template>
                <template v-for="(item, j) in v.children" :key="j">
                  <el-menu-item class="menu-item-two" :index="'/' + item.name">{{
                    item.title
                  }}</el-menu-item>
                </template>
              </el-submenu>
            </template>
            <template v-else>
              <el-menu-item class="menu-item" :index="'/' + v.name">{{
                v.title
              }}</el-menu-item>
            </template>
          </template>
        </el-menu>-->
  </div>
  </div>
</template>

<script>
export default {
  name: "NaviTop",
  components: {},

  data() {
    return {
      listA: [
        {
          name: "BaseTable",
          title: "表格示例",
          children: [
            {
              name: "BaseTableOne",
              title: "表格示例1",
            },
            {
              name: "BaseTabletwo",
              title: "表格示例2",
            },
          ],
        },
        {
          name: "BaseForm",
          title: "表单示例",
          children: [],
        },
      ],
    };
  },
  methods: {},
};
</script>
<style scoped>
. {
  margin: 0;
  padding: 0;
}
.toposition {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 50px;
}
.navi {
  position: relative;
  width: 100%;
  height: 50px;
  border-bottom: 4px solid #c80201;
  background: rgb(255,255,255,.7);
  border-radius:0 0 15px 15px;
  box-shadow: 3px 3px 10px #797979;
  max-width: 100%;
  overflow: hidden;
}
.sdu-logo {
  float: left;
  width: 152px;
  height: 50px;
  margin: -2px 6px;
}
.sdu-logo img {
  max-width: 100%;
  max-height: 100%;
}

.user-logo {
  /*border: 1px solid #00b1e7;*/
  /*position: absolute;*/
  /*right: 90px;*/
  float: right;
  display: inline-block;
  width: 38px;
  height: 38px;
  margin: 5px 8px 0 -8px;
  /*padding: 10px 0;*/
}
.user-logo img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
}

.user-name {
  /*border: 1px solid #00b1e7;*/
  /*position: absolute;
  right: 20px;
  top: 15px;*/
  float: right;
  padding: 14px 20px 13px 0;
}

.user-name-link {
  cursor: pointer;
  color: #000000;
  font-weight: 700;
}
.el-icon-arrow-down {
  font-size: 12px;
  font-weight: 700;
  margin-left: 5px;
}

/*搜索按钮*/
.search-button {
  /*border: 1px solid #00b1e7;*/
  /*position: relative;
  right: 300px;
  top: -15px;*/
  float: right;
  width: 300px;
  margin: -17px 16px 10px 0;
}
* {
  border: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
:root {
  font-size: calc(16px + (24 - 16)*(100vw - 320px)/(1920 - 320));
}
body, button, input {
  font: .7em Hind, sans-serif; /*调整整体大小*/
  line-height: 1.5em;
}
body, input {
  color: #171717; /*闪烁光标颜色*/
}
body, .search-bar {
  display: flex;
}
body {
  background: #f1f1f1;
  height: 100vh;
}
.search-bar input,
.search-btn,
.search-btn:before,
.search-btn:after {
  transition: all 0.25s ease-out;
}
.search-bar input,
.search-btn {
  width: 3em;
  height: 3em;
}
.search-bar input:invalid:not(:focus),
.search-btn {
  cursor: pointer;
}
.search-bar,
.search-bar input:focus,
.search-bar input:valid  {
  width: 108%;
}
.search-bar input:focus,
.search-bar input:not(:focus) + .search-btn:focus {
  outline: transparent;
}
.search-bar {
  margin: auto;
  padding: 1.5em;
  justify-content: right; /*没展开前的放大镜在盒子里的水平位置*/
  max-width: 30em;
}
.search-bar input {
  background: transparent;
  border-radius: 1.5em;
  box-shadow: 0 0 0 0.4em #9b0d14 inset; /*放大镜上方圆形颜色*/
  padding: 0.75em;
  transform: translate(0.5em,0.5em) scale(0.5);
  transform-origin: 100% 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.search-bar input::-webkit-search-decoration {
  -webkit-appearance: none;
}
.search-bar input:focus,
.search-bar input:valid {
  background: #fff; /*搜索框原本背景色*/
  border-radius: 0.375em 0 0 0.375em;
  box-shadow: 0 0 0 0.1em #9b0d14 inset; /*搜索框边框颜色*/
  transform: scale(1);
}
.search-btn {
  background: #9b0d14; /*放大镜下方手柄颜色*/
  border-radius: 0 0.75em 0.75em 0 / 0 1.5em 1.5em 0;
  padding: 0.75em;
  position: relative;
  transform: translate(0.25em,0.25em) rotate(45deg) scale(0.25,0.125);
  transform-origin: 0 50%;
}
.search-btn:before,
.search-btn:after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
}
.search-btn:before {
  border-radius: 50%;
  box-shadow: 0 0 0 0.2em #f1f1f1 inset;
  top: 0.75em;
  left: 0.75em;
  width: 1.2em;
  height: 1.2em;
}
.search-btn:after {
  background: #f1f1f1;
  border-radius: 0 0.25em 0.25em 0;
  top: 51%;
  left: 51%;
  width: 0.75em;
  height: 0.25em;
  transform: translate(0.2em,0) rotate(45deg);
  transform-origin: 0 50%;
}
.search-btn span {
  display: inline-block;
  overflow: hidden;
  width: 1px;
  height: 1px;
}

/* Active state */
.search-bar input:focus + .search-btn,
.search-bar input:valid + .search-btn {
  background: #9b0d14; /*点开后搜索按钮背景色*/
  border-radius: 0 0.375em 0.375em 0;
  transform: scale(1);
}
.search-bar input:focus + .search-btn:before,
.search-bar input:focus + .search-btn:after,
.search-bar input:valid + .search-btn:before,
.search-bar input:valid + .search-btn:after {
  opacity: 1;
}
.search-bar input:focus + .search-btn:hover,
.search-bar input:valid + .search-btn:hover,
.search-bar input:valid:not(:focus) + .search-btn:focus {
  background: #9b0d14;
}
.search-bar input:focus + .search-btn:active,
.search-bar input:valid + .search-btn:active {
  transform: translateY(1px);
}

@media screen and (prefers-color-scheme: dark) {
  body, input {
    color: #f1f1f1;
  }
  body {
    background: #171717;
  }
  .search-bar input {
    box-shadow: 0 0 0 0.4em #f1f1f1 inset;
  }
  .search-bar input:focus,
  .search-bar input:valid {
    background: #3d3d3d;
    box-shadow: 0 0 0 0.1em #3d3d3d inset;
  }
  .search-btn {
    background: #f1f1f1;
  }
}
</style>
