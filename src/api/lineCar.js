import request from '@/config/httpConfig';
const urlLists = {
    getBaseCrane: '/baseCrane/list', // 行车列表
    addBaseCrane: '/baseCrane/addBaseCrane', // 新增行车
    delBaseCrane: '/baseCrane/delBaseCrane', // 删除行车
    updateBaseCrane: '/baseCrane/updateBaseCrane' // 行车列表
};
// 获取行车列表
export const getBaseCrane = (params) => {
    return request.get(urlLists.getBaseCrane, params);
};
// 新增行车
export const addBaseCrane = (params) => {
    return request.post(urlLists.addBaseCrane, params);
};
// 删除行车
export const delBaseCrane = (params) => {
    return request.get(urlLists.delBaseCrane, params);
};
// 编辑行车
export const updateBaseCrane = (params) => {
    return request.post(urlLists.updateBaseCrane, params);
};