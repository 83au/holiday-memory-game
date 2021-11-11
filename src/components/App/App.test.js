import { render, screen } from '@testing-library/react';
import Services from '../Services';
import App from './App';


const AppMount = () => (
  <Services>
    <App />
  </Services>
)


describe('App', () => {
  it('displays the title "Halloween Memory Game!"', () => {
    render(<AppMount />)

    const headingElement = screen.getByText(/Halloween Memory Game!/i)

    expect(headingElement).toBeInTheDocument()
  });

  it('initially displays "Tries: 0" in green text', () => {
    render(<AppMount />)

    const triesElement = screen.getByText(/Tries: 0/i)
    
    expect(triesElement).toHaveClass('green')
  })
})
