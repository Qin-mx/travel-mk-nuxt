<template>
    <div>
        <h2>news-content [{{$route.params.id}}]</h2>
        <nuxt-link :to="{name: 'news'}"> 返回上一级</nuxt-link>
        <nuxt-link :to="{name: 'index'}"> 返回首页</nuxt-link>
    </div>
</template>
<script>
export default {
  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  data(){
      return {
          title: this.$route.params.title
      }
  },
//   独立设置head的信息
  head(){
      return {
          title: this.title ?this.title :'新闻',
          meta: [
                { hid: 'description', name: 'description', content: 'My custom description' }
            ]
      }
  }
}
</script>