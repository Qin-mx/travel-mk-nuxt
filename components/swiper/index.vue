<template>
    <div>
        <div v-swiper:mySwiper="swiperOption" class="wrapper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="slide in swiperSlides" :key="slide.id">
              <img :src="slide.imgUrl" :alt="slide.title">
            </div>
          </div>
          <div class="swiper-pagination swiper-pagination-bullets"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperSlides: {
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
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        observer: true,
        observeParents: true
      }
    }
  },
  mounted () {
    
  }
}
</script>
<style lang="scss" scoped>

 img{
   width: 100%;
 }
</style>

<style lang="scss">
 .wrapper{
   width: 100%;
   overflow: hidden;
   height:0;
   padding-bottom:26.6%;
   .swiper-pagination-bullet-active{
    opacity: 1;
    background: rgba(255,255,255,1);
  }
  .swiper-pagination-bullet{
    background: rgb(255,255,255)
  }
 }
</style>
