module.exports = {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: 'Meta description' },
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700,800|Noto+Sans+KR:400,500,700&amp;subset=korean' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css',
        integrity: 'sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr',
        crossorigin: 'anonymous',
      },
    ]
  },
  css: [
    '~assets/bootstrap.min.css',
    // '~assets/all.css',
    '~assets/clean-blog.css',
  ],
  plugins: [ '~plugins/cookie', '~plugins/moment' ],
  env: {
    baseURLClient: process.env.NODE_ENV == 'development'  ? `http://localhost:3010` : `http://125.178.219.22:9010`,
    baseURLServer: process.env.NODE_ENV == 'development'  ? `http://localhost:3010` : `http://localhost:9010`,
  },
}
