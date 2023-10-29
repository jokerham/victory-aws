'use client'

import { Authenticator } from "@aws-amplify/ui-react";
import '@/configureAmplify'

export default function SignInPage() {
  return (
    <Authenticator>
      Hello World
    </Authenticator>
  )
}