import axios from 'axios';
import config from '@/config';

const instance = url => {
    const instance = axios.create({
        baseURL: url || config.server.api,
        // withCredentials: true,
        timeout: 5000
    });

    instance.interceptors.request.use(async (require) => {
        return require;
    });

    instance.interceptors.response.use((response) => {
        const { data, config } = response;
        // console.log(response);
        if ((response.status === 200 || response.status === 201 || response.status === 204) && (config.method === 'post' || config.method === 'put' || config.method === 'delete')) {
            Notification.success({
                title: '操作成功'
            });
        } else if (response.status !== 200 && response.status !== 201 && response.status !== 204) {
            Notification.error({
                title: response.statusText
            });
        }
        return data;
    }, (error) => {
        return error;
    });

    return instance;
};

export default instance;
