import { ACTION, ACTIONS, DIALOGUE } from '../constants';

const data = {
	clues: [
		// Question 1
		{
			title: "Question 1",
			type: DIALOGUE,
			value: [
				"Hello, I am NAO.",
			],
		},
		// Fake error event
		{
			title: "Fake error event",
			type: ACTION,
			value: ACTIONS.FAKE_ERROR,
		},
	],
	common: {
		commonDialogue: [
			"Hello, I am NAO.",
		],
	},
};

export default data;
