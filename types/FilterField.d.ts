import { VNode } from 'vue'

interface SelectOption {
  label: string
  value: any
  children?: SelectOption[]
}

interface FilterFieldBase {
  /** 字段参数名 */
  model: string

  /** 字段文本说明 */
  label: string

  key?: string

  width: string | number
}

export type FieldType =
  | 'label'
  | 'text'
  | 'number'
  | 'select'
  | 'multipleSelect'
  | 'date'
  | 'dateRange'
  | 'timeSelect'
  | 'timePicker'
  | 'timePickerRange'
  | 'dateTime'
  | 'dateTimeRange'
  | 'cascader'

export interface FilterFieldObjectDefinition extends FilterFieldBase {
  type: FieldType

  // /** 显示为禁用状态 */
  // disabled?: boolean

  /** 类型为 select 或 multipleSelect 时的选项配置 */
  options?:
    | SelectOption[]
    | Promise<SelectOption[]>
    | ((done: (options: SelectOption[]) => void) => void)

  /** 可传入对应控件原始的 props */
  componentProps?: { [k: string]: any }

  /** 可传入对应控件原始的 events */
  componentEvents?: { [k: string]: () => void }

  /** 可传入对应控件原始的 slots */
  componentSlots?: { [k: string]: any }
}

export interface FilterFieldRenderDefinition extends FilterFieldBase {
  render: () => VNode
}

export type FilterField =
  | FilterFieldObjectDefinition
  | FilterFieldRenderDefinition
