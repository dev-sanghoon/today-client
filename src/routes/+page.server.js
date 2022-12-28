import { error } from '@sveltejs/kit';
import axios from 'axios';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	async function getLogList() {
		const response = await axios.get('http://localhost:3000/api/feeds');
		// const response = await axios.get('/api');
		return { feeds: response.data };
	}

	const logList = await getLogList();

	if (logList) {
		return logList;
	}

	throw error(404, 'Not found');
}
