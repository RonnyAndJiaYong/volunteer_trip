import axios from 'axios'

export NetworkService

NetworkService = {}

let domain = 'a'
NetworkService.getDomain = function () {
  return domain
}
NetworkService.print_log = true //  控制打印数据

//请求事件的服务名称 注册
let apiToUrl = {
    queryVolunteerPage : domain
}

NetworkService.getUrl = function (apiName) {
  let url = apiToUrl[apiName]
  if(url){
    return url
  }else {
    console.log('没有找到对应的接口' + apiName)
    return false
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
        let index = $.inArray(apiName,NetworkService.sendTime.apiNameArray)
        if (index > -1){
          NetworkService.sendTime.apiNameArray.splice(index, 1)
        }
    },5000)
  },
  end :function (apiName){
      function removeApi() {
        NetworkService.sendTime.apiNameArray.splice(index,1)
        NetworkService.sendTime.apiStartTime.splice(index,1)
      }
      let index = $.inArray(apiName,NetworkService.sendTime.apiNameArray)
      if (index > -1){
        let endTime = new Date().getTime()
        let startTime = NetworkService.sendTime.apiStartTime[index]
        let time = endTime - startTime
        let minTime = 1000
        if(time < minTime){
          setTimeout(removeApi(),minTime-time)
        }else {
          removeApi()
        }
      }
  }
}

/*
* apiName : 服务名称 string
* dataToSend 要发送的数据 {object}
*
* */
NetworkService.send = function (apiName, dataToSend) {
  let index = $.inArray(apiName,NetworkService.sendTime.apiNameArray)
  //判断该接口是否正在请求中 如果还在请求数组 则直接返回
  if(index > -1){
    console.log('接口'+apiName+'正在请求中' )
    return
  }
  //请求计算时间开始
  NetworkService.sendTime.start(apiName)

  let url = NetworkService.getUrl(apiName)

  $.ajax({
    type : 'POST',
    url : url,
    data : dataToSend,
    dataType : 'json',
    success : function (data) {
      NetworkService.sendTime.end(apiName)
      //checkCode -1 错误获取出错 0所有数据   1 正确筛选条件的数据
      if(data.checkCode > 0){
        if(NetworkService.print_log){
          console.log(apiName + 'ajax Success && checkCode>0' +data.checkCode)
          console.log('   ' + apiName + 'send'+ dataToSend)
          console.log('   ' + apiName + 'response'+ data)
        }
        new Promise().resolve(data)
      }else {
        console.warn(apiName + 'ajax Success && checkCode>0' +data.checkCode)
        console.warn('   ' + apiName + 'send'+ dataToSend)
        console.warn('   ' + apiName + 'response'+ data)
        new Promise().reject(data);
      }
    },
    error : function () {
      console.error('请求失败！')
    }
  })
}
