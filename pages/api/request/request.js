Page({
    data:{
        result:[]
    },
    //页面加载时
    onLoad(){
        var that=this;
        wx.request({
            url:'http://gank.io/api/data/Android/30/1',
            method:'GET',
            header: {
                'content-type': 'application/json'
            },
            data:{
                _:(new Date()).getTime()
            },
            success(res){
                that.setData({
                    result:res.data.results
                })
                console.log(2,that.data.result);
            },
            fail(res){
                console.log('失败了',res);
            }
        });

    }

})
