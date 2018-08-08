<template>
    <div class="nav__icons">
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div  class="swiper-slide" v-for="(page,index) in pages" :key="index">
                <div class="icon" v-for="item in page" :key="item.id">
                    <a class="imgbox">
                        <img :src="item.imgUrl" :alt="item.desc">
                    </a>
                    <span>{{item.desc}}</span>
                </div>
            </div>
          </div>
            <div class="swiper-pagination swiper-pagination-bullets"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NavIcon',
  props: {
    navList: {
      type: Array
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          bulletElement: 'li'
        },
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.navList.forEach((item, index) => {
        const page = Math.floor(index / 8) // 设置下标
        if (!pages[page]) { // 不存在就为空
          pages[page] = [] 
        }
        pages[page].push(item) // 當前頁
      })
      return pages
    }
  }
}
</script>
<style lang="scss">
    @import '~assets/styles/mixins.scss';
    .swiper-pagination-bullet-active {
      opacity: 1;
      background: rgba(255,255,255,1);
    }
    .swiper-pagination-bullet{
      background: #aba3a3
    }
    .nav__icons .swiper-container {
        height: 3.9rem;
        margin-top: 0.1rem;
        .swiper-slide{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }
        .icon{
            width: 25%;
            height: 50%;
            overflow: hidden;
            box-sizing: border-box;
            .imgbox{
                display: block;
                margin: 0.2rem auto;
                width: 1.1rem;
                height: 1.1rem;
                margin-bottom:0.1rem;
                img{
                    width: 1.1rem;
                    height: 1.1rem;
                }
            }
            span{
                display: block;
                text-align: center;
                line-height: 0.44rem;
                @include ellipsis;
            }
        }
    }
</style>
