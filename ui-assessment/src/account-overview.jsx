import React from 'react'
import { SalesOverview, SupportContact } from './components'

export const AccountOverview = ({ data }) => {
  return (
    <div className="AccountOverview">
      <SupportContact />
      <SalesOverview />
    </div>
  )
}

export default AccountOverview
