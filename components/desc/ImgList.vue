<template>
    <div class="show__img" @click="closeImgList">
        <div v-swiper:mySwiper="swiperOption" class="show__img-wrapper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="slide in swiperSlides" :key="slide.id">
              <img :src="slide.imgUrl">
            </div>
          </div>
            <div class="swiper-pagination" slot="pagination"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ImgList',
  props: {
    swiperSlides: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        spaceBetween: 10,
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    closeImgList () {
      this.$emit('closeImgList', false)
    }
  }
}
</script>

<style scoped lang="scss">
.show__img{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;
    display: flex;
    flex-direction: column;
    justify-content: center ;
}
.show__img-wrapper{
    width: 100%;
    overflow: inherit;
    img{
        width: 100%;
    }

}

</style>
<style lang="scss">
.show__img-wrapper{
   .swiper-wrapper{
        align-items:center;
    }
    .swiper-pagination{
        color: #fff;
        font-size: 0.24rem;
        position: fixed;
        bottom: 12px;
        left: 0;
    }
}

</style>
