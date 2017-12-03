import axios from 'axios'

export NetworkService



NetworkService = {

}
let domain = 'a'
NetworkService.getDomain = function () {
  return domain
}
NetworkService.print_log = true //  控制打印数据
let apiToUrl = {
    queryVolunteerPage : domain
  }

NetworkService.getUrl = function (apiName) {
  let url = apiToUrl[apiName]
  if(url){
    return url
  }else {
    console.log('没有找到对应的接口' + apiName)
  }
}
NetworkService.sendTime = {
  apiNameArray : [],
  apiStartTime : [],
  start : function (apiName){
    let startTime = new Date().getTime();
    NetworkService.sendTime.apiNameArray.push(apiName)
    NetworkService.sendTime.apiStartTime.push(startTime)
    //设置一个5秒的定时器，手动移除api
    setTimeout(function () {
    
    },5000)
  }

}


NetworkService.send = function (apiName, dataToSend) {

}
