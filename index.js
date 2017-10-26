console.log("hello world!");


//http请求:
const http = require('http');
http.get({
	localname:'api.douban.com',
	port:80
},(res)=>{
	console.log(res);
})
