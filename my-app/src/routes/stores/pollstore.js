import { writable } from 'svelte/store';

export const PollStore = writable([
	{
		id: 1,
		question: 'python  или javascript',
		answerA: 'python',
		answerB: 'javascript',
		votesA: 7,
		votesB: 6
	}
]);
