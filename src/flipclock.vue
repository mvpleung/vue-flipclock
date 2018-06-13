/*
 * 翻页时钟组件
 * @Author: liangzc 
 * @Date: 2018-06-08 10:19:55 
 * @Last Modified by: liangzc
 * @Last Modified time: 2018-06-08 13:52:46
 */
 <template>
  <div ref="flipclock"
    class="flip-clock" />
</template>
<script>
//配置请参考 http://flipclockjs.com/
import FlipClock from './flipclock.module.min';
export default {
  name: 'flip-clock',
  props: {
    /**
     * An integer used to start the clock (no. seconds)
     */
    digit: Number,
    /**
     * An object of properties to override the default
     * {  time: Number, //时间，单位秒
     *    label: Boolean, //是否显示时间label
     *    dot: Boolean, //是否显示时间节点间隔的点
     *    divider: {
     *      days: String, //天与小时节点之间的分割
     *      hours: String, //小时与分钟节点之间的分割
     *      minutes: String, //分钟与秒节点之间的分割
     *      seconds: String, //秒钟单位
     *    }
     *    ... 其他官方属性
     * }
     */
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      flipclock: {},
      convert: {
        days: 'hours',
        hours: 'minutes',
        minutes: 'seconds',
        seconds: 'last'
      }
    };
  },
  created() {
    this.$nextTick(() => {
      let options = this.options || {};
      !options.hasOwnProperty('autoStart') && (options.autoStart = true);
      this.clock = new FlipClock(this.$refs.flipclock, this.digit, options);
      if (
        options.divider &&
        Object.prototype.toString.call(options.divider) === '[object Object]'
      ) {
        for (let key in options.divider) {
          let el = document.querySelector(
            `.flip-clock-divider.${this.convert[key]}`
          );
          if (el) {
            el.innerHTML = options.divider[key];
          } else if (this.convert[key] === 'last') {
            this.$refs.flipclock.appendChild(
              FlipClock.Base.createDom(
                `<span class="flip-clock-divider">${
                  options.divider[key]
                }</span>`
              )
            );
          }
        }
      }
      options.time && this.clock.setTime(options.time);
      options.time && options.autoStart && this.clock.start();
    });
  },
  methods: {
    on(event, callback) {
      this.clock && this.clock.on(event, callback);
    },
    once(event, callback) {
      this.clock && this.clock.once(event, callback);
    },
    off(event) {
      this.clock && this.clock.off(event);
    },
    trigger(event, params) {
      this.clock && this.clock.trigger(event, params);
    },
    start(callback) {
      this.clock && this.clock.start(callback);
    },
    stop(callback) {
      this.clock && this.clock.stop(callback);
    },
    reset(callback) {
      this.clock && this.clock.reset(callback);
    },
    getFaceValue() {
      this.clock ? this.clock.getFaceValue() : null;
    },
    setFaceValue(value) {
      this.clock && this.clock.setFaceValue(value);
    },
    getCountdown() {
      this.clock ? this.clock.getCountdown() : false;
    },
    setCountdown(value) {
      this.clock && this.clock.setCountdown(value);
    },
    getTime() {
      this.clock ? this.clock.getTime() : 0;
    },
    setTime(value) {
      this.clock && this.clock.setTime(value);
    },
    flip(doNotAddPlayClass) {
      this.clock && this.clock.flip(doNotAddPlayClass);
    }
  }
};
</script>
<style lang="scss">
@import './flipclock.css';
</style>

 
