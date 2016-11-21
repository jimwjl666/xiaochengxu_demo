//index.js
//获取应用实例
var app = getApp()
Page({
  //页面的初始数据
  data: {
    motto: 'Hello World(点我吧！)',
    array:[{msg:1},{msg:2}],
    userInfo: {}
  },
 //---------------------------以上是初始化页面数据------------
  //页面加载时,只调用一次
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      //console.log(userInfo);
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
