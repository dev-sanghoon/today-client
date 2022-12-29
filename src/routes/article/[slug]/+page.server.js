import { error } from '@sveltejs/kit';
import axios from 'axios';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const { data } = await axios.get(`http://localhost:3000/api/article/${params.slug}`);
	if (!data) {
		throw error(404, 'Not found');
	}

	return { content: data.content };
}
