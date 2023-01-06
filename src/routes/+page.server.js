import { error } from '@sveltejs/kit';
import axios from 'axios';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	async function getLogList() {
		const response = await axios.get('http://127.0.0.1:3000/api/feeds');
		// const response = await axios.get('/api');
		return { feeds: response.data };
	}

	const logList = await getLogList();

	if (logList) {
		return logList;
	}

	throw error(404, 'Not found');
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		console.log('action executed', data);
	}
};
