import request from '@/util/ajax'



export function winBurdenWinEvenLoseList() {
    return request({
        url: '/victory/list',
        method: 'get'
    })
}

export function calculation(data) {
    return request({
        url: '/victory/calculation',
        method: 'post',
		timeout:5000000,
		data
    })
}