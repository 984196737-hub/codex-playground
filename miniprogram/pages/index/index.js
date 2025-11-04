import { parseLaunchOptions } from '../../utils/scene'
import { call } from '../../utils/api'

Page({
  data:{ user:null, channel:{} },
  async onLoad(options){
    const channel = parseLaunchOptions(options);
    this.setData({ channel });

    try {
      const { code } = await wx.login();
      const user = await call('login', { code, channel });
      this.setData({ user });
    } catch (e) {}
  },
  onShareAppMessage(){
    return { title:'参芝阿胶玉灵膏｜日常滋养', path:'/pages/index/index' };
  }
})
