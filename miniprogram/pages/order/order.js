Page({

    /**
     * 页面的初始数据
     */
    data: {
      orderList:[],
    },
    getList:function(){
     
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      let that = this
      let isTime = 600000
      wx.showModal({
        title: '商家验证',
        editable:true,
        placeholderText: '请输入商家密码',
        success (res) {
          if (res.confirm) {
            if(res.content=='660098'){
              wx.showToast({
                title: '成功',
                icon: 'success',
                duration: 2000,
                success(res){
                  let db = wx.cloud.database() //设置数据库
                  let userCollection = db.collection('testTable') //单引号里为刚刚新建的集合名
                  userCollection.where({
                    //where其实是向集合里查询是否有里面这对数据，如果有就返回这条数据记录
                    //一般是使用openid（一个用户只有一个openid，具有唯一性，方便查询操作）
                    //但目前获取openid需要使用云函数，所以这里就不细讲了，我这里使用每条记录都带有的_id来进行查询
                    _id: that.data.dataId 
                  }).get().then(res => {
                    console.log('数据查询成功',res)//将返回值存到res里
                    that.setData({
                      //将查询到的数据记录里的number的值存放到data.number
                      orderList: res.data
                    })
                    console.log(that.data.orderList)
                  }).catch(err => {
                    console.log('查询失败',err)//失败提示错误信息
                  })
                }
              })
            }else{
              wx.showToast({
                title: '这是商家查看预约单的喔~',
                icon: 'error',
                duration: 2000,
              })
             setTimeout(()=>{
               wx.navigateBack({
                  delta: 1
                }) 
             },2000)
            }
          } else if (res.cancel) {
            wx.navigateBack({
              delta: 1
            }) 
          }
        }
      })

     
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
    // 跳转到我的收藏
    goMycollection() {
      
    },

    // 清除数据退出
    exit() {
      
    },
})