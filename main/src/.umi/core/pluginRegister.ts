// @ts-nocheck
import { plugin } from './plugin';
import * as Plugin_0 from '/Users/Billy/我的仓库/qiankun-start/main/src/app.ts';
import * as Plugin_1 from '/Users/Billy/我的仓库/qiankun-start/main/node_modules/umi-plugin-antd-icon-config/lib/app.js';
import * as Plugin_2 from '/Users/Billy/我的仓库/qiankun-start/main/src/.umi/plugin-dva/runtime.tsx';
import * as Plugin_3 from '../plugin-initial-state/runtime';
import * as Plugin_4 from '/Users/Billy/我的仓库/qiankun-start/main/src/.umi/plugin-locale/runtime.tsx';
import * as Plugin_5 from '../plugin-model/runtime';
import * as Plugin_6 from '@@/plugin-qiankun/masterRuntimePlugin';

  plugin.register({
    apply: Plugin_0,
    path: '/Users/Billy/我的仓库/qiankun-start/main/src/app.ts',
  });
  plugin.register({
    apply: Plugin_1,
    path: '/Users/Billy/我的仓库/qiankun-start/main/node_modules/umi-plugin-antd-icon-config/lib/app.js',
  });
  plugin.register({
    apply: Plugin_2,
    path: '/Users/Billy/我的仓库/qiankun-start/main/src/.umi/plugin-dva/runtime.tsx',
  });
  plugin.register({
    apply: Plugin_3,
    path: '../plugin-initial-state/runtime',
  });
  plugin.register({
    apply: Plugin_4,
    path: '/Users/Billy/我的仓库/qiankun-start/main/src/.umi/plugin-locale/runtime.tsx',
  });
  plugin.register({
    apply: Plugin_5,
    path: '../plugin-model/runtime',
  });
  plugin.register({
    apply: Plugin_6,
    path: '@@/plugin-qiankun/masterRuntimePlugin',
  });
