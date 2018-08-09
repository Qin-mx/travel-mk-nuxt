module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'travel-mk-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '模仿去哪网' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#41B883' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    postcss: [
      require('postcss-nested')(),
      require('postcss-responsive-type')(),
      require('postcss-hexrgba')(),
      require('autoprefixer')({
        browsers: ['last 3 versions']
      })
    ],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    loaders:[
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1KB
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1 KB
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ],
  },
  css:[
    '~assets/styles/reset.css',
    '~assets/styles/border.css',
    '~static/iconfont/iconfont.css',
    'swiper/dist/css/swiper.css'
  ],
  vendor: ['vuex','axios','~/plugins/vue-awesome-swiper.js'],
  plugins: [
    { src: '~/plugins/vue-awesome-swiper.js', ssr: false },
  ],
}

