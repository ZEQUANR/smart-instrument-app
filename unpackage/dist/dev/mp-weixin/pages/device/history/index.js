"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_wd_tab2 = common_vendor.resolveComponent("wd-tab");
  const _easycom_wd_tabs2 = common_vendor.resolveComponent("wd-tabs");
  (_easycom_wd_tab2 + _easycom_wd_tabs2)();
}
const _easycom_wd_tab = () => "../../../uni_modules/wot-design-uni/components/wd-tab/wd-tab.js";
const _easycom_wd_tabs = () => "../../../uni_modules/wot-design-uni/components/wd-tabs/wd-tabs.js";
if (!Math) {
  (_easycom_wd_tab + _easycom_wd_tabs)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.f(4, (item, k0, i0) => {
      return {
        a: common_vendor.t(item),
        b: "2856da1d-1-" + i0 + ",2856da1d-0",
        c: common_vendor.p({
          title: `标签${item}`
        }),
        d: item
      };
    }),
    b: common_vendor.o(($event) => _ctx.tab = $event),
    c: common_vendor.p({
      ["custom-class"]: "history-container-tabs",
      swipeable: true,
      modelValue: _ctx.tab
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/device/history/index.js.map
