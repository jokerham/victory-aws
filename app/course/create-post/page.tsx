'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { API } from 'aws-amplify'
import { v4 as uuid } from 'uuid'
import { createInstitute } from '../../../src/graphql/mutations'
import SimpleMDE from 'react-simplemde-editor'
import "easymde/dist/easymde.min.css"
import '@/configureAmplify'

const CreatePost = () => {
  const initialState = { id: "", title: "", location: "" }
  const [institute, setInstitute] = useState(initialState)
  const { title, location } = institute
  const router = useRouter()

  const onChange = (e: {target: {name: string, value: string}}) => {
    setInstitute(() => ({
      ...institute,
       [e.target.name]: e.target.value
    }))
  }

  const createNewInstitute = async () => {
    if (!title || !location) return;
    const id = uuid()
    institute.id = id

    await API.graphql({
      query: createInstitute,
      variables: {
        input: institute
      },
      authMode: "AMAZON_COGNITO_USER_POOLS"
    })
    router.push(`/institute/${id}`)
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-wide mt-6">Create New Post</h1>
      <input
        onChange={onChange}
        name="title"
        placeholder="Title"
        value={institute.title}
        className="border=b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placholder-gray-500 y-2" />
      <SimpleMDE
        value={institute.location}
        onChange={(value) => setInstitute({...institute, location: value})}
        />
      <button
        type="button"
        className="mb-4 bg-blue-600 text-white font-semibold px-8 py-2 rounded-lg"
        onClick={createNewInstitute}>
        Create Post
      </button>
    </div>
  )
}

export default withAuthenticator(CreatePost)