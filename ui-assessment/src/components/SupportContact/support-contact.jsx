import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled.div``

const Title = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: grey;
`

const Details = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`

const Icon = styled.div`
  background-color: rgb(228, 204, 60);
  color: black;
  border-radius: 4px;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  margin-right: 12px;
`

const Info = styled.div``

const Name = styled.div`
  font-weight: 600;
  font-size: 14px;
`

const ContactInfo = styled.div`
  display: flex;
  margin-top: 4px;
  flex-direction: column;
  gap: 4px;
`

const ContactInfoItem = styled.div`
  font-size: 14px;
  color: grey;
  display: flex;
  align-items: center;

  & > svg {
    margin-right: 8px;
  }
`

const SupportContact = ({ support }) => {
  return (
    <Container>
      <Title>YOUR FEEFO SUPPORT CONTACT</Title>
      <Details>
        <Icon>S</Icon>
        <Info>
          <Name>{support.name}</Name>
          <ContactInfo>
            <ContactInfoItem>
              <FontAwesomeIcon icon={faEnvelope} />
              {support.email}
            </ContactInfoItem>
            <ContactInfoItem>
              <FontAwesomeIcon icon={faPhoneAlt} />
              {support.phone}
            </ContactInfoItem>
          </ContactInfo>
        </Info>
      </Details>
    </Container>
  )
}

SupportContact.propTypes = {
  support: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
}

export default SupportContact
