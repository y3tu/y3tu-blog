import request from '@/plugin/axios'

export const getMusic = () => {
    return request({
        method: 'get',
        url: '/music/getAll'
    });
};

export const getWebsite = () => {
    return request({
        method: 'get',
        url: '/website/getWebsiteGroupByCategory'
    })
};