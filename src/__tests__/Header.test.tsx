import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Header, { Mode } from '../components/Header'
 
describe('Header', () => {

	it('renders the component', () => {

		render(

			<Header mode={Mode.landpage} />
		);
	})
})