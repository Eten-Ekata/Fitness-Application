import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import HeroBanner from '../HeroBanner'
test('should first', async() => { 
    render(<HeroBanner/>)
    const trial= screen.getByText(/fitness/i);
    expect(trial).toBeInTheDocument()

 });