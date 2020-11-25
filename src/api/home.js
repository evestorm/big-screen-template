import request from '@/utils/request';
const urlLists = {
    initGetLists: '/websocket/equipmentInform',
    initGetLists2: '/websocket/craneInform',
    initGetLists3: '/websocket/taskListInform',
    initGetLists4: '/base-task-log/list',
    changeNetWorkStatus: '/monitor/crane/networking/connect',
    changeOnLineStatus: '/monitor/crane/online',
    changeNetWorkStatus2: '/monitor/crane/networking/disconnected',
    changeOnLineStatus2: '/monitor/crane/offline'
};
export const initGetLists = (params) => {
    return request.get(urlLists.initGetLists, params);
};
export const initGetLists2 = (params) => {
    return request.get(urlLists.initGetLists2, params);
};
export const initGetLists3 = (params) => {
    return request.get(urlLists.initGetLists3, params);
};
export const initGetLists4 = (params) => {
    return request.get(urlLists.initGetLists4, params);
};
export const changeNetWorkStatus = (params) => {
    return request.get(urlLists.changeNetWorkStatus, params);
};
export const changeOnLineStatus = (params) => {
    return request.get(urlLists.changeOnLineStatus, params);
};
export const changeNetWorkStatus2 = (params) => {
    return request.get(urlLists.changeNetWorkStatus2, params);
};
export const changeOnLineStatus2 = (params) => {
    return request.get(urlLists.changeOnLineStatus2, params);
};