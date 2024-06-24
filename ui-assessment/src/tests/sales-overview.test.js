import React from 'react'
import { render } from '@testing-library/react'
import SalesOverview from './components/SalesOverview'

const sales = {
  uploads: 8,
  successfulUploads: 3,
  linesAttempted: 20,
  linesSaved: 4,
}

test('renders SalesOverview component', () => {
  const { getByText } = render(<SalesOverview sales={sales} />)
  expect(getByText(/8 uploads/i)).toBeInTheDocument()
  expect(getByText(/20 lines added/i)).toBeInTheDocument()
  expect(getByText(/3%/i)).toBeInTheDocument()
  expect(getByText(/4%/i)).toBeInTheDocument()
})
