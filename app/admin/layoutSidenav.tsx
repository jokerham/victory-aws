'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link'
import { FaTimes, FaUser, FaAward } from 'react-icons/fa';
import { FiUsers } from "react-icons/fi";
import { TbTournament } from "react-icons/tb";
import { useAddEventListeners, toggleClass } from './services/uihelper'

export default function LayoutSidenav() {
  const SIDENAV_ACTIVE_CLASS = 'sidenav--active'
  const GRID_NO_SCROLL_CLASS = 'grid--noscroll'

  const userName = ""

  // Sidenav list sliding functionality
  function sidenavClickHandler(e: Event) {
    let target = e.target as HTMLElement
    while (target.tagName !== 'DIV') target = target.parentNode as HTMLElement
    toggleClass(target, 'navList__subheading--open')
    toggleClass(target.nextSibling as HTMLElement, 'subList--hidden')
  }

  function resizeHandler(e: Event) {
    const sidenavEl = document.querySelector('.sidenav')
    const gridEl = document.querySelector('.grid')
    if (window.innerWidth > 750) {
      if (sidenavEl != null) sidenavEl.classList.remove(SIDENAV_ACTIVE_CLASS)
      if (gridEl != null) gridEl.classList.remove(GRID_NO_SCROLL_CLASS)
    }
  };

  function menuClickHandler(e: Event) {
    const sidenavEl = document.querySelector('.sidenav') as HTMLElement
    const gridEl = document.querySelector('.grid') as HTMLElement
    toggleClass(sidenavEl, SIDENAV_ACTIVE_CLASS)
    toggleClass(gridEl, GRID_NO_SCROLL_CLASS)
  }

  function sidenavCloseHandler() {
    const sidenavEl = document.querySelector('.sidenav') as HTMLElement
    const gridEl = document.querySelector('.grid') as HTMLElement
    toggleClass(sidenavEl, SIDENAV_ACTIVE_CLASS);
    toggleClass(gridEl, GRID_NO_SCROLL_CLASS);
  }

  useAddEventListeners([
    { class: '.navList__subheading', event: 'click', handler: sidenavClickHandler },
    { class: null, event: 'resize', handler: resizeHandler },
    { class: '.header__menu', event: 'click', handler: menuClickHandler },
    { class: '.sidenav__brand-close', event: 'click', handler: sidenavCloseHandler },
  ]);

  return (
    <aside className="sidenav">
      <div className="sidenav__brand">
        <i className="sidenav__brand-icon-victory"></i>
        <Link className="text-light brand-text" href="/admin">Victory</Link>
        <FaTimes className="sidenav__brand-close" />
      </div>
      <div className="sidenav__profile">
        <div className="sidenav__profile-avatar"></div>
        <div className="sidenav__profile-title text-light">{userName}</div>
      </div>
      <div className="row row--align-v-center row--align-h-center">
        <ul className="navList">
          <li className="navList__heading">관리자 메뉴</li>
            <li>
            <div className="navList__subheading row row--align-v-center">
              <span className="navList__subheading-icon"><FiUsers /></span>
              <span className="navList__subheading-title">단체 관리</span>
            </div>
            <ul className="subList subList--hidden">
              <Link href="/admin/institute/new"><li className="subList__item">신규 단체 추가</li></Link>
              <Link href="/admin/institute/list"><li className="subList__item">단체 목록 조회</li></Link>
            </ul>
          </li>
          <li>
            <div className="navList__subheading row row--align-v-center">
              <span className="navList__subheading-icon"><FaUser /></span>
              <span className="navList__subheading-title">회원 관리</span>
            </div>
            <ul className="subList subList--hidden">
              <Link href="/admin/member/new"><li className="subList__item">신규 회원 등록</li></Link>
              <Link href="/admin/member/list/unapproved"><li className="subList__item">미승인 회원 목록 조회</li></Link>
              <Link href="/admin/member/list/approved"><li className="subList__item">승인 회원 목록 조회</li></Link>
            </ul>
          </li>
          <li>
            <div className="navList__subheading row row--align-v-center">
              <span className="navList__subheading-icon"><TbTournament /></span>
              <span className="navList__subheading-title">대회 관리</span>
            </div>
            <ul className="subList subList--hidden">
              <Link href="/admin/tournament/new"><li className="subList__item">신규 대회 등록</li></Link>
              <Link href="/admin/tournament/list"><li className="subList__item">대회 목록 조회</li></Link>
              <Link href="/admin/scheduleMatching/list"><li className="subList__item">대전 매칭</li></Link>
              <Link href="/admin/matches/list"><li className="subList__item">대전 목록 조회</li></Link>
              <Link href="/admin/matches/history"><li className="subList__item">대전 결과 기록</li></Link>
            </ul>
          </li>
          <li>
            <div className="navList__subheading row row--align-v-center">
              <span className="navList__subheading-icon"><FaAward /></span>
              <span className="navList__subheading-title">상장</span>
            </div>
            <ul className="subList subList--hidden">
              <Link href="/admin/awards/tournament"><li className="subList__item">대회별 상장</li></Link>
              <Link href="/admin/awards/member"><li className="subList__item">회원별 상장</li></Link>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  );
}
