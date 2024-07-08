import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header, { Mode } from '../components/Header';

describe('Header component', () => {

    beforeEach(() => {

        render(

            <Router>

                <Header mode={Mode.landpage} />
            </Router>
        );
    });

    it('renders without errors', () => {

        // This test verifies that the Header component renders without throwing errors.
        // No need for additional assertions unless specific elements need verification.
    });

    describe('Logo link', () => {

        it('should point to "/"', () => {

            // Attempt to find the logo link by accessible name first
            const logoLink = screen.getByRole('link', { name: /habitud\.fr/i });

            // If getByRole fails, try to find it by visible text content
            if (!logoLink) {

                const logoLinkByText = screen.getByText('habitud.fr', { exact: false });

                expect(logoLinkByText.closest('a')).toHaveAttribute('href', '/');
            } 
			else {

                expect(logoLink).toHaveAttribute('href', '/');
            }
        });
    });

    describe('Button link', () => {

        it('should point to "/dashboard" when in landpage mode', () => {

            // Attempt to find the button link by accessible name first
            const passActionLink = screen.getByRole('link', { name: /passer à l'action/i });

            // If getByRole fails, try to find it by visible text content
            if (!passActionLink) {

                const passActionLinkByText = screen.getByText('Passer à l\'action', { exact: false });
				
                expect(passActionLinkByText.closest('a')).toHaveAttribute('href', '/dashboard');
            } 
			else {
				
                expect(passActionLink).toHaveAttribute('href', '/dashboard');
            }
        });
    });
});
