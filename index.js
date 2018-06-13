import FlipClock from './src/flipclock.vue';
import FlipclockModule from './src/flipclock.module.min';

const install = Vue => {
  Vue.component('FlipClock', FlipClock);
};

export default {
  install
};

export { FlipClock, FlipclockModule };
