<template>
  <div class="navi">
    <div class="all-list">
        <el-row class="tac">
          <el-col :span="12">

            <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
            >
              <el-sub-menu index="1">
                <template #title>
                  <el-icon><location /></el-icon>
                  <span>课程中心</span>
                </template>
                <el-menu-item-group title="Group One">
                  <el-menu-item index="1-1">item one</el-menu-item>
                  <el-menu-item index="1-2">item two</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                  <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                  <template #title>item four</template>
                  <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-sub-menu>
              </el-sub-menu>

              <el-menu-item index="2">
                <el-icon><icon-menu /></el-icon>
                <span>综合实践</span>
              </el-menu-item>

              <el-menu-item index="3" disabled>
                <el-icon><document /></el-icon>
                <span>学工管理</span>
              </el-menu-item>

              <el-menu-item index="4">
                <el-icon><setting /></el-icon>
                <span>个人信息</span>
              </el-menu-item>

            </el-menu>
          </el-col>
        </el-row>

    </div>
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
  methods: {},
};
</script>
<!--<script lang="ts" setup>
  import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
  const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
  const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>-->


<style scoped>
.navi {
  position: fixed;
  left: 5px;
  top: 60px;
  width: 240px;
  height: 100%;
  border-radius:25px;
  box-shadow: 5px 5px 25px #797979;
  border-right: 4px solid #c80201;
}
.navi .all-list {
  width: 220px;
  height: 100px;
  position: absolute;
  left:10px;
  top:10px;
  background-color: #9b0d14;
  border-radius: 20px;
}
</style>
