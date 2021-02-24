export const qiankun = {
  apps: [
    {
      name: 'react-app',
      entry: '//localhost:8001',
      props: {
        title: '我是react'
      },
    },
    {
      name: 'vue-app',
      entry: '//localhost:8002',
      props: {
        title: '我是vue'
      },
    },
  ],
  lifeCycles: {
    afterMount: (props: any) => {
      console.log('main app afterMount', props);
    },
  },
}