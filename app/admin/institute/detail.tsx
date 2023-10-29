'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { API } from "aws-amplify"
import { Institute } from "@/src/API"
import { FormikValues, getIn } from 'formik';
import * as yup from 'yup';
import { v4 as uuid } from 'uuid'
import { FcInspection } from 'react-icons/fc';
import { getInstitute } from "@/src/graphql/queries"
import { createInstitute, updateInstitute } from '@/src/graphql/mutations'
import FormBuilder, { TFormBuilderConfig } from '@/app/components/formBuilder'
import Article from '@/app/components/article';
import '@/configureAmplify'
import { showToastMessage } from '@/app/components/toastMessage';

type ErrorObject = {
  path: null;
  locations: null;
  message: string;
}

type ValidationError = {
  value: string,
  errors: [string],
  inner: any,
  name: string,
  message: string
}

type ResponseData = {
  data: null;
  errors: ErrorObject[]
}

export default function MemberDetailPage ({params}: {params?: { id: string }}) {
  const router = useRouter()
  const [institute, setInstitute] = useState<Institute>({} as Institute)
  const [loading, setloading] = useState(true)
  const [config, setConfig] = useState<TFormBuilderConfig | null>(null)

  const validationSchema = yup.object().shape({
    title: yup.string().required('단체명을 입력해주새요.'),
    location: yup.string().required('주소를 입력해주새요.')
  });

  const submitHandler = async (values: FormikValues) => {
    try {
      await validationSchema.validate(values, { abortEarly: false });

      if (institute === null || institute.id === undefined || institute.id === null) {
        const newInstituteData = {
          id: uuid(),
          title: values.title,
          location: values.location,
          representativeId: values.representativeId,
        }
        const result = await API.graphql({
          query: createInstitute,
          variables: { input: newInstituteData },
          authMode: "AMAZON_COGNITO_USER_POOLS"
        })
      } else {
        const updateInstituteData = {
          id: institute.id,
          title: values.title,
          location: values.location,
          evenrepresentativeIdtDate: values.representativeId,
        }
        const result = await API.graphql({
          query: updateInstitute,
          variables: { input: updateInstituteData },
          authMode: "AMAZON_COGNITO_USER_POOLS"
        })
      }
      router.push('/admin/institute/list');
    } catch (e) {
      for(const error of (e as ResponseData)?.errors) {
        showToastMessage(error.message, "error")
      }

      for (const error of (e as ValidationError)?.errors) {
        showToastMessage(error, "error")
      }
    }
  }

  const getInstituteById = async (id: string) => {
    const tournamentData: any = await API.graphql({
      query: getInstitute,
      variables: {id}
    })
    const institute: Institute = tournamentData.data.getInstitute
    setInstitute(institute)
  }

  const fields = () => {
    const fieldList = []

    fieldList.push({ id: 'id', fieldType: 'hidden' })
    fieldList.push({ id: 'title', fieldType: 'text', label: '단체명' })
    fieldList.push({ id: 'location', fieldType: 'text', label: '주소' })
    fieldList.push({ id: 'representativeId', fieldType: 'member', label: '대표자' })
    
    return fieldList;
  }

  useEffect(() => {
    const config = {
      id: 'institute',
      title: institute.id === undefined || institute.id === null ? '신규 단체 추가' : '단체 정보 변경',
      fields: fields(),
      buttons: {
        submitEnabled: true,
        cancelEnabled: true
      },
      initialValues: institute,
      validationSchema: yup.object({}),
      submitHandler: submitHandler,
    } as TFormBuilderConfig
    setConfig(config)
    setloading(false);
  }, [institute])

  useEffect(() => {
    if (params !== undefined && params.id !== undefined) {
      getInstituteById(params.id)
    }
  }, [])

  if (loading || config===null) {
    return (
      <div />
    )
  } else {
    return (
      <main className="main">
        <div className="page-header">
          <div className="page-header__title">
            <FcInspection />
            대회 관리
          </div>
        </div>
        <Article>
          <FormBuilder
            config={config}
          />
        </Article>
      </main>
    )
  }
}

// http://localhost:3000/admin/member/edit/f981616f-f895-4669-95e1-ce129492c521