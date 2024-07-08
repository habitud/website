import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Hero component', () => {

    beforeEach(() => {

        render(

            <Router>

                <Hero />
            </Router>
        );
    });

    it('renders without errors', () => {

        // This test verifies that the Hero component renders without throwing errors.
        // No need for additional assertions unless specific elements need verification.
    });

    it('renders the "Passer à l\'action" link correctly', () => {
		
        const passActionLink = screen.getByRole('link', { name: /passer à l'action/i });

        if (!passActionLink) {

            const passActionLinkByText = screen.getByText('Passer à l\'action', { exact: false });
			
            expect(passActionLinkByText.closest('a')).toHaveAttribute('href', '/dashboard');
        } 
		else {

            expect(passActionLink).toHaveAttribute('href', '/dashboard');
        }
    });
});
