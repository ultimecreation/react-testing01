import { render, screen } from "@testing-library/react"
import Welcome from './Welcome'


it(' should find welcome in the page', () => {
    render(<Welcome />)
    const h1 = screen.getByText(/welcome/i)
    expect(h1).toBeInTheDocument()
})