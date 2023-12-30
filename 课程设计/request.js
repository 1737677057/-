
const instance = axios.create({
    baseURL: 'http://localhost:8089',
    timeout: 5000,
    withCredentials: true, // 允许跨域请求发送cookie
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
});

function doPost(url,data) {
    return instance({
        url: url,  // 接口地址
        method: 'POST', // 请求方式
        params: data, // 需要发送的数据
    })
}
function doGet(url) {
    return instance({
        url: url,  // 接口地址
        method: 'GET', // 请求方式
    })
}
