// 引入 ajax 模块
import ajax from 'ajax'
import cfg from '@/util/environment.js';
import {
	setAuthtoken,
	setExternalLogintoken,
	removeAuthtoken,
	removeExternalLogintoken,
	removeUserInfo
} from '@/util/auth.js'
// 创建请求实例
const instance = ajax.create({
	// 初始配置
	baseURL: cfg.BASE_API
})
// 添加请求拦截器
instance.interceptors.request.use(
	config => {
		// 在发送请求前做些什么
		config.header = Object.assign({
			'x-access-token': uni.getStorageSync("vue_authtoken"),
			// 'X-Sys': 1,
			'X-Type': 'agent',
			'X-User': uni.getStorageSync("admin_user"),
			// 取出缓存中的租户id，店铺id就是租户id
			'x-tenant-id': uni.getStorageSync("shop").id,
			//客户端ip
			// 'x-access-ip': uni.getStorageSync("x-access-ip"),
		}, config.headers);
		return config
	},
	error => {
		// 对请求错误做些什么
		return Promise.reject(error)
	}
)


// 添加响应拦截器
instance.interceptors.response.use(
	response => {
		// 对响应数据做些什么
		if (!response.data.success && response.data.errorCode != 'E0752') {
			uni.showToast({
				title: response.data.errorMsg,
				icon: "none"
			})
			return Promise.reject(response.data.errorCode)
		}
		//令牌过期处理
		if (response.data.errorCode == 'E0752') {
			/* //这是失效后直接退出*/
			uni.showModal({
				title: '提示',
				content: '登录已过期，请重新登录',
				showCancel:false,
				success: function (res) {
					uni.showLoading();
					removeAuthtoken();
					removeExternalLogintoken();
					removeUserInfo();
					setTimeout(() => {
						uni.redirectTo({
							url: "/pages/user/login"
						});
						uni.hideLoading();
					}, 500)
				}
			});
		}
		return response.data
	},
	error => {
		uni.showToast({
			title: "服务器异常"
		})
		// 对响应错误做些什么
		return Promise.reject(error)
	}
)

// 导出 create 创建后的实例
export default instance
