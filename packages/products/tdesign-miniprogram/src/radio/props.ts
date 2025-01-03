/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdRadioProps } from './type';
const props: TdRadioProps = {
  /** 是否允许取消选中 */
  allowUncheck: {
    type: Boolean,
    value: false,
  },
  /** 是否为块级元素 */
  block: {
    type: Boolean,
    value: true,
  },
  /** 是否选中 */
  checked: {
    type: Boolean,
    value: null,
  },
  /** 是否选中，非受控属性 */
  defaultChecked: {
    type: Boolean,
    value: false,
  },
  /** 单选内容 */
  content: {
    type: String,
  },
  /** 是否禁用组件内容（content）触发选中 */
  contentDisabled: {
    type: Boolean,
    value: false,
  },
  /** 是否为禁用态 */
  disabled: {
    type: null,
    value: undefined,
  },
  /** 自定义选中图标和非选中图标。使用 Array 时表示：`[选中态图标，非选中态图标]`。使用 String 时，值为 circle 表示填充型图标、值为 line 表示描边型图标、值为 dot 表示圆点图标，值为 slot 时使用插槽 */
  icon: {
    type: null,
    value: 'circle',
  },
  /** 主文案 */
  label: {
    type: String,
  },
  /** 内容最大行数限制 */
  maxContentRow: {
    type: Number,
    value: 5,
  },
  /** 主文案最大行数限制 */
  maxLabelRow: {
    type: Number,
    value: 3,
  },
  /** HTML 元素原生属性 */
  name: {
    type: String,
    value: '',
  },
  /** 复选框和内容相对位置。优先级高于 RadioGroup.placement。Radio 单独存在时，默认值为 left。如果父组件存在 RadioGroup，默认值便由 RadioGroup.placement 决定 */
  placement: {
    type: String,
  },
  /** 只读状态 */
  readonly: {
    type: null,
    value: undefined,
  },
  /** 单选按钮的值 */
  value: {
    type: null,
    value: false,
  },
};

export default props;
