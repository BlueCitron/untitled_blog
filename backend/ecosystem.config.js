module.exports = {
  apps : [{
    name: 'BLOG_BND',
    script: 'index.js',
    instances: 1,
    autorestart: false,
    watch: false,
    max_memory_restart: '500M',
    env: {
      NODE_ENV: 'development'
      PORT: 3010,
    },
    env_production: {
      NODE_ENV: 'production'
      PORT: 9010,
    }
  }],
};
