import React from 'react';
import { Button } from 'react-bootstrap';

const ActionButton = (props) => {
	const { label, doAction } = props;
	return (
		<Button variant="primary" className="border border-dark" onClick={doAction}>{label}</Button>
	);
};

export default ActionButton;
