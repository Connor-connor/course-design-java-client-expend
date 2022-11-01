<template>
  <div class="navi">
<!--    <div class="all-list">-->

<!--
    <div class="shell">
&lt;!&ndash;      <a href="#" class="box"><i class="el-icon-s-unfold" aria-hidden="true"></i><span>列表</span></a>&ndash;&gt;
      <a href="#" class="box"><i class="el-icon-s-management" aria-hidden="true"></i><span>课程中心</span></a>
      <a href="#" class="box"><span>1</span></a>
      <a href="#" class="box"><span>1</span></a>
      <a href="#" class="box"><span>1</span></a>
      <a href="#" class="box"><span>1</span></a>
      <a href="#" class="box"><i class="el-icon-s-flag" aria-hidden="true"></i><span>综合实践</span></a>
      <a href="#" class="box"><span>1</span></a>
      <a href="#" class="box"><span>1</span></a>
      <a href="#" class="box"><span>1</span></a>
      <a href="#" class="box"><span>1</span></a>
      <a href="#" class="box"><i class="el-icon-s-custom" aria-hidden="true"></i><span>个人信息</span></a>
      <a href="#" class="box"><span>1</span></a>
      <a href="#" class="box"><span>1</span></a>
      <a href="#" class="box"><span>1</span></a>
      <a href="#" class="box"><span>1</span></a>
&lt;!&ndash;      <a href="#" class="box"><i class="fa fa-picture-o" aria-hidden="true"></i><span>picture</span></a>
      <a href="#" class="box"><i class="fa fa-qrcode" aria-hidden="true"></i><span>QR_code</span></a>
      <a href="#" class="box"><i class="fa fa-address-card" aria-hidden="true"></i><span>authentication</span></a>
      <a href="#" class="box"><i class="fa fa-sign-out" aria-hidden="true"></i><span>cancellation</span></a>&ndash;&gt;
    </div>
-->

      <el-row class="tac">
        <el-col :span="30">
          <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#9b0d14"
              text-color="#e3e3e3"
              active-text-color="#ffd04b">

            <el-submenu index="1">
              <template v-slot:title>
                <i class="el-icon-s-management"></i>
                <span class="list-title">课程中心</span>
              </template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-3">选项3</el-menu-item>
                <el-menu-item index="1-4">选项4</el-menu-item>

            </el-submenu>
            <el-submenu index="2">
              <template v-slot:title>
                <i class="el-icon-s-flag"></i>
                <span class="list-title">综合实践</span>
              </template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
              <el-menu-item index="2-4">选项4</el-menu-item>
            </el-submenu>

            <el-submenu index="3">
              <template v-slot:title>
                <i class="el-icon-s-custom"></i>
                <span class="list-title">个人信息</span>
              </template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
              <el-menu-item index="3-3">选项3</el-menu-item>
              <el-menu-item index="3-4">选项4</el-menu-item>
            </el-submenu>

          </el-menu>
        </el-col>
      </el-row>


<!--        </div>-->
  </div>
</template>

<script>
export default {
  name: "NaviLeft",
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
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
};
</script>

<style lang="scss" scoped>

.navi {
  position: relative;
  left: 5px;
  top: 0px;
  width: 240px;
  height: 100%;
  border-radius:25px 0 0 25px;
  background-color: #9b0d14;
  box-shadow: -5px 5px 25px #797979;
  //border-right: 4px solid #c80201;
  overflow:auto
}
//定义了滚动条整体的样式
.navi::-webkit-scrollbar {
  width: 8px;
  //height: 4px;
}
//定义了内滚动条部分
.navi::-webkit-scrollbar-thumb {
  border-radius: 10px;
  //-webkit-box-shadow: inset 0 0 5px rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.2);
}
//定义了滚动条轨道
.navi::-webkit-scrollbar-track {
  //-webkit-box-shadow: inset 0 0 5px rgba(255,255,255,0.2);
  border-radius: 10px;
  background: rgba(255,255,255,0.1);
}

.el-col {
  position: absolute;
  left: 20px;
  top: 25px;
  width: 200px;
  border-radius: 25px;
}
.el-menu {
  border-right: 0;
  //border-radius: 25px;
}
.el-menu i {
  font-size: 18px;
  color: #e3e3e3;
}
/*el-icon-arrow-down {
  font-weight: bold;
}*/
.list-title {
  margin-right: 40px;
  font-weight: 700;
  font-size: 18px;
}
.el-menu-item {
  font-size: 18px;
}

/*
.el-menu-item {
  border-radius: 25px;
  border: 2px solid #00b1e7;
}
.el-submenu .list-title2{
  --el-border-radius: 25px;
  border-radius: 25px;
  border: 2px solid #f67272;
}
.el-submenu .title {
  --el-border-radius: 25px;
  border-radius: 25px;
  border: 2px solid #e79600;
}
*/

/*
*{
  padding: 0;
  margin: 0;
  text-decoration: none;
}
!*导航栏整体位置*!
body{
  display: flex;
  height: 100vh;
  align-items: center;
}
!*导航栏整体大小，背景色*!
.shell{
  position: relative;
  top: 100px;

  width: 50px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #9b0d14;
  border-radius: 0 10px 10px 0px;
  !*导航变宽时的过度时间*!
  transition: .3s;
}
.box{
  !*变成块级元素*!
  display: block;
  height: 15%;
  width: 85%;
  margin: 9px;
  border-radius: 5px;
  position: relative;
  color: black;
}
img{
  width: 30px;
  height: 30px;
  position: absolute;
  margin: 7px 0 0 7px;
}
.shell a i{
  font-size: 27px;
  position: absolute;
  margin: 14px 0 0 7px;
  color: black;
}*/
/*!*在导航第一个和第五个选项下加横线*!
.box:nth-child(1)::before,.box:nth-child(5)::before{
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  background-color: rgb(55,65,81);
  position: absolute;
  bottom: -10px;
}
!*导航文字设置*!*/
/*.box span{
  position: relative;
  top: 14px;
  left: 80px;
  font-size: 20px;
  !*导航收缩下文字透明不显示*!
  opacity: 0;
}
!*导航栏变宽*!
.shell:hover{
  width: 270px;
}
!*当鼠标移到某一项时，背景变色*!
.box:hover{
  background-color: rgb(55,65,81);
  color: #fff;
}
.box:hover .fa{
  color: #fff;
}
!*文字显现*!
.shell:hover span{
  opacity: 1;
}*/

/*.navi .all-list {
  width: 220px;
  height: 100px;
  position: absolute;
  left:10px;
  top:10px;
  background-color: #9b0d14;
  border-radius: 20px;
}*/
/*.all-list {
  position: relative;
  height: 100%;
  width: 150px;
  border: 2px solid #7700e7;
}*/


</style>
