<script>
	import { quintOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
import PollCard from '$lib/PollCard.svelte';

	const [send, receive] = crossfade({
		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 600,
				easing: quintOut,
				css: t => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
			};
		}
	});

	let todos = [
		{ id: 1, done: false, description: 'написать что-нибудь в документацию' },
		{ id: 2, done: false, description: 'начать писать речь для JSConf' },
		{ id: 3, done: true, description: 'купить молока' },
		{ id: 4, done: false, description: 'покосить газон' },
		{ id: 5, done: false, description: 'покормить черепашку' },
		{ id: 6, done: false, description: 'пофиксить пару багов' },
	];

	let uid = todos.length + 1;

	function add(input) {
		const todo = {
			id: uid++,
			done: false,
			description: input.value
		};

		todos = [todo, ...todos];
		input.value = '';
	}

	function remove(todo) {
		todos = todos.filter(t => t !== todo);
	}
</script>

<PollCard>
<div class='board'>
	<input
		class="new-todo"
		placeholder="что нужно сделать?"
		on:keydown="{event => event.key === 'Enter' && add(event.target)}"
	>
<div class="todo-list">

	<div class='left'>
		<h2>задачи</h2>
		{#each todos.filter(t => !t.done) as todo (todo.id)}
			<label
				in:receive="{{key: todo.id}}"
				out:send="{{key: todo.id}}"
				animate:flip
			>
				<input type=checkbox bind:checked={todo.done}>
				{todo.description}
				<button on:click="{() => remove(todo)}">x</button>
			</label>
		{/each}
	</div>

	<div class='right'>
		<h2>готово</h2>
		{#each todos.filter(t => t.done) as todo (todo.id)}
			<label
				in:receive="{{key: todo.id}}"
				out:send="{{key: todo.id}}"
				animate:flip
			>
				<input type=checkbox bind:checked={todo.done}>
				{todo.description}
				<button on:click="{() => remove(todo)}">x</button>
			</label>
		{/each}
	</div>
</div>
</div>
</PollCard>
<style>
	.new-todo {
		font-size: 1.1em;
		width: 95%;
		
		border-radius: 8px;
		padding: 10px;
	}
	.todo-list{
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr 1fr;
		justify-content: space-around;
		gap: 20px;
	}

	.board {
		display: grid;
		grid-template-columns: 1fr;
		padding: 20px;
		max-width: 960px;
		margin: 20px auto;
	}

	

	h2 {
		font-size: 2em;
		font-weight: 200;
		user-select: none;
	}

	label {
		top: 0;
		left: 0;
		display: block;
		font-size: 1em;
		line-height: 1;
		padding: 0.5em;
		margin: 0 auto 0.5em auto;
		border-radius: 2px;
		background-color: #eee;
		user-select: none;
        border-radius: 10px;
	}

	input { 
        margin: 0
     }

	.right label {
		background-color:  rgba(0, 128, 128, 0.2);;
	}

	button {
		float: right;
		height: 1em;
		box-sizing: border-box;
		padding: 0 0.5em;
		line-height: 1;
		background-color: transparent;
		border: none;
		color: rgb(170,30,30);
		opacity: 0;
		transition: opacity 0.2s;
	}

	label:hover button {
		opacity: 1;
	}
</style>
