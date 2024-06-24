import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { SalesOverview, SupportContact } from './components'

const Container = styled.main`
  max-width: 1024px;
  margin: 0 auto;
  padding: 24px;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`

const Title = styled.h1`
  font-weight: 600;
  font-size: 28px;
`

export const AccountOverview = ({ data }) => {
  return (
    <Container>
      <Header>
        <Title>Account Overview</Title>
        <SupportContact support={data.supportContact} />
      </Header>
      <SalesOverview sales={data.salesOverview} />
    </Container>
  )
}

AccountOverview.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AccountOverview
