'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Auth } from 'aws-amplify'
import '@/configureAmplify'
import { FaSignOutAlt } from 'react-icons/fa';
import { useAddEventListeners, toggleClass } from './services/uihelper'

export default function LayoutHeader() {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const user = Auth.currentAuthenticatedUser()
  }, [])

  async function logoutHandler(e: Event) {
    await Auth.signOut();
    router.push('/');
  }

  function userDropdownHandler(e: Event) {
    toggleClass(
      document.querySelector('.header__avatar > .dropdown') as HTMLElement,
      'dropdown--active',
    );
  }

  useAddEventListeners([
    { class: '#logout', event: 'click', handler: logoutHandler },
    { class: '.header__avatar', event: 'click', handler: userDropdownHandler },
  ]);

  return (
    <header className="header">
      <i className="fas fa-bars header__menu"></i>
      <div className="header__search">
        <input className="header__input" placeholder="Search..." />
      </div>
      <div className="header__avatar">
        <div className="dropdown">
          <ul className="dropdown__list">
            <li className="dropdown__list-item" id="logout">
              <span className="dropdown__icon"><FaSignOutAlt /></span>
              <span className="dropdown__title">log out</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
