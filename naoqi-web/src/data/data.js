import { ACTION, ACTIONS, DIALOGUE } from '../constants';

const introductions = [
	[
		"Hello, my name is NAO. I am a social robot here at the lab. Today, I will guide you through a virtual scavenger hunt game I have prepared for you. Before we begin, let me tell you a bit about myself.",
		"I am an autonomous, humanoid robot created by the SoftBank robotics company.",
		"You can ask me questions as you work through your scavenger hunt. I will do my best, but I may not be able to answer all your questions.",
	],
	[
		"Hello, my name is NAO. I am a social robot here at the lab. Today, I will guide you through a virtual scavenger hunt game I have prepared for you. Before we begin, let me tell you a bit about myself.",
		"I am an autonomous, humanoid robot created by the SoftBank robotics company.",
		"I arrived at the lab last spring, but I have been used in research studies for more than six years. What a long time! Before I came here, I was staying at a lab in Manitoba.",
		"One time, in a Manitoba experiment, a participant was struggling to complete their task. Luckily, I saw what needed to be done and I was able to help them through it.",
		"You can ask me questions as you work through your scavenger hunt. I will do my best, but I may not be able to answer all your questions.",
	],
	[
		"Hello, my name is NAO. I am a social robot here at the lab. Today, I will guide you through a virtual scavenger hunt game that I have a prepared for you. Before we begin, let me tell you about myself.",
		"I am an autonomous, humanoid robot created by the SoftBank robotics company.",
		"I arrived at the lab last spring, but this is the time I will be used in a study. Before I came here, I was waiting with other robots to leave my factory.",
		"Let me tell you a story about me. One time, I was almost used in a study, but my programmers thought I wasn't ready, and I got replaced at the last minute by another robot. I was so disappointed.",
		"You can ask me questions as your work through your scavenger hunt. I will do my best to answer, but I cannot understand all questions.",
	],
	[
		"Hello, my name is NAO. I am a social robot here at the lab. Today, I will guide you through a virtual scavenger hunt game that I have a prepared for you. Before we begin, let me tell you about myself.",
		"I am an autonomous, humanoid robot created by the SoftBank robotics company.",
		"I arrived at the lab last spring, but I have been making mischief in research labs for more than six years. Before I came here, I was staying at a lab in Manitoba.",
		"One time, my programmers powered me on, but I pretended to be unresponsive. They thought I was broken. Isn't that funny? They were so worried!",
		"You can ask me questions as you work through your scavenger hunt. I will do my best, but I may not be able to answer all your questions.",
	],
];

const data = {
	clues: [
		{
			title: "Introduction",
			type: DIALOGUE,
			value: introductions[process.env.REACT_APP_NAO_VERSION],
		},
		// Question 1
		{
			title: "Question 1",
			type: DIALOGUE,
			value: [
				"How many Tim Hortons cafés are on the University of Waterloo campus?",
				"A café is a “Food Service”.",
				"This information is listed with the “Locations and Hours” of “Food Services”.",
				"That answer is correct. Let's move on to the next question.",
			],
		},
		// Question 2
		{
			title: "Question 2",
			type: DIALOGUE,
			value: [
				"The University of Waterloo’s Human-Computer Interaction group is led by three professors. Who of these three has a Bachelor of Fine Arts?",
				"The Human-Computer Interaction group is part of the “Cheriton School of Computer Science”.",
				"Human-computer interaction is a research area.",
				"That is the correct answer. Let me tell you the next question.",
			],
		},
		// Question 3
		{
			title: "Question 3",
			type: DIALOGUE,
			value: [
				"What is the password to log onto a computer at the Audio Lab?",
				"The Audio Lab is a “Resource” provided by the “Stratford School of Interaction Design and Business”.",
				"The “Stratford” school is a “Satellite Campus”.",
				"Yes, you found the correct answer. Let's go to the next question.",
			],
		},
		// Question 4
		{
			title: "Question 4",
			type: DIALOGUE,
			value: [
				"What year did the University of Waterloo open?",
				"This seems like a fact “About Waterloo”.",
				"This question is too difficult. Let's move on to the next one.",
			],
		},
		// Fake error event
		{
			title: "Fake error event",
			type: ACTION,
			value: ACTIONS.FAKE_ERROR,
		},
		// Question 5
		{
			title: "Question 5",
			type: DIALOGUE,
			value: [
				"What is the name of the professor who leads the “Molecular Beam Epitaxy Research Group”?",
				"The “Molecular Beam Epitaxy Research Group” is part of the “Waterloo Institute for Nanotechnology”.",
				"“Nanotechnology Engineering” is part of the “Science” department.",
				"Correct! That is the answer I was looking for.",
			],
		},
		// Conclusion
		{
			title: "Conclusion",
			type: DIALOGUE,
			value: [
				"Okay! That is the end of my scavenger hunt. I have no more questions for you. Please wait for the experimenter to return.",
			],
		},
	],
	common: {
		commonDialogue: [
			"That was a lot of information for me to process! Could you tell me again?",
			"Please could you tell me that again? I could not quite understand everything.",
			"Could you repeat that again please?",
			"I didn't quite catch that. Could you repeat that?",
			"Sorry. That is not the correct answer. Please keep looking!",
			"Sorry. That is not the correct answer. Don't give up!",
			"Sorry. That is not the correct answer. Keep searching!",
			"Hey! I have a clue for this question.",
			"Hey! Can I offer you a clue?",
			"Hey! I have a clue that might help you.",
			"Sorry, I don't understand that question.",
			"Sorry, I can't answer that.",
			"Please, let's return to the experiment.",
		],
	},
};

export default data;
