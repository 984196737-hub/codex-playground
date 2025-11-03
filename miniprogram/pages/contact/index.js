Page({
  openKf(){
    if (wx.openCustomerServiceChat) {
      wx.openCustomerServiceChat({
        extInfo: { url: 'https://work.weixin.qq.com/kfid/xxxxxxxx' },
        corpId: 'wwxxxxxxxxxxxx'
      })
    } else {
      wx.showToast({ title:'当前不支持企业微信客服', icon:'none' })
    }
  }
})
