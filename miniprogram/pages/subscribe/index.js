Page({
  async sub(){
    try{
      const r = await wx.requestSubscribeMessage({ tmplIds: ['TEMPLATE_ID_1'] });
      const ok = Object.values(r).includes('accept');
      wx.showToast({ title: ok? '已订阅' : '未授权', icon: 'none' });
    }catch(e){ wx.showToast({ title: '订阅失败', icon: 'none' }); }
  }
})
