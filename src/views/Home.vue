<template>
  <NaviTop/>
  <NaviLeft/>
  <WorkBench/>
  <!--  <div
      class="home"
      style="
        margin-top: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
      "
    >
      <el-button size="primary" class="deleteButton" @click="logout()"
        >退出登录</el-button
      >
    </div>-->
</template>

<script>
import NaviTop from "@/components/NaviTop";
import NaviLeft from "@/components/NaviLeft";
import WorkBench from "@/components/WorkBench";
import router from "@/router/index.js";
import {downloadPost} from "@/service/genServ.js";

export default {
  name: "Home",
  components: {
    NaviTop,
    NaviLeft,
    WorkBench,
  },
  methods: {
    logout() {
      this.$store.commit("logout");
      router.push("/login");
    },
    downPDF() {
      downloadPost(
          "http://localhost:9090/api/teach/printStudentIntroduce",
          "个人简历"
      );
    },
  },
};
</script>

<style>
body {
  background-color: #f6f6f6;
}
</style>