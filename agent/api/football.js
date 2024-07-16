import request from '@/util/ajax'

export function footballWinEvenLoseList() {
    return request({
        url: '/football/list',
        method: 'get'
    })
}


export function calculation(data) {
    return request({
        url: '/football/calculation',
        method: 'post',
		timeout:5000000,
		data
    })
}