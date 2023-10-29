'use client'

import { Auth } from 'aws-amplify'
import '@/configureAmplify'
import { useEffect, useState } from 'react';

export default function DashboardHeader() {
  const [username, setUsername] = useState('')
  const today = new Date();
  
  const getData = async () => {
    const user = await Auth.currentAuthenticatedUser();
    const userAttributes = await Auth.userAttributes(user);
    const username = userAttributes.find(attribute => attribute.Name == 'name')
    if (username !== undefined)
      setUsername(username.Value)
  }
  
  useEffect(() => {
    getData()
  }, [])
  
  return (
    <div className="main-header">
      <div className="main-header__intro-wrapper">
        <div className="main-header__welcome">
          <div className="main-header__welcome-title text-light"><strong>{username}</strong>님 안녕하세요.</div>
          <div className="main-header__welcome-subtitle text-light">오늘은 {today.getFullYear()}년 {today.getMonth()+1}월 {today.getDate()}일 입니다.</div>
        </div>
        <div className="quickview">
          <div className="quickview__item">
            <div className="quickview__item-total">{0}</div>
            <div className="quickview__item-description">
              <i className="far fa-calendar-alt"></i>
              <span className="text-light">조직수</span>
            </div>
          </div>
          <div className="quickview__item">
            <div className="quickview__item-total">{0}</div>
            <div className="quickview__item-description">
              <i className="far fa-calendar-alt"></i>
              <span className="text-light">회원수</span>
            </div>
          </div>
          <div className="quickview__item">
            <div className="quickview__item-total">{0}</div>
            <div className="quickview__item-description">
              <i className="far fa-calendar-alt"></i>
              <span className="text-light">대회수</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
