// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    toupdate : function () {       /*跳转到h2页面 关键代码*/
        wx.navigateTo({
        url: '../update/update',                          /*指定跳转到h2界面*/
        })
        },

    tobegin : function () {       /*跳转到h2页面 关键代码*/
        wx.navigateTo({
        url: '../begin/begin',                          /*指定跳转到h2界面*/
        })
        },
     torecord : function () {       /*跳转到h2页面 关键代码*/
        wx.navigateTo({
        url: '../record/record',                          /*指定跳转到h2界面*/
        })
        },                   
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})