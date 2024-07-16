import request from '@/util/ajax'



/**
 * 删除支付通道
 */
export function deleteAliPayKey(data) {
	return request({
		url: '/admin/dict/deleteAliPayKey',
		method: 'put',
		data
	})
}

/**
 * 添加支付通道
 */
export function addAliPayKey(data) {
	return request({
		url: '/admin/dict/addAliPayKey',
		method: 'put',
		data
	})
}

/**
 * 游戏上下架
 */
export function updateLine(data) {
	return request({
		url: '/admin/ball/update/line/'+data.id+'/'+data.line,
		method: 'put',
		data
	})
}

export function adminShopDetail(data) {
	return request({
		url: '/admin/shop/adminShopDetail',
		method: 'post',
		data
	})
}

/**
 * 店铺修改扣款比例
 */
export function editShopRate(data) {
	return request({
		url: '/admin/shop/editShopRate',
		method: 'post',
		data
	})
}


/**
 * 店铺上下架
 */
export function updateShopLine(data) {
	return request({
		url: '/admin/shop/editShopLine',
		method: 'post',
		data
	})
}

/**
 * 店铺详情
 */
export function shopDetail(data) {
	return request({
		url: '/admin/shop/shopDetail',
		method: 'post',
		data
	})
}


/**
 * 店铺列表
 */
export function shopList(data) {
	return request({
		url: '/admin/shop/list',
		method: 'post',
		data
	})
}

/**
 * 创建店铺
 * @param {*} data 
 */
export function createShop(data) {
	return request({
		url: '/admin/shop/add',
		method: 'post',
		data
	})
}


/**
 * 站点获取
 */
export function domainQuery(data) {
	return request({
		url: '/admin/domain/query',
		method: 'get',
		data
	})
}

/**
 * 站点修改
 */
export function update(data) {
	return request({
		url: '/admin/domain/update/'+data.id,
		method: 'put',
		data
	})
}
