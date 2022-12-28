<script>
	// @ts-nocheck
	/** @type {import('./$types').PageData} */ export let data;
	data = data.data;
	import { Card, Button, Toggle } from 'flowbite-svelte';
	let vCard = false;
</script>

<section class="relative max-h-screen min-h-screen overflow-y-hidden">
	<div class="bg-white shadow sticky top">
		<a href="/" class="text-gray-900">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="3em"
				height="3em"
				preserveAspectRatio="xMidYMid meet"
				viewBox="0 0 24 24"
				><g transform="rotate(90 12 12)"
					><path
						fill="currentColor"
						d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6l1.41-1.41z"
					/></g
				></svg
			>
		</a>
	</div>
	<img class="w-full object-fit" alt="data" src={data.attributes.gambar.data.attributes.url} />
	<div class="px-4 h-96 py-4">
		<div class="mt-2">
			<span class="text-xl font-bold tracking-tight text-gray-900">
				{data.attributes.nama_kosan}
			</span>
			<div class="mt-4" />
			<div class="mb-2 text-2xl font-bold tracking-tight text-gray-900 mt-4">Alamat</div>
			<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight mt-3">
				{data.attributes.alamat}
			</p>
		</div>
		<div class="mt-4" />
		<div class="mb-2 text-2xl font-bold tracking-tight text-gray-900 mt-4">Fasilitas</div>
		<div class="px-4">
			<ul class="list-disc">
				<li>Tempat Tidur</li>
				<li>Kamar Mandi di dalam</li>
				<li>Parkir Luas,</li>
				<li>Alat Masak</li>
			</ul>
		</div>
	</div>
	<div class="bg-yellow-300 w-full px-4 absolute bottom-0 flex justify-between items-center py-4">
		<span class="text-xl font-bold"
			>{data.attributes.tarif}<small>/{data.attributes.jangka_waktu}</small></span
		>
		<Button
			color="light"
			href="https://wa.me/6285174255050?text=I'm%20interested%20in%20your%20car%20for%20sale"
			>Chat on Whatsapp</Button
		>
	</div>
</section>
