'use client'

import { Authenticator } from '@aws-amplify/ui-react';
import './signIn.css'
import SignInForm from './signInForm';

export default function SignInPage() {

  return (
    <div className="background">
      <div className="page">
        <div className="container">
          <div className="left">
            <div className="login">Login</div>
            <div className="eula">By logging in you agree to the ridiculously long terms that you didn't bother to read</div>
          </div>
          <div className="right">
            <Authenticator.Provider>
              <SignInForm/>
            </Authenticator.Provider>
          </div>
        </div> 
      </div>
    </div>
  );
}

// Reference
// - https://codepen.io/ainalem/pen/EQXjOR
// - https://velog.io/@leemember/React-Form-Validation-%ED%8F%BC%ED%83%9C%EA%B7%B8-%EC%9C%A0%ED%9A%A8%EC%84%B1-%EA%B2%80%EC%A6%9D%EC%9D%84-%EC%89%BD%EA%B2%8C-%EB%8F%84%EC%99%80%EC%A3%BC%EB%8A%94-Formik-%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95
// - https://www.freecodecamp.org/news/how-to-persist-a-logged-in-user-in-react/
// - https://www.formbackend.com/nextjs-form/
// [Loading SVG in Typescript NextJS]
// - https://stackoverflow.com/questions/55175445/cant-import-svg-into-next-js
// - https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration/68129058#68129058
