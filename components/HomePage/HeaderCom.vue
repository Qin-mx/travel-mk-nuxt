<template>
    <div>
        <header class="header">
            <nuxt-link to="/">
                <div class="header-left">
                    <i class="iconfont icon-jiantou"></i>
                </div>
            </nuxt-link>
            <div class="header-content">
                <i class="iconfont icon-sousuo"></i>
                <span>输入城市/景点/游玩主题</span>
            </div>
            <div class="header-right">
                <nuxt-link to="/CityPage">
                    <span>{{newCity}}</span>
                    <i class="iconfont icon-sanjiao"></i>
                </nuxt-link>
            </div>
        </header>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
        newCity: '',
    }
  },
  computed: {
    ...mapState([
      'city'
    ])
  },
mounted () {
    if(localStorage.city){
      this.newCity = localStorage.city
    }else{
      this.newCity = this.city
    }
  },
}
</script>

<style scoped lang="scss">
    @import '~assets/styles/theme.scss';
    .header{
        display: flex;
        flex-direction: row;
        height: $headerheight;
        line-height: $headerheight;
        background: $bg;
        color: #fff;
        .icon{
            font-size:12px;
        }
        .header-left{
            width: 0.4rem;
            padding:0 0.2rem;
            text-align: center;
            .icon-jiantou{
                display: inline-block;
                transform: scale(1.1) rotate(180deg);
            }
        }
        .header-content{
            flex:1;
            margin:0.14rem 0;
            width: 100%;
            line-height: 0.60rem;
            border-radius: 2px;
            background: #fff;
            span{
                color: #bfc3bf;
            }
            .icon-sousuo{
                display: inline-block;
                transform: scale(1.2);
                color: #bfc3bf;
                margin: 0 0.04rem 0 0.06rem;
                font-weight: bold;
            }
        }
        .header-right{
            position: relative;
            max-width: 1.82rem;
            span{
                display: block;
                padding:0 0.5rem 0 0.2rem
            }
            .icon-sanjiao{
                display: inline-block;
                transform: scale(0.5);
                position: absolute;
                right: 0;
                top: 0;
            }
        }
    }
</style>
