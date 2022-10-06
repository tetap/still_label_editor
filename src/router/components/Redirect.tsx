/*
 *@description: 重定向
 *@author: zyc
 *@date-time: 2022-09-01 23:46:46
 */
import React from 'react'
import { Navigate, NavigateProps } from 'react-router-dom'

export default React.memo((props: Pick<NavigateProps, 'to' | 'state'>) => {
  return <Navigate {...props} replace />
})
