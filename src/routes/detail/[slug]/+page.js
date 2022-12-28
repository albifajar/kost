// @ts-nocheck
import { error } from '@sveltejs/kit';
import { PUBLIC_API_URL } from '$env/static/public';

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
	console.log(PUBLIC_API_URL);
	if (params?.slug) {
		const res = await fetch(`${PUBLIC_API_URL}/kos-enams/${params.slug}?populate=*`);
		return await res.json();
	}
	throw error(404, 'Not found');
}
