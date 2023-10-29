'use client'

import { useState, useEffect } from "react"
import { API } from "aws-amplify"
import { listInstitutes, getInstitute } from "@/src/graphql/queries"
import { Institute } from "@/src/API"
import '../../../../configureAmplify'

type InstituteParam = { id: string }

export default function Page ({params}: {params: InstituteParam})  {
  const id = params.id
  const [institute, setInstitute] = useState<Institute | null>(null)

  const getInstituteById = async (id: string) => {
    const insititueData: any = await API.graphql({
      query: getInstitute,
      variables: {id}
    })
    const institute: Institute = insititueData.data.getInstitute
    setInstitute(institute)
  }

  useEffect(() => {
    getInstituteById(id)
  }, [])
   
  if (institute ===  null) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <div>Loaded: {institute.title} / {institute.location}</div>
  ) 
}
