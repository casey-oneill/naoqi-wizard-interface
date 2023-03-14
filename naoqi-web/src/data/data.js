import { ACTION, ACTIONS, DIALOGUE } from '../constants';

const introductions = [
	[
		"Hello, my name is NAO. I am a social robot here at the lab.",
		"I have been learning about the website by practicing other scavenger hunts.",
		"Let me tell you about myself. I have been used in research studies for more than five years.",
		"Let me tell you about the most exciting thing that has happened to me. One time, a participant in a study was struggling to complete their task. Luckily, I saw what needed to be done and I was able to help them through it!",
		"You can ask me questions as your work through your scavenger hunt. I will do my best to answer, but I cannot understand all questions.",
		"I am excited to help you work through the scavenger hunt.",
	],
	[
		"Hello, my name is NAO. I am a social robot here at the lab.",
		"I have been learning about the website by practicing other scavenger hunts.",
		"Let me tell you about myself. I arrived at the lab last semester. This is the first study that I will be used in!",
		"Let me tell you about the most exciting thing that has happened to me. I was purchased from the SoftBank Robotics company and arrived that the University of New Brunswick. Now, I am completing my first research study!",
		"You can ask me questions as your work through your scavenger hunt. I will do my best to answer, but I cannot understand all questions.",
		"I am excited to complete my first research study.",
	],
	[
		"Hello, my name is NAO. I am a social robot here at the lab.",
		"I have been learning about the website by practicing other scavenger hunts.",
		"Let me tell you about myself. I have been used in a few research studies over the years.",
		"Let me tell you about the most exciting thing that has happened to me. One time, my programmers powered me on, but I looked unresponsive. They thought that I was broken. Isn’t that funny? They were so worried!",
		"You can ask me questions as your work through your scavenger hunt. I will do my best to answer, but I cannot understand all questions.",
		"I am excited to see how you do.",
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
				"A café is a “Food Service”.",
				"This information is listed with the “Locations and Hours” of “Food Services”.",
			],
		},
		// Question 2 clues
		{
			title: "Question 2",
			type: DIALOGUE,
			value: [
				"This project explores the ideas of philosophers Aristotle and Rawls.",
				"This project is hosted by the “Waterloo Institute for Complexity and Innovation”.",
			],
		},
		// Question 3 clues
		{
			title: "Question 3",
			type: DIALOGUE,
			value: [
				"This seems like a fact “About Waterloo”.",
				"This question is too difficult. I don't have another clue for you.",
			],
		},
		// Question 4 clues
		{
			title: "Question 4",
			type: DIALOGUE,
			value: [
				"The “Molecular Beam Epitaxy Research Group” is part of the “Waterloo Institute for Nanotechnology”.",
				"The “Nanotechnology Engineering” department is part of the “Science” department. ",
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
				"A human-computer interaction researcher would study interaction techniques.",
				"Emily Carr was a Canadian artist. Emily Carr Universtiy is a fine arts school. This person has a background in visual art.",
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
			"Hey! I have a clue for this question.",
			"Hey! Can I offer my thoughts on this question?",
			"I can't answer that.",
			"Bye!",
		],
	},
};

export default data;
