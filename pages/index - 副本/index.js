//index.js
//获取应用实例
var app = getApp()
//console.log(app.globalData);//刚开始时是是null
Page({
  //页面的初始数据
  data: {
    motto: 'Hello World(点我吧！)',
    array:[{msg:1},{msg:2}],
    userInfo: {},
    staffA: {firstName: 'Hulk', lastName: 'Hu'},
    staffB: {firstName: 'Shang', lastName: 'You'},
    staffC: {firstName: 'Gideon', lastName: 'Lin'}
  },
 //---------------------------以上是初始化页面数据------------
  //页面加载时,只调用一次
  onLoad: function () {
    console.log(1,'onLoad');
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      //console.log(userInfo);
      that.setData({
        userInfo:userInfo
      })
    })
  },
  //页面显示时，每次打开页面都会调用一次
  onShow:function(){
    console.log(2,'页面显示时');
  },
  //初次渲染完成
  onReady:function(){
    console.log(3,'初次渲染完成');
  },
  
  //页面隐藏时
  onHide:function(){},
  //页面卸载时
  onUnload:function(){},
  //下拉刷新时
  onPullDownRefresh:function(){
    console.log('下拉刷新中中。。。');
  },
  //上拉加载时
  onReachBottom:function(){

  },
  //----------------------页面生命周期--------------
   //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  tapHello:function(){
    this.setData({
      motto:'我被改变了了！'
    })
    console.log(this);
  },
  goToLog:function(){
    //在新页面打开
    wx.navigateTo({
      url: "/pages/logs/logs?name=zs&xb=男",
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
    //页面重定向，覆盖当前页
    /*
    wx.redirectTo({
      url: 'String',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
    */
    /* 往前退回1页
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
    */
  }
  //------------------页面自定义事件------------------
})
