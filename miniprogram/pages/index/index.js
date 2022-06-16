// index.js
const { envList } = require('../../envList.js');
const db = wx.cloud.database()
Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      // path: 'page/component/pages/swiper/swiper'
    }
  },
  data: {
    current: 'index',
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500
  },

  onLoad: function (options) {
  
  },
  handleChange ({ detail }) {  // 底部切换
    console.log(detail)
    this.setData({
        current: detail.key
    });
    wx.reLaunch({
      url: `../${detail.key}/${detail.key}`
    })
},
toMorePage(e){
  console.log(e)
},
toYuYuePage(e){
  wx.navigateTo({
    url: '../inputUser/inputUser',
  })
},
});
