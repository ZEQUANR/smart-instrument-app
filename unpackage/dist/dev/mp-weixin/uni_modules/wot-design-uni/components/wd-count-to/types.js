"use strict";
const uni_modules_wotDesignUni_components_common_props = require("../common/props.js");
const countToProps = {
  ...uni_modules_wotDesignUni_components_common_props.baseProps,
  // 字体大小
  fontSize: uni_modules_wotDesignUni_components_common_props.makeNumberProp(16),
  // 文本颜色
  color: uni_modules_wotDesignUni_components_common_props.makeStringProp(""),
  /**
   * 主题类型
   * 类型：string
   * 可选值：'default' /'primary' / 'error' / 'warning' / 'success'
   * 默认值：'default'
   */
  type: uni_modules_wotDesignUni_components_common_props.makeStringProp("default"),
  /**
   * 起始值
   * 类型：number
   * 默认值：0
   */
  startVal: uni_modules_wotDesignUni_components_common_props.makeNumberProp(0),
  /**
   * 最终值
   * 类型：number
   * 默认值：2021
   */
  endVal: uni_modules_wotDesignUni_components_common_props.makeNumberProp(2024),
  /**
   * 从起始值到结束值数字变动的时间，单位毫秒
   * 类型：number
   * 默认值：3000
   */
  duration: uni_modules_wotDesignUni_components_common_props.makeNumberProp(3e3),
  /**
   * 是否自动开始
   * 类型：boolean
   * 默认值：true
   */
  autoStart: uni_modules_wotDesignUni_components_common_props.makeBooleanProp(true),
  /**
   * 保留的小数位数
   * 类型：number
   * 默认值：0
   * 校验：大于等于0
   */
  decimals: {
    type: Number,
    required: false,
    default: 0,
    validator(value) {
      return value >= 0;
    }
  },
  // 小数点
  decimal: uni_modules_wotDesignUni_components_common_props.makeStringProp("."),
  // 三位三位的隔开效果
  separator: uni_modules_wotDesignUni_components_common_props.makeStringProp(","),
  /**
   * 前缀
   * 类型：string
   * 默认值：''
   * @example '¥' 人民币前缀
   */
  prefix: uni_modules_wotDesignUni_components_common_props.makeStringProp(""),
  /**
   * 后缀
   * 类型：string
   * 默认值：''
   */
  suffix: uni_modules_wotDesignUni_components_common_props.makeStringProp(""),
  /**
   * 是否具有连贯性
   * 类型：boolean
   * 默认值：true
   */
  useEasing: uni_modules_wotDesignUni_components_common_props.makeBooleanProp(true),
  /**
   * 自定义根节点样式
   */
  customStyle: uni_modules_wotDesignUni_components_common_props.makeStringProp(""),
  /**
   * 自定义根节点样式类
   */
  customClass: uni_modules_wotDesignUni_components_common_props.makeStringProp("")
};
exports.countToProps = countToProps;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/wot-design-uni/components/wd-count-to/types.js.map
