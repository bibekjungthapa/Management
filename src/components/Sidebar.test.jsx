import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from './Sidebar';
import '@testing-library/jest-dom/extend-expect';


const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route path="*" element={ui} />
      </Routes>
    </MemoryRouter>
  );
};

describe('Sidebar Component', () => {
  it('renders all menu items', () => {
    renderWithRouter(<Sidebar />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('US Data Table')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
  });

  it('highlights the correct menu item based on location', () => {
    renderWithRouter(<Sidebar />, { route: '/products' });

    const productsMenu = screen.getByText('Products').closest('.ant-menu-item');
    expect(productsMenu).toHaveClass('ant-menu-item-selected');
  });

  it('toggles sidebar collapse state on icon click', () => {
    renderWithRouter(<Sidebar />);

    const toggleButton = screen.getByRole('img', { hidden: true }); 
    fireEvent.click(toggleButton);


   

    expect(screen.queryByText('Home')).not.toBeVisible();
  });

  it('has navigation links with correct paths', () => {
    renderWithRouter(<Sidebar />);

    const homeLink = screen.getByText('Home').closest('a');
    expect(homeLink).toHaveAttribute('href', '/');

    const dataLink = screen.getByText('US Data Table').closest('a');
    expect(dataLink).toHaveAttribute('href', '/data');
  });
});


