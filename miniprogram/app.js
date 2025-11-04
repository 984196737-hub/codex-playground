App({
  onLaunch() {
    if (!wx.cloud) {
      console.error('请在基础库2.2.3+使用云能力');
    } else {
      wx.cloud.init({ traceUser: true });
    }
  }
});
