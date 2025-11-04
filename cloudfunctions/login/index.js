const cloud = require('wx-server-sdk');
const axios = require('axios');
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });
const db = cloud.database();

exports.main = async (event) => {
  const { code, channel } = event;
  const { data: token } = await axios.get(
    `https://api.weixin.qq.com/sns/jscode2session`,
    { params: {
        appid: process.env.APPID,
        secret: process.env.APPSECRET,
        js_code: code,
        grant_type: 'authorization_code'
    }}
  );
  const openid = token.openid;
  if (!openid) return { ok:false, error:'no-openid', token };

  const users = db.collection('users');
  await users.doc(openid).set({
    data: { openid, createdAt: Date.now(), lastChannel: channel }
  }).catch(async()=>{
    await users.doc(openid).update({ data: { lastChannel: channel, updatedAt: Date.now() } });
  });

  await db.collection('leads').add({ data: { openid, channel, ts: Date.now() }});
  return { ok:true, openid };
}
