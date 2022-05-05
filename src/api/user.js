import { request } from '@/utils/request'

// 登录
export function login(params) {
    return request({
        headers: { 'deviceCode': 'A95ZEF1-47B5-AC90BF3' },
        url: '/api/VHome/Login',
        method: 'POST',
        params
    })
}