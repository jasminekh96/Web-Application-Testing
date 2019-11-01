import React from 'react';
import styled from 'styled-components';

export default function Dashboard(props) {
	const Buttons = styled.div`
		width: 100%;
		border-radius: 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
		align-content: center;
	`;
	const Button = styled.button`
		width: 30%;
		background-color: #bc8f8f;
		font-size: 1.3rem;
		font-weight: bold;
		color: green;
		height: 2rem;
		margin-bottom: 20px;
		margin-top: 20p;
		border-radius: 30px;
	`;

	return (
		<Buttons>
			<Button onClick={props.hit}>Hit</Button>
			<Button onClick={props.strike}>Strike</Button>
			<Button onClick={props.ball}>Ball</Button>
			<Button onClick={props.foul}>Foul</Button>
		</Buttons>
	);
}
