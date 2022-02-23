import { writable } from 'svelte/store';

export const PostStore = writable([
	{
		id: 1,
		title: 'first',
		rating: 8,
		body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, at dolores! Enim rem impedit corporis ut illum voluptates? Qui quo, aliquid illo totam perspiciatis consequatur enim quis doloribus eveniet vel?'
	},
	{
		id: 2,
		title: 'second',
		rating: 4,
		body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, '
	},
	{
		id: 3,
		title: 'third',
		rating: 9,
		body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.  at dolores! Enim rem  ut illum voluptates? Qui quo, aliquid illo totam perspiciatis consequatur enim quis doloribus eveniet vel?consectetur adipisicing elit.  at dolores! Enim rem  ut illum voluptates? Qui quo, aliquid illo totam perspiciaticonsectetur adipisicing elit.  at dolores! Enim rem  ut illum voluptates? Qui quo, aliquid illo totam perspiciati'
	}
]);
