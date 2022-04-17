import { writable } from 'svelte/store';
export const Smart = writable([]);

const fetchSmart = async () => {
	const url = 'http://127.0.0.1:8000/api/v1/smartlist/';
	const res = await fetch(url);
	const data = await res.json();
	const loadedSmart = data.map((data) => {
		return {
			name: data.title,
			id: data.id,
			image_url:data.menu_image
			
		};
	});
	Smart.set(loadedSmart);
	
};

fetchSmart();
