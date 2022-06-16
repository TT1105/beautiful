var app = getApp();
import { formatTime } from "../../untils/until";
Page({

    /**
     * 页面的初始数据
     */
    data: {
        UserLogin: false,
        userInfo: null,
        Lv: '1'
    },
    // 一键拨号
    calling: function() {
      wx.makePhoneCall({
      phoneNumber: '15025391850',
      success: function() {
      console.log("拨打电话成功！")
      },
      fail: function() {
      console.log("拨打电话失败！")
      }
      })
      },
      // 我的订单
    goMycollection:function(){
      console.log(213)
      wx.navigateTo({
        url: '../order/order'
      })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
     
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        
    },
    
    //获取用户信息
    getUserProfile() {
    },

    // 清除数据退出
    exit() {
      
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
})