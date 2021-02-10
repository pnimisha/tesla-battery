import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import TeslaCar from './components/TeslaCar/TeslaCar';

test('renders Tesla Battery Calculator', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Range Per Charge/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Car component', () => {
  const { container, getByText } = render(<TeslaCar wheelsize={21} />);
  const car = container.querySelector('.tesla-car');
  const wheelType = container.querySelector('.tesla-wheel--21');
  //console.log(car)
  expect(car).toBeInTheDocument()
  expect(wheelType).toBeInTheDocument()
  
});


//run sudo sysctl fs.inotify.max_user_watches=524288 to fix watchman error