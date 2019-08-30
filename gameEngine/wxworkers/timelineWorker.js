var timelineWorkerID = -1;//计时器的ID，用于释放计时器
var timeOffset = 5;//计时器间隔
var enterframeObj = { msg: "enterFrame" };

worker.onMessage((res)=>{
  let cmd = res.msg || "";
  if (cmd == "startAnimationFrame"){
    //开始帧频计时器
    if (timelineWorkerID == -1) {
      //回执第一条帧频信息
      worker.postMessage(enterframeObj);

      //循环回执之后的帧频信息
      timelineWorkerID = setInterval(() => {
        worker.postMessage(enterframeObj);
      }, timeOffset);
    }
  } else if (cmd == "stopAnimationFrame"){
    //停止帧频计时器
    if (timelineWorkerID != -1) {
      clearInterval(timelineWorkerID);
    }
    timelineWorkerID = -1;
  }
  
})