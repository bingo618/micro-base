import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig = {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      hash: true,
      dynamicImport: { webpackChunkName: true },
      title: 'micro-base',
      dll: false,
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
    ['@umijs/plugin-qiankun/master', {
      // 注册子应用信息
      apps: [
        {
          name: 'app1', // 唯一 id
          entry: 'http://bin.ananlab.com/app1/index.html',
          base: '/app1', // app1 的路由前缀，通过这个前缀判断是否要启动该应用，通常跟子应用的 base 保持一致
          history: 'browser', // 子应用的 history 配置，默认为 'browser',
          mountElementId: 'root-slave',
        },
        {
          name: 'app2', // 唯一 id
          entry: 'http://bin.ananlab.com/app2/index.html',
          base: '/app2', // app1 的路由前缀，通过这个前缀判断是否要启动该应用，通常跟子应用的 base 保持一致
          history: 'browser', // 子应用的 history 配置，默认为 'browser',
          mountElementId: 'root-slave',
        },
      ],
      jsSandBox: true, // 是否启用 js 沙箱，默认为 false
      prefetch: true, // 是否启用 prefetch 特性，默认为 true
    },
    ],
  ],
};

export default config;
