// @ts-nocheck
import { PUBLIC_API_URL } from '$env/static/public';
/** @type {import('./sverdle/$types').PageLoad} */
export async function load({ fetch }) {
	const res = await fetch(`${PUBLIC_API_URL}/kos-enams?populate=*`);

	return await res.json();
}
