/*主游戏入口*/
const gEngine = require("GMLCore.js");
class AppDelegate{
  static instance(){
    if(!!wx.app == false)
      wx.app = new AppDelegate();
    return wx.app;
  }
  constructor(){

  }

  /**
   * 启动游戏
   * @param canvasContext 画布上下文Canvas的2D context
   * @param sysInfo 系统信息
  */
  start(canvasContext,sysInfo){
    if(!!this.isStarted){
      return;
    }
    this.isStarted = true;
    //启动操作
    console.log("游戏开始");

    //测试用
    //this.canvasContext.scale(0.5, 0.5);
    let temp = sysInfo.pixelRatio;
    let s = 1.0 / temp;
    canvasContext.setFillStyle("#ff0000");
    canvasContext.fillRect(0, 0, sysInfo.windowWidth * s, sysInfo.windowHeight * s);
    
    canvasContext.setStrokeStyle("#000000");
    canvasContext.strokeText("这是侧是是是侧是是是侧是是是侧是是是侧是是是侧是是是侧是是是侧是是是侧是是是",10,5);
    
    canvasContext.drawImage("../assets/NewDragon.png", 0, 0, 300, 300, 0, 0, 300*s, 300*s);

    canvasContext.draw();
    //初始化系统类
    wx.sysInfo = sysInfo;
    //初始化场景
    let bs = new gEngine.BaseScene(canvasContext, sysInfo.windowWidth, sysInfo.windowHeight);
    console.log(bs.width,bs.height);
  }

  /*
  *停止游戏
  */
  stop(){
    if (!!this.isStarted) {
      this.isStarted = false;
      //停止操作
    }else{
      return;
    }
  }
}

module.exports = {
  "AppDelegate": AppDelegate
}