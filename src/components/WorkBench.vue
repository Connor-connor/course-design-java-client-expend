<template>
  <div class="navi">
    <div class="all-list">

    </div>
  </div>
</template>

<script>
export default {
  name: "WorkBench",
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
.navi {
  position: fixed;
  left: 260px;
  top: 60px;
  width: 100%;
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
