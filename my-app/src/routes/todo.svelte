<script>
	import { quintOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import {fade, slide,scale} from 'svelte/transition';
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

<div class='board' transition:slide>
	<input
		class="new-todo"
		placeholder="что нужно сделать?"
		on:keydown={event => event.key === 'Enter' && add(event.target)}
	>

	<div class="todos-board">
	<div class='left'>
		<h2>задачи</h2>
		{#each todos.filter(t => !t.done) as todo (todo.id)}
			<label
				in:receive={{key: todo.id}}
				out:send={{key: todo.id}}
				animate:flip
			>
				<input type=checkbox bind:checked={todo.done}>
				{todo.description}
				<button on:click="{() => remove(todo)}">X</button>
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
				<button on:click="{() => remove(todo)}">X</button>
			</label>
		{/each}
	</div>
</div>
</div>

<style>
	.new-todo {
		font-size: 1.2em;
		width: 100%;
		margin: 2em 0 1em 0;
		padding:10px;
		border-radius: 8px;
		
	}

	.board {
		max-width: 960px;
		margin: 0 auto;
		padding: 10px;	
	}
	.todos-board{
		display: grid;
		grid-template-columns: 1fr 1fr;
		justify-items: center;
		gap: 10px;
		
	}

	.left, .right {
		
		width:24rem;
		background-color: rgb(2, 121, 121, 0.1);
		padding:15px;
		border-radius: 8px;
		box-shadow:1px 2px 4px;		
	}

	h2 {
		font-size: 2em;
		font-weight: bold;
		user-select: none;
	}

	label {
		display: grid;
		grid-template-columns:1fr 7fr 1fr;
		justify-content: space-between;
		top: 0;
		left: 0;
		font-size: 1em;
		line-height: 1;
		padding: 15px;
		margin: 0 auto 1em auto;
		border-radius: 8px;
		background-color: #eee;
		user-select: none;
		box-shadow:1px 1px 2px;	
	}

	input { margin: 0 }

	.right label {
		background-color: teal;
		color:azure;
		box-shadow:1px 2px 3px black;	
	}

	button {
		height: 1em;
		box-sizing: content-box;
		line-height: 1;
		background-color: transparent;
		border: none;
		color:red;
		opacity: 0;
		transition: opacity 0.2s;
		cursor: pointer;
	}

	label:hover button {
		opacity: 1;
	}
</style>