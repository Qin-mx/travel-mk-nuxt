<template>
    <div>
      <!-- 头部 -->
        <header-com></header-com>
        <!-- 轮播图 -->
        <header-swiper :swiperSlides="swiperSlides"></header-swiper>
        <!-- 分类导航 -->
        <nav-icon :navList="iconList"></nav-icon>
        <!-- 定位失败 -->
        <ul class="list-con">
          <li class="item">
            <i class="iconfont icon-htmal5icon14"></i>定位失败
          </li>
          <li class="item">
            <i class="iconfont icon-wanggediqiu"></i>玩水季
          </li>
        </ul>
        <!-- 人气榜单 -->
        <hot-listmap :hotListmap="hotListmap"></hot-listmap>
        <!-- 猜你喜欢 -->
        <guess-like :LikeList="LikeList"></guess-like>
        <!-- 周末去哪 -->
        <weekend-list :weekendList="weekendList"></weekend-list>
    </div>
</template>

<script>
import HeaderCom from '~/components/HomePage/HeaderCom'
import HeaderSwiper from '~/components/swiper'
import NavIcon from '~/components/navIcon'
import HotListmap from '~/components/HomePage/HotListmap'
import GuessLike from '~/components/HomePage/GuessLike'
import WeekendList from '~/components/HomePage/WeekendList'
import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
  name: 'homepage',
  components: {
    HeaderCom,
    HeaderSwiper,
    HotListmap,
    GuessLike,
    WeekendList,
    NavIcon
  },
  data () {
    return {
      key: 'value',
      swiperSlides: [],
      iconList: [],
      weekendList: [],
      LikeList: [],
      hotListmap: [],
      lastCity: '',
      newCity: '',
    }
  },
  computed: {
    ...mapGetters([
      'city'
    ])
  },
  mounted () {
   // 保存
    if(localStorage.city){
      this.newCity = localStorage.city
    }else{
      this.newCity = this.city
    }

    this.lastCity = this.newCity
    this.getList()
  },
  methods: {
    getList () {
      // let url = process.env.NODE_ENV === 'development' ? '/api/' : 'https://api.myjson.com/bins/'
      let url = 'https://api.myjson.com/bins/'
      axios.get(url + '19xqqw?city=' + this.city).then(res => {
        if (res.data.data && res.data.ret) {
          this.swiperSlides = res.data.data.swiperSlides
          this.iconList = res.data.data.iconList
          this.weekendList = res.data.data.weekendList
          this.LikeList = res.data.data.LikeList
          this.hotListmap = res.data.data.hotListmap
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.list-con{
  border-top: 1px solid#f1f1f1;
  display: flex;
  flex-direction: row;
  align-items: center;
  .item{
    width: 100%;
    height: 0.98rem;
    line-height: 0.98rem;
    text-align: center;
    &:nth-child(1){
      border-right:1px solid#f1f1f1;
    }
    .iconfont{
      font-size: 0.32rem;
      color: rgb(167, 161, 161);
    }
  }
}
</style>
