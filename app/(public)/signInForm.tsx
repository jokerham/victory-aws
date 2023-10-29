import { useRouter } from 'next/navigation'
import { useAuthenticator } from '@aws-amplify/ui-react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Auth } from 'aws-amplify'
import anime from 'animejs'
import Swal from 'sweetalert2'
import { ToastContainer, showToastMessage } from '@/app/components/toastMessage'
import { SignInLine } from './signInLine'
import { KeyboardEvent } from 'react'
import '@/configureAmplify'

interface LoginForm {
  email: string,
  password: string
}

export default function SignInForm() {
  const router = useRouter()

  // Confirm sign in
  const { authStatus } = useAuthenticator((context) => [context.authStatus])
  if (authStatus === 'authenticated') {
    router.push('/admin')
  }

  // Animation for line on focus
  if (typeof document !== 'undefined') {
    let current: any = null

    document.querySelector('#email')?.addEventListener('focus', (e) => {
      if (current) current.pause()
      current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: 0,
          duration: 700,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: '240 1386',
          duration: 700,
          easing: 'easeOutQuart'
        }
      })
    })
  
    document.querySelector('#password')?.addEventListener('focus', (e) => {
      if (current) current.pause()
      current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: -336,
          duration: 700,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: '240 1386',
          duration: 700,
          easing: 'easeOutQuart'
        }
      });
    });
  
    document.querySelector('#submit')?.addEventListener('focus', (e) => {
      if (current) current.pause();
      current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: -730,
          duration: 700,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: '530 1386',
          duration: 700,
          easing: 'easeOutQuart'
        }
      });
    });
  
    document.querySelector('#submit > input')?.addEventListener('focus', (e) => {
      if (current) current.pause();
      current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: -730,
          duration: 700,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: '530 1386',
          duration: 700,
          easing: 'easeOutQuart'
        }
      });
    });
  }

  // Form related functions  
  const initialValue = {email: '', password: ''}

  const schema = Yup.object().shape({
    email: Yup.string()
      .typeError('')
      .required('사용자 이메일을 입력하세요.')
      .email('이메일 형식으로 입력해주세요.'),
    password: Yup.string()
      .typeError('')
      .required('비밀번호를 입력해주세요.'),
  })

  const submitForm = async (values: LoginForm) => {
    schema.validate(values, {abortEarly: false})
      .then(validData => {
        signInWithEmailAndPassword(validData)
      })
      .catch(error => {
        if (error instanceof Yup.ValidationError) {
          error.inner.forEach(error => {
            showToastMessage(error.message, "error")
          })
        } else {
          console.log(error)
        }
      })
  }

  const signInWithEmailAndPassword = (values: LoginForm) => {
    Auth.signIn(values.email, values.password)
      .then(() => {
        console.log("Logged in")
        router.push('/admin')
      })
      .catch(error => {
        const footerHtml = `<a onClick='Auth.forgotPassword("${values.email}");'>패스워드 초기화</a>`
        Swal.fire({
          icon: 'error',
          title: '로그인 오류',
          text: error,
          showCancelButton: true,
          cancelButtonText: '패스워드 초기화',
          confirmButtonText: '확인'
        }).then((result) => {
          if (!result.isConfirmed) {
            Auth.forgotPassword(values.email)
          }
        })
      })
  }

  return (
    <div>
      <SignInLine />
      <div className="form">
        <Formik
          initialValues={initialValue}
          onSubmit={submitForm}>
          {(formik) => {
            const { values, handleSubmit, handleChange } = formik

            const keyDown = (event: KeyboardEvent) => {
              if (event.code === 'Space') {
                handleSubmit();
              }
            }

            return (
              <form id="signInForm" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={values.email} onChange={handleChange} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={values.password} onChange={handleChange} />
                <div id="submit" tabIndex={0} onKeyDown={keyDown}>
                  <input type="submit" value="Submit" />
                </div>
              </form>
            )
          }}
        </Formik>
        <ToastContainer />
      </div>
    </div>
  )
}