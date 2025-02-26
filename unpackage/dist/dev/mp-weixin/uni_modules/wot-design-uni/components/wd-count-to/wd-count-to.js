"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_wotDesignUni_components_wdCountTo_types = require("./types.js");
const uni_modules_wotDesignUni_components_common_util = require("../common/util.js");
const uni_modules_wotDesignUni_components_composables_useCountDown = require("../composables/useCountDown.js");
if (!Math) {
  wdText();
}
const wdText = () => "../wd-text/wd-text.js";
const __default__ = {
  name: "wd-count-to",
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: "shared"
  }
};
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  ...__default__,
  props: uni_modules_wotDesignUni_components_wdCountTo_types.countToProps,
  emits: ["mounted", "finish"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { start, pause, reset, current } = uni_modules_wotDesignUni_components_composables_useCountDown.useCountDown({
      time: props.duration,
      millisecond: true,
      onFinish: () => emit("finish")
    });
    const rootClass = common_vendor.computed(() => {
      return `wd-count-to ${props.customClass}`;
    });
    const timeText = common_vendor.computed(() => {
      return parseFormat(current.value.total);
    });
    common_vendor.watch([() => props.startVal, () => props.endVal, () => props.duration], resetTime, { immediate: false });
    common_vendor.onMounted(() => {
      resetTime();
      emit("mounted");
    });
    function resetTime() {
      reset(props.duration);
      if (props.autoStart) {
        start();
      }
    }
    function parseFormat(remain) {
      const { startVal, endVal, duration, useEasing } = props;
      const progress = duration - remain;
      const isPositive = startVal > endVal;
      const progressRatio = progress / duration;
      let currentVal;
      if (useEasing) {
        if (isPositive) {
          currentVal = startVal - uni_modules_wotDesignUni_components_common_util.easingFn(progress, 0, startVal - endVal, duration) || 0;
        } else {
          currentVal = uni_modules_wotDesignUni_components_common_util.easingFn(progress, startVal, endVal - startVal, duration);
        }
      } else {
        if (isPositive) {
          currentVal = startVal - (startVal - endVal) * progressRatio;
        } else {
          currentVal = startVal + (endVal - startVal) * progressRatio;
        }
      }
      currentVal = isPositive ? Math.max(endVal, currentVal) : Math.min(endVal, currentVal);
      return formatNumber(currentVal);
    }
    function formatNumber(num) {
      if (typeof num !== "number") {
        num = parseFloat(num);
        if (isNaN(num)) {
          return "0";
        }
      }
      num = num.toFixed(props.decimals);
      const parts = num.split(".");
      let integerPart = parts[0];
      const decimalPart = parts.length > 1 ? props.decimal + parts[1] : "";
      const rgx = /(\d+)(\d{3})/;
      if (props.separator && !uni_modules_wotDesignUni_components_common_util.isNumber(props.separator)) {
        while (rgx.test(integerPart)) {
          integerPart = integerPart.replace(rgx, "$1" + props.separator + "$2");
        }
      }
      return integerPart + decimalPart;
    }
    __expose({ start, reset: resetTime, pause });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: props.type,
          color: props.color,
          size: `${props.fontSize * 0.7}px`,
          text: props.prefix
        }),
        b: common_vendor.p({
          type: props.type,
          color: props.color,
          size: `${props.fontSize}px`,
          text: timeText.value
        }),
        c: common_vendor.p({
          type: props.type,
          color: props.color,
          size: `${props.fontSize * 0.7}px`,
          text: props.suffix
        }),
        d: common_vendor.n(rootClass.value)
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1af4629d"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/wot-design-uni/components/wd-count-to/wd-count-to.js.map
