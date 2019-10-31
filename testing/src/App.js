import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display';
import styled from 'styled-components';

function App() {
	const Container = styled.div`
		background-color: white;
		border-radius: 60px;
	`;
	const [ strikes, setStrikes ] = useState(0);
	const [ balls, setBalls ] = useState(0);

	const strike = () => {
		if (strikes === 2) {
			setStrikes(0);
			setBalls(0);
		} else {
			setStrikes(strikes + 1);
		}
	};
	const ball = () => {
		if (balls === 3) {
			setBalls(0);
			setStrikes(0);
		} else {
			setBalls(balls + 1);
		}
	};
	const foul = () => {
		if (strikes === 2) {
			setStrikes(2);
		} else {
			setStrikes(strikes + 1);
		}
	};
	const hit = () => {
		setStrikes(0);
		setBalls(0);
	};
	return (
		<Container className='container'>
			<Display strikes={strikes} balls={balls} />
			<Dashboard ball={ball} strike={strike} foul={foul} hit={hit} />
		</Container>
	);
}
export default App;
