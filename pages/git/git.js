let util = require('common/util.js').util;

Page({
    data: {
        // 设置默认值
    },
    onLoad: function () {
        // 接收页面参数可以获取wx.navigateTo和wx.redirectTo及<navigator/>中的 query。
    },
    onReady: function () {
        // 设置页面title
        // 设置头部信息
        util.setTitle('Git'); // FIXME
    },
    onShow: function () {
        let self = this;

        util.getData({
            url: 'https://api.github.com/search/repositories?q=javascript&sort=stars',
            method: 'GET',
            success: function(res){
            // 处理数据
            if (res && res.data && res.data.items) {
                
                util.showToast({
                    title: '成功',
                    icon: 'success'
                });

                self.setData({
                    total: res.data.total_count,
                    items: res.data.items
                });
            } else {
                // do something
            }
          }
        });
    },
    onHide: function () {},
    
});