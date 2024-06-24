import React from 'react'
import { render } from '@testing-library/react'
import SupportContact from './components/SupportContact'

const support = {
  name: 'John Smith',
  email: 'john.smith@feefo.com',
  phone: '020 3362 4208',
}

test('renders SupportContact component', () => {
  const { getByText } = render(<SupportContact support={support} />)
  expect(getByText(/John Smith/i)).toBeInTheDocument()
  expect(getByText(/john.smith@feefo.com/i)).toBeInTheDocument()
  expect(getByText(/020 3362 4208/i)).toBeInTheDocument()
})
