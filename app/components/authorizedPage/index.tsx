'use client'

import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { useRouter } from "next/navigation";
import { PropsWithChildren, ReactNode } from "react";
import '@/configureAmplify'

function AuthorizedConfirmationPage(props: PropsWithChildren) {
  // Confirm sign in
  const router = useRouter()
  const { authStatus } = useAuthenticator((context) => [context.authStatus])
  const children = props.children as ReactNode
  if (authStatus === 'unauthenticated') {
    router.push("/")
  }

  return (
    <>
      { authStatus === 'authenticated' && children }
    </>
  )
}

export default function AuthorizedPage(props: PropsWithChildren) {
  const children = props.children as ReactNode

  return (
    <Authenticator.Provider>
      <AuthorizedConfirmationPage>
        { children }
      </AuthorizedConfirmationPage>
    </Authenticator.Provider>
  )
}

// https://ui.docs.amplify.aws/react/guides/auth-protected