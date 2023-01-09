import { error } from '@sveltejs/kit';
import axios from 'axios';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	async function getLogList() {
		const response = await axios.get('http://127.0.0.1:3000/api/feeds');
		return { feeds: response.data };
	}

	const logList = await getLogList();

	if (logList) {
		return logList;
	}

	throw error(404, 'Not found');
}
