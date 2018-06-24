import FlipClock from './src/flipclock.vue';
import FlipclockModule from './src/flipclock.module.min';
import FlipclockJs from './src/flipclock.min';

const install = Vue => {
  if (install.installed) return;
  Vue.component('FlipClock', FlipClock);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default install;
export { FlipClock, FlipclockModule, FlipclockJs };
