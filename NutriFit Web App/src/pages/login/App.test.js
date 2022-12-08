import { render, screen } from '@testing-library/react';
import App from './Appln';
import Appln from './index'
import Appln from './login'

test('renders learn react link', () => {
  render(<Appln />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
