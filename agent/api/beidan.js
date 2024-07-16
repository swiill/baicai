import request from '@/util/ajax'

export function beidanList() {
    return request({
        url: '/beidan/list',
        method: 'get'
    })
}

export function calculation(data) {
    return request({
        url: '/beidan/calculation',
        method: 'post',
		timeout:5000000,
		data
    })
}