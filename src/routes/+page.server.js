import { error } from '@sveltejs/kit';
import axios from 'axios';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	async function getLogList() {
		const response = await axios.get('http://127.0.0.1:8080/api/feeds');
		return { feeds: response.data };
	}

	const logList = await getLogList();

	if (logList) {
		return { ...logList, currentUser: locals.user };
	}

	throw error(404, 'Not found');
}
