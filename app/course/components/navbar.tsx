'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import React from 'react'
import { Auth, Hub } from 'aws-amplify'
import '@/configureAmplify'

const Navbar = () => {
  const [signedUser, setSignedUser] = useState(false)
  
  const authListener = async () => {
    Hub.listen("auth", (data) => {
      console.log(data)
      switch(data.payload.event) {
        case "signIn":
          return setSignedUser(true);
          case "signOut":
            return setSignedUser(false);
      }
    })

    try {
      await Auth.currentAuthenticatedUser()
      setSignedUser(true)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    authListener()
  }, [])

  return (
    <nav className='flex justify-center pt-3 pb-3 space-x-4 border-b bg-cyan-500 border-gray-300'>
      {
        [
          ["Home", "/"],
          ["Create Post", "/create-post"],
          ["Profile", "/profile"]
        ].map(([title, url], index) => (
          <Link href={url} key={index} 
            className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>
            {title}
          </Link>
        ))
      }
      {
        signedUser && (
          <Link href='/my-posts'
            className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>
            My Post
          </Link>
        )
      }
    </nav>
  )
}

export { Navbar }