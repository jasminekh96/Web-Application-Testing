import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

test('renders without crashing', () => {
	const wrapper = rtl.render(<App />);
	console.log(wrapper.debug());
});

test('renders dashboard component', () => {
	const wrapper = rtl.render(<Dashboard />);
	console.log(wrapper.debug());
});

test('renders display component', () => {
	const wrapper = rtl.render(<Display />);
	console.log(wrapper.debug());
});
test('renders dashboarDisplay component', () => {
	const wrapper = rtl.render(<DashboardDisplay />);
	const element = wrapper.getByText(/strikes/i);
	expect(element).toBeInTheDocument();
});
