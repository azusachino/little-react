import originAxios from 'axios'

const axios = originAxios.create({
  baseURL: 'http://127.0.0.1:8080',
  timeout: 3000
});

axios.interceptors.request.use(config => {
    return config
  },
  error => {
    console.error(error);
  });

axios.interceptors.response.use(res => {
  // req not success
  if (res.status !== 200) {
    console.error(res.statusText);
  }
  return res;
})

export default axios
