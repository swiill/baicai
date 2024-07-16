import request from '@/util/ajax'

export function querybBasketballList() {
    return request({
        url: '/basketball/list',
        method: 'get'
    })
}

export function calculation(data) {
    return request({
        url: '/basketball/calculation',
        method: 'post',
		timeout:5000000,
		data
    })
}