import { FormikValues, FormikProps } from "formik"
import { ChangeEvent } from "react"
import { useFormikContext } from "./formContext"
import { ClassNames } from "@emotion/react"

export type TFormField = {
  id: string,
  fieldType: string,
  label?: string,
  readOnly?: boolean,
  classNames?: [string],
  options?: [{id: string, value: string} | string]
  accept?: string
  onChange?: (values: FormikValues) => {}
}

export interface IFormFieldProps {
  config: {
    field: TFormField
  }
}

export default function FormField(props: IFormFieldProps) {
  const formik = useFormikContext() as FormikProps<any>
  const values = formik.values
  const handleChange = formik.handleChange

  const field = props.config.field
  let fieldType = field.fieldType
  let readOnly = field.readOnly !== undefined ? false : field.readOnly 
  const className = []
  let value = 
    ( values !== undefined && 
      values !== null &&
      values.hasOwnProperty(field.id) &&
      values[field.id] !== undefined &&
      values[field.id] !== null) ? 
      values[field.id] : 
      (fieldType === 'number') ? 0 :
      '';
  
  const onChange = (e: ChangeEvent) => {
    console.log(e)
    handleChange(e)
    //setFieldForOnChangeHandler(e)
  }

  const setFieldForOnChangeHandler = (e: Event) => {
    // if (props.config.field.onChange != null && e.target !== null) {
    //   let values = formik.values as FormikValues
    //   let target = e.target as HTMLInputElement
    //   values[target.id] = target.value;
    //   let changedValues = props.config.field.onChange(values);
    //   for (const key in values) {
    //     const value = values[key];
    //     if (value.value !== formik.values[value.id]) {
    //       formik.setFieldValue(value.id, value.value);
    //     }
    //   }
    // }
  }

  if (field.fieldType in ['number','contact','member','institute','readonly']) {
    fieldType = 'text'
  }

  if (field.fieldType in ['member','institute']) {
    className.push(field.fieldType + 'Selector')
    readOnly = true
  }

  const labelElem = (
    <label htmlFor={field.id}>{field.label}</label>
  )

  const selectElem = (
    <select
      id={field.id}
      name={field.id}
      className={className.join(' ')}
      value={value}
      onChange={onChange}>
      <option key='' value=''></option>
    {
        props.config.field.options?.map(option => (
          (typeof option === "string") ? (
            <option key={option} value={option}>{option}</option>
          ) : (
            <option key={option.id} value={option.id}>{option.value}</option>
          )
        ))
      }
    </select>
  )

  const radioElem = (
    <div className="inputRadio">
      {
        props.config.field.options?.map(option => (
          <div key={typeof option === "string" ? option : option.id}>
            <input 
              type="radio" 
              id={`${field.id}${(typeof option === "string" ? option : option.id)}`}
              name={field.id}
              value={typeof option === "string" ? option : option.id}
              checked={value === (typeof option === "string" ? option : option.id)}
              onChange={onChange} />
            {typeof option === "string" ? option : option.value ?? ""}
          </div>
        ))
      }
    </div>
  )

  const fieldProps = {
    id: props.config.field.id,
    name: props.config.field.id,
    type: fieldType,
    readOnly: props.config.field.readOnly,
    className: className.join(' '),
    value: value,
    accept: props.config.field.accept ?? undefined,
    onChange
  }
  const fieldElem = (
    <input {...fieldProps}/>
  )

  if (field.fieldType === 'hidden') {
    return (
      fieldElem
    )
  } else {
    return (
      <div>
        { labelElem }
        { field.fieldType === 'select' ? selectElem : 
          field.fieldType === 'radiobutton' ? radioElem :
          fieldElem }
      </div>
    )
  }
}