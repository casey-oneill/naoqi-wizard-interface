import { ACTION, ACTIONS, DIALOGUE } from '../constants';

const data = {
	clues: [
		// Question 1
		{
			title: "Question 1",
			type: DIALOGUE,
			value: [
				"Okay. Let's begin!",
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
			"That is the correct answer.\\eos=1\\Here is the next question.",
			"That is correct.\\eos=1\\Here is the next question.",
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
