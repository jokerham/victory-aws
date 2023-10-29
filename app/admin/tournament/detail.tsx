'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { API } from "aws-amplify"
import { Tournaments } from "@/src/API"
import { FormikValues } from 'formik';
import * as yup from 'yup';
import { v4 as uuid } from 'uuid'
import { FcInspection } from 'react-icons/fc';
import { getTournaments } from "@/src/graphql/queries"
import { createTournaments, updateTournaments } from '@/src/graphql/mutations'
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
  const [tournament, setTournament] = useState<Tournaments>({} as Tournaments)
  const [loading, setloading] = useState(true)
  const [config, setConfig] = useState<TFormBuilderConfig | null>(null)

  const validationSchema = yup.object().shape({
    title: yup.string().required('대회명을 입력해주새요.'),
    location: yup.string().required('대회 장소를 입력해주새요.')
  });

  const submitHandler = async (values: FormikValues) => {
    try {
      await validationSchema.validate(values, { abortEarly: false });

      if (tournament === null || tournament.id === undefined || tournament.id === null) {
        const newTournament = {
          id: uuid(),
          title: values.title,
          location: values.location,
          eventDate: values.eventDate,
          deuDate: values.deuDate,
          rings: values.rings,
        }
        const result = await API.graphql({
          query: createTournaments,
          variables: { input: newTournament },
          authMode: "AMAZON_COGNITO_USER_POOLS"
        })
      } else {
        const updateTournament = {
          id: tournament.id,
          title: values.title,
          location: values.location,
          eventDate: values.eventDate,
          dueDate: values.dueDate,
          rings: values.rings,
        }
        console.log(updateTournament)
        const result = await API.graphql({
          query: updateTournaments,
          variables: { input: updateTournament },
          authMode: "AMAZON_COGNITO_USER_POOLS"
        })
      }
      router.push('/admin/tournament/list');
    } catch (e) {
      for(const error of (e as ResponseData)?.errors) {
        showToastMessage(error.message, "error")
      }

      for (const error of (e as ValidationError)?.errors) {
        showToastMessage(error, "error")
      }
    }
  }

  const getTournamentById = async (id: string) => {
    const tournamentData: any = await API.graphql({
      query: getTournaments,
      variables: {id}
    })
    const tournament: Tournaments = tournamentData.data.getTournaments
    setTournament(tournament)
  }

  const fields = () => {
    const fieldList = []

    fieldList.push({ id: 'id', fieldType: 'hidden' })
    fieldList.push({ id: 'title', fieldType: 'text', label: '대회명' })
    fieldList.push({ id: 'location', fieldType: 'text', label: '장소' })
    fieldList.push({ id: 'eventDate', fieldType: 'date', label: '개최일' })
    fieldList.push({ id: 'dueDate', fieldType: 'date', label: '신청마감일' })
    fieldList.push({ id: 'rings', fieldType: 'number', label: '경기장 수' })
    
    return fieldList;
  }

  useEffect(() => {
    const config = {
      id: 'tournament',
      title: tournament.id === undefined || tournament.id === null ? '신규 대회 추가' : '대회 정보 변경',
      fields: fields(),
      buttons: {
        submitEnabled: true,
        cancelEnabled: true
      },
      initialValues: tournament,
      validationSchema: yup.object({}),
      submitHandler: submitHandler,
    } as TFormBuilderConfig
    setConfig(config)
    setloading(false);
  }, [tournament])

  useEffect(() => {
    if (params !== undefined && params.id !== undefined) {
      getTournamentById(params.id)
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