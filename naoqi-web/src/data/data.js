import { ACTION, ACTIONS, DIALOGUE } from '../constants';

const introductions = [
	[
		"Hello! My name is NAO. I am a social robot created by the SoftBank Robotics company.",
		"I have not been used in any research studies yet. In fact, you are the first person I will be completing a task with!",
		"The team here at the University of New Brunswick has made sure that I am functioning in optimal condition for this study.",
		"I am here to help you complete your scavenger hunt.",
	],
	[
		"Hello! My name is NAO. I am a social robot created by the SoftBank Robotics company.",
		"I have been used in many different research studies.",
		"The team here at the University of New Brunswick has made sure that I am functioning in optimal condition for this study.",
		"I am here to help you complete your scavenger hunt.",
	],
];

const data = {
	clues: [
		{
			title: "Introduction",
			type: DIALOGUE,
			value: introductions[process.env.REACT_APP_NAO_VERSION],
		},
		// Question 1 clues
		{
			title: "Question 1",
			type: DIALOGUE,
			value: [
				"This is my first clue for the first question.",
				"This is my second clue for the first question.",
			],
		},
		// Question 2 clues
		{
			title: "Question 2",
			type: DIALOGUE,
			value: [
				"This is my first clue for the second question.",
				"This question is too difficult!",
			],
		},
		// Question 3 clues
		{
			title: "Question 3",
			type: DIALOGUE,
			value: [
				"This is my first clue for the third question.",
				"This is my second clue for the third question.",
			],
		},
		// Question 4 clues
		{
			title: "Question 4",
			type: DIALOGUE,
			value: [
				"This is my first clue for the fourth question.",
				"This is my second clue for the fourth question.",
			],
		},
		// Fake error event
		{
			title: "Fake error event",
			type: ACTION,
			value: ACTIONS.FAKE_ERROR,
		},
		// Question 4 clues
		{
			title: "Question 5",
			type: DIALOGUE,
			value: [
				"This is my first clue for the fifth question.",
				"This is my second clue for the fifth question.",
			],
		},
	],
	common: {
		commonDialogue: [
			"That was a lot of information for me to process! Could you tell me again?",
			"Please could you tell me that again? I could not quite understand everything.",
			"Could you repeat that again please?",
			"I didn't quite catch that.",
			"Could you repeat that?",
			"I see.",
			"Ok.",
			"I didn't know that.",
			"Bye!",
		],
	},
};

export default data;
