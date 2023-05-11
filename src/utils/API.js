const
  axios = require('axios');
const https = require('https');

const postAuto = async (url, data) => {
  const response = await axios({
    url,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
    data,
  });
  if (response.data.code === 0) {
    return { code: 0, data: response.data };
  }
  return { code: 999, data: response.data };
};

const userLogin = (data) => {
  axios({
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data,
  });
};

const userLogout = (data) => {
  axios({
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data,
  });
};

module.exports = {
  postAuto,
  userLogin,
  userLogout,
};
