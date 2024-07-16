import request from '@/util/ajax'

/**
 * 日志列表
 */
export function agentLogList(data) {
    return request({
        url: '/app/log/list',
        method: 'post',
		data
    })
}
