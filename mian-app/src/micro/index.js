import { registerMicroApps, start, addGlobalUncaughtErrorHandler, setDefaultMountApp } from "qiankun";

import apps from './apps';

registerMicroApps(apps,
    {
        beforeLoad: [
            app => {
                console.log("[LifeCycle] before load c%S%", 'color: green', app.name);
            }
        ], // 挂载前回调
        beforeMount: [
            app => {
                console.log("[LifeCycle] before mount c%S%", 'color: green', app.name);
            }
        ], // 挂载后回调
        afterUnmount: [
            app => {
                console.log("[LifeCycle] after unload c%S%", 'color: green', app.name);
            }
        ] // 卸载后回调
    }
);


addGlobalUncaughtErrorHandler(event => {
    console.log(event);
})

setDefaultMountApp('/app-vue');

export default start;