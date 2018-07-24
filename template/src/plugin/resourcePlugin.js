import Vue from 'vue';
export const resourcePlugin = {};

resourcePlugin.init = function (urlToken) {
    //vue-resource拦截器
    Vue.http.interceptors.push((request, next) => {
        let template = "/timeandspace-platform/";
        let videoTemplate = '/video/';
        let area = '/administrative-area/';
        let url = request.url;
        // console.log(url);
        if(url.startsWith(template) || url.startsWith(videoTemplate) || url.startsWith(area)){
            request.url = `${MODEL_URL}` + url;
        }
        
        request.headers.set("access-token",urlToken);
        
        next(function(response) {
            if ( response.body.code == 401) {
                // console.error("token失效！！！");
                window.location.href = LINE_LOGIN_URL;
            }
            return response
        });
    });
};