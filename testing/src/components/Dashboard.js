import React from 'react';
import styled from 'styled-components';

export default function Dashboard(props) {
	const Buttons = styled.div`
		width: 20%;
		margin-left: 5%;
		padding: 10px;
		border-radius: 30px;
		width: 50%;
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
		display: flex;
		justify-content: row;
		border-radius: 30px;
		justify-content: center;
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
