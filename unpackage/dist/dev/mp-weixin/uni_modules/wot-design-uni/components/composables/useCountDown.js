"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_wotDesignUni_components_common_util = require("../common/util.js");
const uni_modules_wotDesignUni_components_composables_useRaf = require("./useRaf.js");
const SECOND = 1e3;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
function parseTime(time) {
  const days = Math.floor(time / DAY);
  const hours = Math.floor(time % DAY / HOUR);
  const minutes = Math.floor(time % HOUR / MINUTE);
  const seconds = Math.floor(time % MINUTE / SECOND);
  const milliseconds = Math.floor(time % SECOND);
  return {
    total: time,
    days,
    hours,
    minutes,
    seconds,
    milliseconds
  };
}
function isSameSecond(time1, time2) {
  return Math.floor(time1 / 1e3) === Math.floor(time2 / 1e3);
}
function useCountDown(options) {
  let endTime;
  let counting;
  const { start: startRaf, cancel: cancelRaf } = uni_modules_wotDesignUni_components_composables_useRaf.useRaf(tick);
  const remain = common_vendor.ref(options.time);
  const current = common_vendor.computed(() => parseTime(remain.value));
  const pause = () => {
    counting = false;
    cancelRaf();
  };
  const getCurrentRemain = () => Math.max(endTime - Date.now(), 0);
  const setRemain = (value) => {
    remain.value = value;
    uni_modules_wotDesignUni_components_common_util.isDef(options.onChange) && options.onChange(current.value);
    if (value === 0) {
      pause();
      uni_modules_wotDesignUni_components_common_util.isDef(options.onFinish) && options.onFinish();
    }
  };
  const microTick = () => {
    if (counting) {
      setRemain(getCurrentRemain());
      if (remain.value > 0) {
        startRaf();
      }
    }
  };
  const macroTick = () => {
    if (counting) {
      const remainRemain = getCurrentRemain();
      if (!isSameSecond(remainRemain, remain.value) || remainRemain === 0) {
        setRemain(remainRemain);
      }
      if (remain.value > 0) {
        startRaf();
      }
    }
  };
  function tick() {
    if (options.millisecond) {
      microTick();
    } else {
      macroTick();
    }
  }
  const start = () => {
    if (!counting) {
      endTime = Date.now() + remain.value;
      counting = true;
      startRaf();
    }
  };
  const reset = (totalTime = options.time) => {
    pause();
    remain.value = totalTime;
  };
  common_vendor.onBeforeUnmount(pause);
  return {
    start,
    pause,
    reset,
    current
  };
}
exports.useCountDown = useCountDown;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/wot-design-uni/components/composables/useCountDown.js.map
