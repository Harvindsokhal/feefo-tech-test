import { render } from '@testing-library/react'
import AccountOverview from '../account-overview'

const data = {
  supportContact: {
    name: 'John Smith',
    email: 'john.smith@feefo.com',
    phone: '020 3362 4208',
  },
  salesOverview: {
    uploads: 8,
    successfulUploads: 3,
    linesAttempted: 20,
    linesSaved: 4,
  },
}

test('renders AccountOverview component', () => {
  const { getByText } = render(<AccountOverview data={data} />)
  expect(getByText(/John Smith/i)).toBeInTheDocument()
  expect(getByText(/john.smith@feefo.com/i)).toBeInTheDocument()
  expect(getByText(/020 3362 4208/i)).toBeInTheDocument()
  expect(getByText(/8 uploads/i)).toBeInTheDocument()
  expect(getByText(/20 lines added/i)).toBeInTheDocument()
  expect(getByText(/3%/i)).toBeInTheDocument()
  expect(getByText(/4%/i)).toBeInTheDocument()
})
