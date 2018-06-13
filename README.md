# FlipClock

### Installation

FlipClock.js can be installed in the following ways:

#### Node (NPM)

	npm install @mvpleung/flipclock -S

---

### Demo & Documentation

Website and documentation at http://flipclockjs.com/

---

### Vue Demo

```js
import { FlipClock } from 'vue-flipclock';
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

Website and documentation at http://flipclockjs.com/

|Field|Type|Description|
|---|----|----|
|**time**|`Number` |`Source of time`|
|**label**|`Boolean`| `Whether or not a time label is displayed`|
|**dot**|`Boolean`|`Whether the time division dots are displayed`|
|**divider**|`Object`, |`Time partition configuration, See below Divider Options`|
|**...**|`...`|`http://flipclockjs.com/`|

---

### Divider Options

|Field|Type|Description|Example|
|---|----|----|----|
|**days**|`String` |`Segmentation between day and hour nodes, support HTML`|`天`,`<span class='custom-days'>天</span>`|
|**hours**|`String` |`Segmentation between hourly and minute nodes, support HTML`|`小时`,`<span class='custom-hours'>小时</span>`|
|**minutes**|`String`| `Segmentation between minute and second nodes, support HTML`|`分钟`,`<span class='custom-minutes'>分</span>`|
|**seconds**|`String`|`Second unit`|`秒`,`<span class='custom-seconds'>秒</span>`|

---

### License
-------

[LICENSE](https://github.com/mvpleung/vue-flipclock/blob/master/LICENSE)
