import React from 'react';
import styled from 'styled-components';

export default function Display(props) {
	const Title = styled.h2`
		text-align: center;
		color: green;
		font-size: 2rem;
	`;
	return (
		<div>
			<Title>Strikes : {props.strikes}</Title>
			<Title>Balls : {props.balls}</Title>
		</div>
	);
}
