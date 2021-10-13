import { render, screen } from '@testing-library/react';
import App from './App';
import { store } from "../store";
import { Provider } from 'react-redux';

const ProviderWrapper = ({ children }) => (
	<Provider store={store}>{children}</Provider>
);

it('Renders Title', () => {
  console.log(store);
  render(<App />, { wrapper: ProviderWrapper});
  const title = screen.getByText(/Robofriends/i);
  expect(title).toBeInTheDocument();
});
