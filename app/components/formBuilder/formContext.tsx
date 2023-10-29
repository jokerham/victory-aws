'use client'

import React, { createContext, useContext, ReactNode } from 'react'
import { FormikProps } from 'formik'

interface FormikContextProps {
  children: ReactNode;
  formik: FormikProps<any>
}

const FormikContext = createContext<FormikProps<any> | undefined>(undefined)

export function FormikProvider({ children, formik }: FormikContextProps) {
  //console.log(formik)
  return (
    <FormikContext.Provider value={formik}>
      {children}
    </FormikContext.Provider>
  )
}

export function useFormikContext() {
  const context = useContext(FormikContext)
  //console.log(context)

  if (context === undefined) {
    throw new Error('useFormikContext must be used within a FormikProvider');
  }

  return context
}
