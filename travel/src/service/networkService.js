//
import axios from 'axios'
import $ from 'jquery'

//  管理所有请求的数据
let NetworkService = {}

let domain = 'http://localhost:2020'
NetworkService.getDomain = function () {
  return domain
}
NetworkService.print_log = true //  控制打印数据

//  请求事件的服务名称 注册
let apiToUrl = {
    queryVolunteerPage: domain + '/api/volunteer'
}

NetworkService.getUrl = function (apiName) {
  let url = apiToUrl[apiName]
  if (url){
    return url
  } else {
    console.log('没有找到对应的接口' + apiName)
    return false
  }
}
NetworkService.sendTime = {
  apiNameArray: [],
  apiStartTime: [],
  start: function (apiName){
    let startTime = new Date().getTime();
    NetworkService.sendTime.apiNameArray.push(apiName)
    NetworkService.sendTime.apiStartTime.push(startTime)
    //  设置一个5秒的定时器，手动移除api
    setTimeout(function () {
        let index = $.inArray(apiName, NetworkService.sendTime.apiNameArray)
        if (index > -1){
          NetworkService.sendTime.apiNameArray.splice(index, 1)
        }
    }, 5000)
  },
  end: function (apiName){
      function removeApi() {
        NetworkService.sendTime.apiNameArray.splice(index, 1)
        NetworkService.sendTime.apiStartTime.splice(index, 1)
      }
      let index = $.inArray(apiName, NetworkService.sendTime.apiNameArray)
      if (index > -1){
        let endTime = new Date().getTime()
        let startTime = NetworkService.sendTime.apiStartTime[index]
        let time = endTime - startTime
        let minTime = 1000
        if (time < minTime){
          setTimeout(removeApi(), minTime - time)
        } else {
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
  let index = $.inArray(apiName, NetworkService.sendTime.apiNameArray)
  //  判断该接口是否正在请求中 如果还在请求数组 则直接返回
  if (index > -1){
    console.log('接口' + apiName + '正在请求中')
    return
  }
  //  请求计算时间开始
  NetworkService.sendTime.start(apiName)
  let url = NetworkService.getUrl(apiName)
  /* eslint-disable no-new */
  new Promise(function (resolve, reject) {
    axios({
      method: 'get',
      url: url,
      data: dataToSend,
      proxy: {
        host: '127.0.0.1',
        port: 2020
        //     auth: : {
        //     username: 'mikeymike',
        //     password: 'rapunz3l'
        // }
      }
    }).then(function (data) {
      NetworkService.sendTime.end(apiName)
      if (data.data.data.checkCode > 0){
        if (NetworkService.print_log){
          console.log(apiName + 'ajax Success && checkCode>0' + data.data.checkCode)
          console.log('   ' + apiName + 'send' + dataToSend)
          console.log('   ' + apiName + 'response' + data.data)
        }
        return resolve(data)
      } else {
        console.warn(apiName + 'ajax Success && checkCode>0' + data.data.checkCode)
        console.warn('   ' + apiName + 'send' + dataToSend)
        console.warn('   ' + apiName + 'response' + data.data)
        return resolve(data)
      }
    }).catch(function (error) {
      console.error('请求失败！' + error)
    })
  })
}
export default NetworkService
