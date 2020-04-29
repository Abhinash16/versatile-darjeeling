module.exports = {
    devServer: {
      proxy:{
        '/api': {
          target: 'https://on-track.in/',
          ws: true,
          changeOrigin: true
        },
      },
      proxy:{
        '/api': {
          target: 'https://api.msg91.com/',
          ws: true,
          changeOrigin: true
        },
      }
    }
  }