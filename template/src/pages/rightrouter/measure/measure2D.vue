<template>
    <div>
        <span>测试</span>
    </div>
</template>
<script>
  export default {
    components: {},
    data() {
      return {}
    },
    mounted(){
      window.$apis.getBuildingList().then(val => {
            console.log("重点建筑");
            console.log(val.data.content);
      });
    }
  }
</script>