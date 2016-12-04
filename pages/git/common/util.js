var util = {};

/**
 * 简单封装 wx.setNavigationBarTitle
 * @params {String} title 头部 title 在 onReady 阶段可自定义
 */
util.setTitle = function (title) {
    wx.setNavigationBarTitle({
        title: title,
        success: function(res) {
        // success
        }
    });
}
/**
 * 简单封装 wx.showToast
 * @params {Object} options
 * @params {String} options.title toast 必填 提示的内容
 * @params {String} option.icon 图标，只支持"success"、"loading"  
 * @params {Number} option.duration 提示的延迟时间，最大为为10000ms
 */
util.showToast = function (options) {
    let title = options.title ? options.title : '加载中',
        icon = options.icon ? options.icon : 'loading',
        duration = options.duration ? options.duration : 1500;

    wx.showToast({
        title: title,
        icon: icon,
        duration: 1000
    });
}

/**
 * 获取数据
 * @params {Object} options 请求所需参数设置
 * @params {String} options.url 请求路径
 * @params {String} options.method 请求方法方法
 * @params {Function} options.success 请求成功回调
 * @params {Function} options.fail 请求失败回调
 * @params {Function} options.complate 请求完成回调
 */
util.getData =  function (options) {
    let url = options.url,
        method = options.method,
        success = options.success,
        fail = options.fail,
        complate = options.complate; 
        
        if (!url || typeof url !== 'string') {
            console.log('请输入请求地址');
            return;
        }

        if (!method || typeof method !== 'string') {
            console.warn('请输入 method 的值');
            method = '';
        }

        if (!success || typeof success !== 'function') {
            success = function () {
                // TODO
            }
        }

        if (!fail || typeof fail !== 'function') {
            fail = function () {
                // TODO
            }
        }

        if (!complate || typeof complate !== 'function') {
            complate = function () {
                // TODO
            }
        }

    util.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 10000
    });

    wx.request({
        url: url,
        method: method,
        success: success,
        fail: fail,
        complate: complate
    });

    // wx.request({
    //   url: 'https://api.github.com/search/repositories?q=javascript&sort=stars',
    //   // data: {},
    //   method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    //   // header: {}, // 设置请求的 header
    //   success: function(res){
    //     // success
    //     // 处理数据
    //     if (res && res.data && res.data.items) {
            
    //         util.showToast({
    //             title: '成功',
    //             icon: 'success'
    //         });

    //         self.setData({
    //             total: res.data.total_count,
    //             items: res.data.items
    //         });
    //     } else {
    //         // do something
    //     }
    //   },
    //   fail: function() {
    //     // fail
    //   },
    //   complete: function() {
    //     // complete
    //   }
    // });
}

// 导出模块的，建议通过 module.exports 这种方式导出模块
module.exports.util = util;
// exports 是 module.exports 的一个引用，因此在模块里边随意更改 exports 的指向会造成未知的错误。
// 所以我们更推荐开发者采用 module.exports 来暴露模块接口，除非你已经清晰知道这两者的关系。
// exports.util = util;