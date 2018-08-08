<template>
    <div>
        <h2>this is news page</h2>
        <h3>{{$route.params.newsId}}</h3>
        <p>
            <a href="news/789">789</a>
        </p>
        <nuxt-link :to="{name:'news-id',params:{id:123}}">123</nuxt-link>
        <nuxt-link :to="{name:'news-id',params:{id:456,title:'这是新闻'}}">456</nuxt-link>
    </div>
</template>
<script>
import axios from 'axios'
export default{
    async asyncData(){
      let {data}=await axios.get('https://api.myjson.com/bins/xwkm0')
      console.log(data)
      return {info: data}
    }
}
</script>