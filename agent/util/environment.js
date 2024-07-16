//生产环境
const prod = {
   BASE_API: '/api',
  //BASE_API: 'https://vue.qihang9981.com/api',
}

//开发环境
const dev = {
  BASE_API: 'http://localhost:8090',
}

/*
=================注意根据需要改变环境================
 */
const environment = prod;
export default {
  BASE_API: environment.BASE_API,
}
