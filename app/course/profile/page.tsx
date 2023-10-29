'use client'

import { Button, withAuthenticator } from "@aws-amplify/ui-react"
import { Auth } from 'aws-amplify'
import { useState, useEffect } from "react"
import '@/configureAmplify'

interface User {
  username: String
  attributes: {
    email: String
  }
}

const Profile = () => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    checkUser();
  }, [])

  const checkUser = async () => {
    const user = await Auth.currentAuthenticatedUser()
    setUser(user)
  }

  const signOut = async () => {
    try {
      await Auth.signOut({global: true})
    } catch (error) {
      console.log(error)
    }
  }

  if (!user) return null
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-wide mt-6">
        Profile
      </h1>
      <h1 className="font-medium text-gray-500 my-2">
        { user.username }
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        {user.attributes.email}
      </p>
      <Button onClick={signOut}>Sign Out</Button>
    </div>
  )
}

export default withAuthenticator(Profile)