import FormField, { TFormField } from './formField'

export interface IFormBodyProps {
  config: {
    fields: TFormField[]
  }
}

export default function FormBody(props: IFormBodyProps) {
  return (
    <div className="form_body">
      <div className="form_body__fields">
        {
          props.config.fields.map((field) => (
            (
              <FormField key={field.id} config={{field: field}}/>
            ))
          )
        }
      </div>
    </div>
  )
}