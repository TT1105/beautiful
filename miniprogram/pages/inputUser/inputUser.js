// pages/inputUser.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isChecked:false,
    actions3: [
      {
          name: '现金支付',
          color: '#2d8cf0',
      },
      {
          name: '取消'
      }
  ],
    current: 'indexMe',
    isSubmit:false,
    name:'',
    phone:'',
    address:'',
    beizhu:'',
    date: '',
    time: '',
  },
  setName(e){
    this.setData({
      name: e.detail.detail.value,
      })
  },
  setPhone(e){
    this.setData({
      phone: e.detail.detail.value,
      })
  },
  setAddress(e){
    this.setData({
      address: e.detail.detail.value,
      })
  },
  setBeiZhu(e){
    this.setData({
      beizhu: e.detail.detail.value,
      })
  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function(e) {
    this.setData({
      time: e.detail.value
    })
  },
  handleCloseOk () {
    const db = wx.cloud.database()
      // collection里面写创建集合名字
      db.collection("testTable").add({
      	// data 字段表示需新增的json数据
      	data:{
        name:this.data.name,
        phone:this.data.phone,
        address:this.data.address,
        date:this.data.date,
        time:this.data.time,
        beizhu:this.data.beizhu
      }
    }).then(res=>{
      wx.showToast({
        title: '成功预约',
        icon: 'success',
        duration: 2000,
        success(res){
          setTimeout(()=>{
             wx.navigateBack({
            delta: 1
          }) 
          },2000)
         
        }
      })
    });
    this.setData({
      isSubmit: false
    });
    
}, // 确认预约
  handleCloseErr () {
    this.setData({
      isSubmit: false
    });
}, // 取消预约
checkboxChange({detail}){
  console.log(detail)
  this.setData({
    isChecked : !this.data.isChecked
  })
},
  handleClick(){
    if(this.data.isChecked == true){
      if(this.data.name != ''&&this.data.phone != ''&&this.data.address != ''&&this.data.date != ''&&this.data.time != ''){
      this.setData({
      isSubmit: true
  });
    console.log(this.data.name,this.data.phone,this.data.address,this.data.time,this.data.date)
    }else{
      wx.showToast({
        title: '请完善信息',
        icon: 'error',
        duration: 2000
      })
    }
    }else {
      wx.showToast({
        title: '请先同意提交信息',
        icon: 'error',
        duration: 2000
      })
    }
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})