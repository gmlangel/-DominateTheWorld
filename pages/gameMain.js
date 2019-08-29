// pages/gameMain.js
//导入游戏引擎
const engine = require("../gameEngine/GMLCore.js")
const gm = require("../gameEngine/AppDelegate.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*top:0,
    left: 0,
    width:100,
    height:100,
    scale:1 用于解决canvas画图模糊的问题，但是我发现在真机上只要设置context.scale后并不模糊*/
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this;
    //获取系统信息
    wx.getSystemInfo({
      success: function (res) { 
        self.sysInfo = res;
        self.gWidth = res.windowWidth;
        self.gHeight = res.windowHeight;
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //获取canvasContext
    this.gameCanvasID = "gameCanvas";
    this.canvasContext = wx.createCanvasContext(this.gameCanvasID, this);
    let self = this;
    if(self.checkCanStart()){
      self.startGame();//直接启动
    }else{
      let timeID = setInterval(() => {
        //每隔100ms检测一次
        if (self.checkCanStart()) {
          self.startGame();
          clearInterval(timeID);
        }
      }, 100);
    }
    console.log(this.sysInfo);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 当画布被按下
   * 
  */
  onCanvasTouchBegin: function(e){
    console.log("===canVasDown",e)
    if (wx.ongTouchBegin)
      wx.ongTouchBegin(e);//将事件派发到游戏引擎中
  },

  /**
     * 当手指在画布被抬起
     * 
    */
  onCanvasTouchEnd: function (e) {
    console.log("===canVasEnd",e)
    if (wx.ongTouchEnd)
      wx.ongTouchEnd(e);
  },

  /**
   * 当手指在画布上移动
   * 
  */
  onCanvasTouchMove: function (e) {
    console.log("===canVasMove",e)
    if (wx.ongTouchMove)
      wx.ongTouchMove(e);
  },

  /**
   * 当画布上取消了手指操作
   * 
  */
  onCanvasTouchCancel: function (e) {
    console.log("===canVasCancel")
    if (wx.ongTouchCancel)
      wx.ongTouchCancel(e);
  },
  /**
   * 开始游戏
  */
  startGame:function(){
    // //根据屏幕比例 重新计算canvas的样式，用于解决canvas画图模糊的问题，但是我发现在真机上只要设置context.scale后并不模糊
    // let pixlRatio = this.sysInfo.pixelRatio;
    // let w = this.gWidth;
    // let h = this.gHeight;
    // let s = 1.0 / pixlRatio;
    // this.setData({
    //   width: 100 * pixlRatio,
    //   height: 100 * pixlRatio,
    //   top: h * (s - 1),
    //   left: w * (s - 1),
    //   scale:s
    // })
    // 
    //开始游戏
    gm.AppDelegate.instance().start(this.canvasContext,this.sysInfo);
  },
  /*
  检查是否可以开始
  */
  checkCanStart:function(){
    return this.canvasContext && this.sysInfo;
  }
})