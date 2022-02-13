// 传入子应用的数据
let msg = {
    data: {
        auth: false
    },
    fns: [
        {
            name: "_LOGIN",
            _LOGIN(data) {
                console.log(`子应用向父应用传的值${data}`);
            }
        }
    ]
};

const apps = [
    {
        name: 'app-vue',
        entry: '//localhost:8001',
        container: '#container',
        activeRule: '/app-vue',
        props: msg
    },
]

export default apps;