import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Hero from '../components/Hero'
 
describe('Hero', () => {

	it('renders the component', () => {

		render(
		
			<Hero />
		);
	})
})