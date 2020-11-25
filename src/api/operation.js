import request from '@/util/request';
const urlLists = {
    getTaskList: '/task/list', // 作业列表
    delTask: '/task/delete', // 删除作业
    stopJob: '/task/stopJob', // 停止作业
    startJob: '/task/startJob', // 启动作业
    addTask: '/task/add', // 新增作业
    updateTask: '/task/updateJob', // 修改
    updateActiveTask: '/task/updateJobStatus', // 修改激活状态
    getQueryInputMaterial: '/task/queryInputMaterial', // 获取抓料区编号作业
    getQueryOtherWarehouse: '/task/queryOtherWarehouse', // 获取其他抓料库区
    getQueryOutputMaterial: '/task/queryOutputMaterial' // 获取放料库区
};
// 获取作业列表
export const getTaskList = (params) => {
    return request.post(urlLists.getTaskList, params);
};
// 删除作业
export const delTask = (params) => {
    return request.get(urlLists.delTask, params);
};
// 停止作业
export const stopJob = (params) => {
    return request.get(urlLists.stopJob, params);
};
// 启动作业
export const startJob = (params) => {
    return request.get(urlLists.startJob, params);
};
// 新增作业
export const addTask = (params) => {
    return request.post(urlLists.addTask, params);
};
// 修改作业
export const updateTask = (params) => {
    return request.post(urlLists.updateTask, params);
};
// 更改激活状态
export const updateActiveTask = (params) => {
    return request.post(urlLists.updateActiveTask, params);
};
// 获取抓料区编号作业
export const getQueryInputMaterial = (params) => {
    return request.post(urlLists.getQueryInputMaterial, params);
};
// 获取其他抓料区编号作业
export const getQueryOtherWarehouse = (params) => {
    return request.post(urlLists.getQueryOtherWarehouse, params);
};
// 获取放料料区编号作业
export const getQueryOutputMaterial = (params) => {
    return request.post(urlLists.getQueryOutputMaterial, params);
};