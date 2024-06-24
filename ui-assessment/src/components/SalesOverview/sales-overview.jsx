import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { faInfoCircle, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled.div`
  background-color: white;
  border-radius: 8px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 24px;
`

const Title = styled.h2`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  color: #4299e1;

  & > svg {
    margin-right: 8px;
  }
`

const Info = styled.p`
  color: #718096;
  margin-bottom: 24px;
  padding: 0 24px;

  span {
    color: black;
    font-weight: 700;
  }
`

const Stats = styled.div`
  display: flex;
  border-top: 1px solid #dde0e3;
`

const StatsSection = styled.div`
  flex: 1;
  padding: 24px;
  border-right: 1px solid #dde0e3;

  &:last-child {
    border-right: none;
  }
`

const Percentage = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #48bb78;
`

const Label = styled.div`
  color: #718096;
`

const SalesOverview = ({ sales }) => {
  return (
    <Container>
      <Header>
        <Title>
          <FontAwesomeIcon icon={faUpload} />
          Sales
        </Title>
        <FontAwesomeIcon icon={faInfoCircle} color="#a0aec0" />
      </Header>
      <Info>
        You had <span>{`${sales.uploads} uploads`}</span> and{' '}
        <span>{`${sales.linesAttempted} lines added`}</span>.
      </Info>
      <Stats>
        <StatsSection>
          <Percentage>{`${sales.successfulUploads}%`}</Percentage>
          <Label>UPLOAD SUCCESS</Label>
        </StatsSection>
        <StatsSection>
          <Percentage>{`${sales.linesSaved}%`}</Percentage>
          <Label>LINES SAVED</Label>
        </StatsSection>
      </Stats>
    </Container>
  )
}

SalesOverview.propTypes = {
  sales: PropTypes.shape({
    uploads: PropTypes.number.isRequired,
    linesAttempted: PropTypes.number.isRequired,
    successfulUploads: PropTypes.number.isRequired,
    linesSaved: PropTypes.number.isRequired,
  }).isRequired,
}

export default SalesOverview
