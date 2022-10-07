import React from 'react'
import { styled } from '@mui/material/styles'
import { NavLink, NavLinkProps } from 'react-router-dom'
import logo from '@/assets/logo.png'

const LogoNavLink = styled(NavLink)<NavLinkProps>(({ theme }) => ({
  display: 'inline-block',
  flex: 'none',
  height: '100%',
  padding: '0 16px',
  img: {
    height: '100%'
  }
}))

export const Logo = React.memo(() => {
  return (
    <LogoNavLink to="/dashboard">
      <img src={logo} alt="Still" />
    </LogoNavLink>
  )
})
