import React from 'react';
import { Button } from 'react-bootstrap';

const SayButton = (props) => {
	const {label, onSay} = props;
	return (
		<Button variant="light" className="border border-dark" onClick={onSay}>{label}</Button>
	);
};

export default SayButton;
