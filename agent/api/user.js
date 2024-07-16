import request from '@/util/ajax'



/**
 * 设置发单分佣比例
 * @param {*} data
 */
export function adminUserRecharge(data) {
    return request({
        url: '/admin/user/recharge/'+data.id,
        method: 'put',
		data
    })
}

/**
 * 设置发单分佣比例
 * @param {*} data
 */
export function setUserCommissionRate(data) {
    return request({
        url: '/admin/user/setUserCommissionRate',
        method: 'post',
		data
    })
}

/**
 * 设置销售分佣比例
 * @param {*} data
 */
export function setSalespersonSaleRate(data) {
    return request({
        url: '/admin/user/setSalespersonSaleRate',
        method: 'post',
		data
    })
}

/**
 * 后台提现审核
 * @param {*} data
 */
export function examine(data) {
    return request({
        url: '/admin/withdrawal/examine',
        method: 'post',
		data
    })
}

/**
 * 获取用户详情信息
 * @param {*} data
 */
export function getAllUser(data) {
    return request({
        url: '/admin/user/getAllUser',
        method: 'post',
		data
    })
}

/**
 * 获取店主下面所有的销售列表
 */
export function getAllSale(data) {
    return request({
        url: '/admin/user/getAllSale',
        method: 'post',
		data
    })
}

/**
 * 获取用户详情信息
 * @param {*} data
 */
export function getUserDetail(data) {
    return request({
        url: '/admin/user/getUserDetail',
        method: 'post',
		data
    })
}

/**
 * 获取所有的店主
 */
export function getShopers(data) {
    return request({
        url: '/admin/user/shopkeeperList',
        method: 'post',
		data
    })
}

/**
 * 删除模拟
 */
export function delMoniUser(data) {
    return request({
        url: '/app/user/deleteMoniUser',
        method: 'post',
		data
    })
}



/**
 * 昨日榜单
 */
export function yesterdayWinningList() {
    return request({
        url: '/app/statistics/yesterdayWinningList',
        method: 'get',
    })
}


/**
 * 店主给用户充值
 * @param {*} data
 */
export function shopkeeperRecharge(uid,data) {
    return request({
        url: '/app/user/shopkeeperRecharge/'+uid,
        method: 'put',
		data
    })
}


/**
 * 店主模拟跟单
 */
export function shopkeeperMoniAdd(data) {
    return request({
        url: '/app/documentary/shopkeeperMoniAdd',
        method: 'post',
		data
    })
}


/**
 * 获取我的客户的订单
 */
export function getImitates(data) {
    return request({
        url: '/app/user/queryMoniUserList',
        method: 'post',
		data
    })
}

/**
 * 获取我的客户的订单
 */
export function agentBettingList(data) {
    return request({
        url: '/app/user/agentBettingList',
        method: 'post',
		data
    })
}

/**
 * 获取我的客户 
 */
export function agentUsers(data) {
    return request({
        url: '/app/user/agentUsers',
        method: 'post',
		data
    })
}


/**
 * 获取店铺数据统计
 *  @param {*} data
 */
export function getShopCount(data) {
	return request({
		url: '/admin/statistics/countShopPrice',
		method: 'post',
		data
	})
}

/**
 * 获取店铺数据统计
 *  @param {*} data
 */
export function countAgentPrize(data) {
	return request({
		url: '/admin/statistics/countAgentPrize',
		method: 'post',
		data
	})
}

/**
 * 派奖
 *  @param {*} data
 */
export function paijiangOrder(data) {
	return request({
		url: '/app/lottery/order/award',
		method: 'post',
		data
	})
}

/**
 * 出票
 *  @param {*} data
 */
export function chupiaoOrder(data) {
	return request({
		url: '/app/lottery/order/ticketing',
		method: 'post',
		data
	})
}

/**
 * 删除订单记录
 *  @param {*} data
 */
export function deleteOrder(data) {
	return request({
		url: '/app/lottery/order/deleteOrder',
		method: 'post',
		data
	})
}


/**
 * 删除销售
 * @param {*} data 
 */
export function delSalePerson(data) {
    return request({
        url: 'app/user/deleteSalesperson',
        method: 'post',
        data
    })
}

/**
 * 投诉详情
 * @param {*} data 
 */
export function getComplaintsInfo(data) {
    return request({
        url: '/complaints/detail',
        method: 'post',
        data
    })
}

/**
 * 投诉列表
 * @param {*} data 
 */
export function getComplaints(data) {
    return request({
        url: '/complaints/list',
        method: 'post',
        data
    })
}

/**
 * 创建投诉
 * @param {*} data 
 */
export function createComplaints(data) {
    return request({
        url: '/complaints/create',
        method: 'post',
        data
    })
}

/**
 * 创建模拟用户
 * @param {*} data 
 */
export function createMoniUser(data) {
    return request({
        url: '/app/user/createMoniUser',
        method: 'post',
        data
    })
}

/**
 * 创建销售
 * @param {*} data 
 */
export function addSalesperson(data) {
    return request({
        url: '/app/user/addSalesperson',
        method: 'post',
        data
    })
}
/**
 * 登录
 * @param {*} data 
 */
// export function login(data) {
//     return request({
//         url: '/app/user/login',
//         method: 'post',
//         data
//     })
// }

/**
 * 登录
 * @param {*} data 
 */
export function login(data) {
    return request({
        url: '/app/user/login',
        method: 'post',
        data
    })
}

/**
 * 注册
 * @param {*} data 
 */
export function register(data) {
    return request({
        url: '/app/user/register1',
        method: 'post',
		data
    })
}

/**
 * 发送短信
 * @param {*} data 
 */
export function send(data) {
    return request({
        url: '/app/user/send',
        method: 'post',
		data
    })
}

/**
 * 退出
 * @param {*} data 
 */
export function logout() {
    return request({
        url: '/user/logout',
        method: 'get',
    })
}

/**
 * 好友列表
 * @param {*} id 
 */
export function friendList(id) {
    return request({
        url: '/app/user/friend/'+id,
        method: 'get'
    })
}

/**
 * 修改密码
 * @param {*} data 
 */
export function changePwd(data) {
    return request({
        url: '/app/user/change/pwd',
        method: 'put',
		data
    })
}
/**
 * 修改密码
 * @param {*} data 
 */
export function changeUser(data) {
    return request({
        url: '/app/user/change/info',
        method: 'put',
		data
    })
}

/**
 * 实名
 * @param {Object} data
 */
export function real(data) {
    return request({
        url: '/app/user/real',
        method: 'put',
		data
    })
}

/**
 * 获取用户信息
 */
export function getUser() {
    return request({
        url: '/app/user/get',
        method: 'get',
    })
}

export function getUser1() {
    return request({
        url: '/app/user/get1',
        method: 'get',
    })
}


/**
 * 我的销售
 */
export function agentSalesperson(data) {
    return request({
        url: '/admin/user/agentSalesperson',
        method: 'post',
		data
    })
}

/**
 * 代理
 */
export function agent(data) {
    return request({
        url: '/app/user/agent',
        method: 'post',
		data
    })
}

export function getUserByNickName(data) {
    return request({
        url: '/app/user/get/nickname',
        method: 'post',
		data
    })
}

export function getTenantId(uid) {
    return request({
        url: '/app/user/get/tenant/'+uid,
        method: 'get',
    })
}

export function binding(data) {
    return request({
        url: '/app/user/binding',
        method: 'post',
		data
    })
}

export function checkPhoneIsExist(data) {
    return request({
        url: '/app/user/phone/exist',
        method: 'post',
		data
    })
}

