import request from '@/util/ajax'


/**
 * 修改票据
 */
export function actual(data) {
	return request({
		url: '/admin/lottery/order/actual',
		method: 'put',
		data
	})
}

/**
 * 账户明细
 */
export function widthdrawalList(data) {
	return request({
		url: '/admin/withdrawal/list',
		method: 'post',
		data
	})
}

/**
 * 账户明细
 */
export function getPayOrderList(data) {
	return request({
		url: '/admin/pay/order/getPayOrderList1',
		method: 'post',
		data
	})
}

export function getPayOrderList1(data) {
	return request({
		url: '/admin/pay/order/getPayOrderList2',
		method: 'post',
		data
	})
}

/**
 * 账户明细
 */
export function getMingXiOrders(data) {
	return request({
		url: '/admin/pay/order/payOrderList',
		method: 'post',
		data
	})
}

/**
 * 订单记录
 */
export function getLotteryOrderPage(data) {
	return request({
		url: '/admin/lottery/order/list',
		method: 'post',
		data
	})
}

/**
 * 根据id订单订单记录
 */
export function getLotteryOrderById(id) {
	return request({
		url: '/app/lottery/order/get/'+id,
		method: 'get',
	})
}

/**
 * 获取昨日下单中奖的订单提示信息
 */
export function centre() {
	return request({
		url: '/app/lottery/order/centre',
		method: 'get',
	})
}