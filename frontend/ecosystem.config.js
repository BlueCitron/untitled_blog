module.exports = {
  apps : [{
    name: 'BLOG_FNT',
    script: 'node_modules/nuxt-start/bin/nuxt-start.js',
    args: 'start',
    restart_delay: 5,
    instances: 1,
    autorestart: true,
    watch: [ '.nuxt' ],
    max_memory_restart: '500M',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production',
      HOST: '0.0.0.0',
      PORT: 9000,
    }
  }],
};
