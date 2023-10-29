//'use client'

import { FormikValues, useFormik } from "formik"
import * as Yup from 'yup'
import { showToastMessage } from "@/app/components/toastMessage"
import ArticleCard from "@/app/components/article/card"
import { FormikProvider } from "./formContext"
import FormBody from "./formBody"
import { TFormField } from './formField'
import FormButtons, { TFormButtons } from './formButtons'
import { useEffect } from "react"

export type TFormBuilderConfig = {
  id: string,
  title: String,
  validationSchema: any,
  fields: TFormField[],
  submitHandler: ((values: FormikValues) => void | Promise<any>) | (() => {}),
  initialValues: FormikValues,
  buttons: TFormButtons
}

interface IFormBuilderProps {
  config: TFormBuilderConfig
}

export default function FormBuilder(props: IFormBuilderProps) {
  const { config } = props

  const initialValues = config.initialValues

  const submitHandler = async (values: any) => {
    try {
      await config.validationSchema.validateSync(values, {abortEarly: false});
      config.submitHandler(values);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        error.inner.forEach(error => {
          showToastMessage(error.message, 'error')
        })
      } else {
        console.log(error)
      }
    }
  }

  const onSubmit = submitHandler
  const validationSchema = config.validationSchema
  const enableReinitialize = true

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    enableReinitialize
  })

  return (
    <ArticleCard>
      <div className="form_header">
        <div className="form_header__title">
          {config.title}
        </div>
      </div>
      <FormikProvider formik={formik}>
        <form id={config.id}>
          <FormBody config={{fields: config.fields}} />
          <FormButtons config={config.buttons} />
        </form>
      </FormikProvider>
    </ArticleCard>
  )
}

// Reference
// - https://codesandbox.io/s/multiple-form-with-one-formik-ifq3l?file=/index.js
// - https://formik.org/docs/api/formik#enablereinitialize-boolean