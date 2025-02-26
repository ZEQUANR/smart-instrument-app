"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
if (!Array) {
  const _easycom_wd_search2 = common_vendor.resolveComponent("wd-search");
  const _easycom_wd_count_to2 = common_vendor.resolveComponent("wd-count-to");
  const _easycom_wd_loadmore2 = common_vendor.resolveComponent("wd-loadmore");
  (_easycom_wd_search2 + _easycom_wd_count_to2 + _easycom_wd_loadmore2)();
}
const _easycom_wd_search = () => "../../../uni_modules/wot-design-uni/components/wd-search/wd-search.js";
const _easycom_wd_count_to = () => "../../../uni_modules/wot-design-uni/components/wd-count-to/wd-count-to.js";
const _easycom_wd_loadmore = () => "../../../uni_modules/wot-design-uni/components/wd-loadmore/wd-loadmore.js";
if (!Math) {
  (_easycom_wd_search + _easycom_wd_count_to + _easycom_wd_loadmore)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const state = common_vendor.ref("loading");
    const num = common_vendor.ref(0);
    const max = common_vendor.ref(60);
    common_vendor.onReachBottom(() => {
      if (num.value === 45) {
        state.value = "error";
      } else if (num.value < max.value) {
        loadmore();
      } else if (num.value === max.value) {
        state.value = "finished";
      }
    });
    common_vendor.onLoad(() => {
      loadmore();
    });
    function loadmore() {
      setTimeout(() => {
        num.value = num.value + 10;
        state.value = "loading";
      }, 200);
    }
    const goToInfo = () => {
      common_vendor.index.navigateTo({
        url: "/pages/device/info/index?id=1&name=uniapp"
      });
    };
    const goToHistory = () => {
      common_vendor.index.navigateTo({
        url: "/pages/device/history/index?id=1&name=uniapp"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          ["hide-cancel"]: true,
          ["placeholder-left"]: true
        }),
        b: common_vendor.f(10, (index, k0, i0) => {
          return {
            a: "b3687dd6-1-" + i0,
            b: common_vendor.o(goToInfo, index),
            c: common_vendor.o(goToHistory, index),
            d: index
          };
        }),
        c: common_assets._imports_0,
        d: common_assets._imports_1,
        e: common_assets._imports_2,
        f: common_vendor.p({
          endVal: 2024,
          suffix: "Nm³/h",
          fontSize: 24,
          color: "#1e9fff"
        }),
        g: common_assets._imports_3,
        h: common_assets._imports_4,
        i: common_vendor.o(loadmore),
        j: common_vendor.p({
          state: state.value
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b3687dd6"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/device/list/index.js.map
