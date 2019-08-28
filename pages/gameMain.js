// pages/gameMain.js
//导入游戏引擎
const engine = require("../gameEngine/GMLCore.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
    this.context = wx.createCanvasContext(this.gameCanvasID, this);
    this.context.setFillStyle("#ff0000");
    this.context.fillRect(0,0,100,100);
    this.context.draw();
    console.log(this.sysInfo,this.gWidth,this.gHeight);
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
    console.log("===canVasDown")
  },

  /**
     * 当手指在画布被抬起
     * 
    */
  onCanvasTouchEnd: function (e) {
    console.log("===canVasEnd")
  },

  /**
   * 当手指在画布上移动
   * 
  */
  onCanvasTouchMove: function (e) {
    console.log("===canVasMove")
  },

  /**
   * 当画布上取消了手指操作
   * 
  */
  onCanvasTouchCancel: function (e) {
    console.log("===canVasCancel")
  },

})