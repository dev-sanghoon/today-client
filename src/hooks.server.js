import axios from 'axios';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const COOKIE_NAME = 'access_token';
	const accessToken = event.cookies.get(COOKIE_NAME);
	if (accessToken) {
		const { data } = await axios({
			url: 'http://127.0.0.1:3000/api/user',
			headers: {
				Cookie: `${COOKIE_NAME}=${accessToken}`
			}
		});
		event.locals.user = data.user;
	}

	return resolve(event);
}
