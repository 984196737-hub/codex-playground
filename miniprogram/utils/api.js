export async function call(name, data = {}) {
  try {
    const res = await wx.cloud.callFunction({ name, data });
    return res.result;
  } catch (e) {
    wx.showToast({ title: '网络开小差', icon: 'none' });
    throw e;
  }
}
