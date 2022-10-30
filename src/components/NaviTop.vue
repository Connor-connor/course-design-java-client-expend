<template>
  <div class="navi">
    <div class="sdu-logo">
<!--      <a class="sdu-logo" href="javascript:"></a>-->
      <img src="SDUlogo-red.png" />
    </div>


      <div class="user-logo">
        <img src="user-logo.jpg"/>
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
}
.sdu-logo img {
  max-width: 100%;
  max-height: 100%;
}

.user-logo {
  position: absolute;
  right: 90px;
  display: inline-block;
  width: 30px;
  height: 30px;
  padding: 10px 0;
}
.user-logo img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
}

.user-name {
  position: absolute;
  right: 20px;
  top: 15px;
}

.user-name-link {
  cursor: pointer;
  color: #000000;
  font-weight: 700;
}
.el-icon-arrow-down {
  font-size: 12px;
  font-weight: 700;
}


</style>
