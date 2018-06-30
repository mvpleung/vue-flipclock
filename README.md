# FlipClock

flipclock for Vue，Rejecting jQuery dependency

### Installation

FlipClock.js can be installed in the following ways:

#### Node (NPM)

    npm install @mvpleung/flipclock -S

#### Script (Vue)

    <script src="path/dist/index.js"></script>

#### Script (window)

    <script src="path/src/flipclock.min.js"></script>

---

### Demo & Documentation

[Example](./examples)

[Vue Script Example](./examples/base-vue.html)

Website and documentation at http://flipclockjs.com/

---

### Vue Demo

```js
import { FlipClock } from '@mvpleung/flipclock';
export default {
  ...
  components: {
    FlipClock
  }
}

...

<flip-clock :options="{}" />
```

---

### Documentation

| Field       | Type     | Description                                                                       |
| ----------- | -------- | --------------------------------------------------------------------------------- |
| **digit**   | `Number` | `deprecated`, An integer used to start the clock(Use `Options.digit` instead)     |
| **options** | `Object` | flipclock configuration, Support dynamic modification options to change flipclock |

---

### Options

Website and documentation at http://flipclockjs.com/

| Field       | Type      | Description                                                               |
| ----------- | --------- | ------------------------------------------------------------------------- |
| **time**    | `Number`  | Source of time                                                            |
| **digit**   | `Number`  | An integer used to start the clock(For Example: `countdown-to-new-years`) |
| **label**   | `Boolean` | Whether or not a time label is displayed                                  |
| **dot**     | `Boolean` | Whether the time division dots are displayed                              |
| **divider** | `Object`  | Time partition configuration, See below `Divider Options`                 |
| **...**     | `...`     | `http://flipclockjs.com`                                                  |

---

### Divider Options

| Field       | Type     | Description                                                | Example                                         |
| ----------- | -------- | ---------------------------------------------------------- | ----------------------------------------------- |
| **days**    | `String` | Segmentation between day and hour nodes, support HTML      | `天`,`<span class='custom-days'>天</span>`      |
| **hours**   | `String` | Segmentation between hourly and minute nodes, support HTML | `小时`,`<span class='custom-hours'>小时</span>` |
| **minutes** | `String` | Segmentation between minute and second nodes, support HTML | `分钟`,`<span class='custom-minutes'>分</span>` |
| **seconds** | `String` | Second unit                                                | `秒`,`<span class='custom-seconds'>秒</span>`   |

---

### Instance Methods

> this.$refs.flipclcok.start();

| Field             | Params               | Description                                                                                                                                                                    |
| ----------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **trigger**       | `event`,`params`     | Trigger FlipClock Method                                                                                                                                                       |
| **start**         | `callback`           | Start the clock                                                                                                                                                                |
| **stop**          | `callback`           | Stop the clock                                                                                                                                                                 |
| **reset**         | `options`,`callback` | Reset the clock, If the `options` is present, the clock will be reset by the `options`                                                                                         |
| **loadClockFace** | `name`, `options`    | This method allows you to load a clock face. The first argument is the name of the clock face, and the second is an object of options used to override the default properties. |
| **loadLanguage**  | `name`               | This method allows you to load a language file. The argument is the name of the language file.                                                                                 |
| **setCountdown**  | `countdown`          | This method set the clockdown property to true or false. In addition to setting the property, this method will also change the direction the clock is flipping.                |
| **getTime**       |                      | This method will get the current FlipFactory.Time object.                                                                                                                      |
| **setTime**       | `time`               | This method will set the time on the clock by passing a value which will be passed to the FlipFactory.Time object.                                                             |
| **instance**      |                      | This method will get the current FlipClock object.                                                                                                                             |

---

### License

---

[LICENSE](https://github.com/mvpleung/vue-flipclock/blob/master/LICENSE)
