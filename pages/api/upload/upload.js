Page({
    data: {
        files: []
    },
    chooseImage: function (e) {
        var that = this;
        //调用微信选择图片接口
        wx.chooseImage({
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                var tempFilePaths=res.tempFilePaths;
                that.setData({
                    files: that.data.files.concat(tempFilePaths)
                });
                console.log(tempFilePaths);
                wx.uploadFile({
                    url:'http://115.28.63.41:8509/img/up',
                    filePath:tempFilePaths[0],
                    name:'file_data',
                    formData:{
                        'user':'wjl'
                    },
                    success(res){
                        var data=res.data;

                    },
                    fail(res){
                        console.log('失败了',res);
                    }
                })
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片

            }
        })
    },
    previewImage: function(e){
        wx.previewImage({
            current: e.currentTarget.id, // 当前显示图片的http链接
            urls: this.data.files // 需要预览的图片http链接列表
        })
    }
});