const cloud = require('wx-server-sdk');
const axios = require('axios');
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });

exports.main = async (event) => {
  const { scene = '', page = 'pages/index/index', width = 430 } = event;
  const { data: tk } = await axios.get('https://api.weixin.qq.com/cgi-bin/token', {
    params: {
      grant_type: 'client_credential',
      appid: process.env.APPID,
      secret: process.env.APPSECRET
    }
  });
  const url = `https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=${tk.access_token}`;
  const { data: img } = await axios.post(url, { scene, page, width }, { responseType: 'arraybuffer' });
  const file = await cloud.uploadFile({ cloudPath: `qrcode/${Date.now()}.png`, fileContent: Buffer.from(img) });
  return { ok:true, fileID: file.fileID };
}
