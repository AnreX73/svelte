import { writable } from 'svelte/store';
export const Smart = writable([]);

const fetchSmart = async () => {
	const url = 'http://127.0.0.1:8000/api/v1/smartlist/';
	const res = await fetch(url);
	const data = await res.json();
	console.log(data);
}
	
// 	const loadedSmart = data.results.map((data) => {
// 		return {
// 			name: data.title,
// 			id: data.id
			
// 		};
// 	});
// 	Smart.set(loadedSmart);
	
// };

fetchSmart();
