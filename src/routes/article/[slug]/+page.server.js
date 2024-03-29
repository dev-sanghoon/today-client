import { error } from '@sveltejs/kit';
import axios from 'axios';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const { data } = await axios.get(`http://127.0.0.1:8080/api/articles/${params.slug}`);
	if (!data) {
		throw error(404, 'Not found');
	}

	return { content: data.content };
}
