import devConfig from './dev';
import prodConfig from './prod';
// 基础配置，一些默认设置

const settings = {
    pagesize: 10,
    uploadName: 'avatar'
};

const config = process.env.NODE_ENV === 'production'
    ? Object.assign(settings, prodConfig)
    : Object.assign(settings, devConfig);

export default config;
