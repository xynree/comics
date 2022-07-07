import { render} from '@testing-library/react'
import Home from '../pages/index';

describe('Home', () => {
  it('Starts Correctly', () => {
    render(<Home comics={[]} />)
  })
})