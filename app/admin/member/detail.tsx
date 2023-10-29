'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { API, Storage } from "aws-amplify"
import { Members } from "@/src/API"
import { FormikValues } from 'formik';
import * as yup from 'yup';
import { v4 as uuid } from 'uuid'
import { FcInspection } from 'react-icons/fc';
import { getMembers } from "@/src/graphql/queries"
import { createMembers, updateMembers } from '@/src/graphql/mutations'
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
  const [member, setMember] = useState<Members>({} as Members)
  const [loading, setloading] = useState(true)
  const [config, setConfig] = useState<TFormBuilderConfig | null>(null)

  const validationSchema = yup.object().shape({
    name: yup.string().required('이름을 입력해주새요.'),
    email: yup.string().email('이메일 형식으로 입력해주세요.').required('이메일을 입력해주새요.')
  });

  const profileImage = async(values: FormikValues) => {
    if (values.profileImage) {
      const imageName = values.profileImage.name;
      const imageKey = `${imageName}_${uuid()}`;
      const imageUrl = await Storage.put(imageKey, values.image, {
        level: 'public', // You can adjust the permissions as needed
      });
      return imageUrl.key
    } else {
      return null
    }
  }

  const submitHandler = async (values: FormikValues) => {
    try {
      await validationSchema.validate(values, { abortEarly: false });

      const profileImageUrl = await profileImage(values)
      if (member === null || member.id === undefined || member.id === null) {
        const newMember = {
          id: uuid(),
          name: values.name,
          email: values.email,
          contact: values.contact,
          weight: parseFloat(values.weight),
          approved: "false",
          profileImageUrl: profileImageUrl ?? undefined
        }
        const result = await API.graphql({
          query: createMembers,
          variables: {
            input: newMember
          },
          authMode: "AMAZON_COGNITO_USER_POOLS"
        })
        router.push('/admin/member/list/unapproved');
      } else {
        const updateMember = {
          id: member.id,
          name: values.name,
          email: values.email,
          contact: values.contact,
          weight: parseFloat(values.weight),
          approved: values.approved,
          profileImageUrl: profileImageUrl ?? member.profileImageUrl
        }
        console.log(updateMember)
        const result = await API.graphql({
          query: updateMembers,
          variables: {
            input: updateMember
          },
          authMode: "AMAZON_COGNITO_USER_POOLS"
        })
        router.push('/admin/member/list/approved');
      }
    } catch (e) {
      for(const error of (e as ResponseData)?.errors) {
        showToastMessage(error.message, "error")
      }

      for (const error of (e as ValidationError)?.errors) {
        showToastMessage(error, "error")
      }
    }
  }

  const getMemberById = async (id: string) => {
    const memberData: any = await API.graphql({
      query: getMembers,
      variables: {id}
    })
    const member: Members = memberData.data.getMembers
    setMember(member)
  }

  const fields = () => {
    const fieldList = []

    fieldList.push({ id: 'id', fieldType: 'hidden' })
    fieldList.push({ id: 'name', fieldType: 'text', label: '이름' })
    fieldList.push({ id: 'email', fieldType: 'text', label: '이메일' })
    fieldList.push({ id: 'contact', fieldType: 'text', label: '연락처' })
    fieldList.push({ id: 'weight', fieldType: 'text', label: '체급' })

    if (member === null || member.id === undefined || member.id === null) {
      fieldList.push({ id: 'approved', fieldType: 'hidden' })
    } else {
      fieldList.push({ id: 'approved', fieldType: 'radiobutton', label: '승인',
        options: [{id: 'true', value: '승인'},{id: 'false', value: '미승인'}] })
    }
    fieldList.push({ id: 'profileImage', fieldType: 'file', label: '프로파일 사진' })
    
    return fieldList;
  }

  useEffect(() => {
    const config = {
      id: 'member',
      title: member.id === undefined || member.id === null ? '신규 회원 추가' : '회원 정보 변경',
      fields: fields(),
      buttons: {
        submitEnabled: true,
        cancelEnabled: true
      },
      initialValues: member,
      validationSchema: yup.object({}),
      submitHandler: submitHandler,
    } as TFormBuilderConfig
    setConfig(config)
    setloading(false);
  }, [member])

  useEffect(() => {
    if (params !== undefined && params.id !== undefined) {
      getMemberById(params.id)
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
            회원 관리
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