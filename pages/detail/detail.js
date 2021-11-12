// pages/detail/detail.js
Page({
  data:{
    ids:undefined,
    courses:[]
  },
  onLoad(options){
    wx.request({
      url: 'https://www.fastmock.site/mock/d36d2bac2cb84d3e1ad659fcbb62a574/weixin/api/getData',
      success:(res)=>{
        const {data:{data}} = res;
        const { courses } = data;
        this.setData({courses})
      }
    })
    this.setData({
      ids:options.id,
    })
  },
})