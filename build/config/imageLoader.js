module.exports = {
  gifsicle: {
    interlaced: true,
  },
  pngquant: {
    optimizationLevel: 7,
    progressive: true,
    quality: '65-90',
    speed: 4,
  },
  svgo:{
    plugins: [
      { removeViewBox: false },
      { removeEmptyAttrs: false },
    ]
  }
}

