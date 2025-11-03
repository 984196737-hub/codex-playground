export const track = (name, data = {}) => {
  try { wx.reportAnalytics && wx.reportAnalytics(name, data); } catch (_) {}
  // 也可追加云函数持久化
};
