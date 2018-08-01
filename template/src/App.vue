<template>
    <router-view></router-view>
</template>
<script>

  import {mapActions,mapGetters} from 'vuex';
  export default {
    methods: {
      ...mapActions({
        setMapType: 'setMapType',
        setAppTitle: 'setAppTitle',
        set2DMapStatus: 'set2DMapStatus',
        set3DMapStatus: 'set3DMapStatus',

      }),
    },
    beforeCreate(){
      window.$apis.getMapConfig().then(val => {
        let projectConfig = val.data;
        this.title = projectConfig.title;

        this.setAppTitle(projectConfig.title);
        this.set2DMapStatus(projectConfig.loadMap2d);
        this.set3DMapStatus(projectConfig.loadMap3d);

        if(projectConfig.loadMap2d){
          this.setMapType('2d');
        }
        if(projectConfig.loadMap3d){
          this.setMapType('3d');
        }

        if(projectConfig.firstLoad == '2d'){
          this.setMapType('2d');
        }
        console.log("version : ", projectConfig.version);
      });
    },
  }
</script>

