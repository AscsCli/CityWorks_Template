<template>
    <div>
        <rk-section :model="'重点建筑'">
            <recursion :model="lists" :fly="flyToObject"></recursion>
        </rk-section>
    </div>
</template>
<script>

  export default {
    data() {
      return {
        close: '../../static/images/close.png',
        lists: [],
        showOfList: true
      }
    },
    methods: {
      flyToObject(item) {

      }
    }
  }
</script>