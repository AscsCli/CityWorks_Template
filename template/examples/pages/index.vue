<template>
    <div class="example-ct">
        <div class="page-header">
            <div class="page-header__top">
                <h1 class="page-header__logo"><a href="#">文档</a></h1>
            </div>
        </div>
        <div class="mian-cont">
            <div class="page-container clearfix">
                <side :data="navConfig"></side>
                <div class="content">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import side from '../src/components/side-nav.vue'
  import navConfig from '../src/nav.config.json'

  export default {
    components: {
      side
    },
    data () {
      return {
        navConfig: navConfig,
        selectList: [{
          name: 1
        },
          {
            name: 2
          }
        ]
      }
    },
    methods: {
      beginTimeSelected (value) {
        this.beginTime = value.replace(' ', 'T')
      },
      handleSliderResult (value) {
        console.log(value)

      },
    }
  }
</script>

<style type="text/scss" lang="scss">
    section{height: 100%;}
    .example-ct {
        width: 100%;
        height: 100%;
        overflow: hidden;
        .component_ct {
            margin: 0.1rem;
            text-align: left;
            width: 2.3rem;
        }
        .page-header {
            position: fixed;
            top: 0;
            z-index: 1;
            width: 100%;
            background-color: #fbfbfb;
            -webkit-box-shadow: 0 0.01rem 0.04rem rgba(0, 0, 0, .1);
            box-shadow: 0 0.01rem 0.04rem rgba(0, 0, 0, .1);
        }
        .page-header__top {
            max-width: 14.4rem;
            margin: 0 auto;
            overflow: hidden;
            height: 0.6rem;

        }
        .page-header__logo > a {
            display: block;
            height: 0.4rem;
            line-height: 0.4rem;
            margin: 0.1rem 0 0 0;
            padding-left: 0.45rem;
            font-size: 0.25rem;
            font-family: monospace;
            color: #2c3e50;
        }
        .mian-cont {
            max-height: calc(100% - 1rem);
            height: calc(100% - 1rem);
            margin: 1rem 0.2rem 0;
            border: 0.01rem solid #f2f2f2;
            box-sizing: border-box;
            overflow: hidden;
        }
        .page-container {
            background-color: #fff;
            position: relative;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            width: 100%;
            height: 100%;
            max-width: 14.4rem;
            overflow: hidden;
            min-height: 0.8rem;
            margin: 0 auto;
            padding-right: 0;
        }
        .clearfix::before {
            display: table;
            content: "";
        }
        .content {
            box-sizing: border-box;
            flex: 1;
            padding: 0.4rem;
            height: 100%;
            max-height: 100%;
            overflow: auto;
        }
    }
</style>